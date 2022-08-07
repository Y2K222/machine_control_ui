import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ToastAndroid, ActivityIndicator } from "react-native"
import globalStyles from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import Appbar from "../../components/Util/Appbar"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import config from "../../config";
import mime from "mime"
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native";
import Warehouse from "../../api/model/Warehouse";

const InsertStock = props => {

    const navigation = useNavigation()
    const warehouseId = props.route.params.warehouseId
    const [photo, setPhoto] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [totalInstock, setTotalInstock] = useState("")
    const [showAlertAt, setShowAlertAt] = useState("")
    const [unit, setUnit] = useState("")
    const [note, setNote] = useState("")

    const getFileOnMobile = function (pickedImage) {
        // Step to get the file data on mobile
        let imageUri = "file:///" + pickedImage.uri.split("file:/").join("");
        let file = {
            uri: imageUri,
            type: mime.getType(imageUri),
            name: imageUri.split("/").pop(),
        };
        return file;
    }

    const uploadFile = file => {
        setUploading(true)

        let formData = new FormData()
        formData.append("file", file)
        let xhr = new XMLHttpRequest()
        xhr.open("post", `${config.host}/file/upload/warehouse`)

        xhr.onerror = error => {
            console.log(error)
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let response = xhr.responseText
                try {
                    response = JSON.parse(response)
                    setPhoto(response)
                } catch (error) {
                    console.log(error)
                }
                setUploading(false)
            }
        }

        xhr.send(formData)
    }

    const handlePickImage = async () => {
        let pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.3
        })

        if (pickedImage.cancelled) return
        // Then upload photo
        let file = getFileOnMobile(pickedImage)

        uploadFile(file)
    }

    const handleInsertNewStock = async () => {
        let stockItem = {
            photo,
            name,
            totalInstock,
            unit,
            showAlertAt,
            note
        }
        // Insert current stock
        setLoading(true)
        try {
            await Warehouse.createNewStock(warehouseId, stockItem)
            navigation.goBack()
        } catch (error) {
            console.log(error)
            ToastAndroid.show("လုပ်ဆောင်မှု မအောင်မြင်ပါ", ToastAndroid.SHORT)
        }
        setLoading(false)
    }

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ပစ္စည်းအသစ်ထည့်ရန်" back={true} />
            <KeyboardAwareScrollView style={globalStyles.container}>
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>ပစွည်းဓာတ်ပုံ</Text>
                <Image style={{ width: "100%", height: 300, resizeMode: "cover", borderWidth: 1, borderColor: colors.grey }} source={{ uri: photo ? config.staticHost + photo : config.staticHost + "/system/placeholder.png" }} />
                <View style={globalStyles.smallSpace} />
                <TouchableOpacity style={globalStyles.primaryButton} onPress={handlePickImage}>
                    {
                        uploading ? (
                            <ActivityIndicator size={20} color={colors.dark} />
                        ) : (
                            <>
                                <Text style={globalStyles.primaryButtonText}>ပုံတင်ရန်</Text>
                                <View style={globalStyles.smallSpaceRow} />
                                <Ionicons name="cloud-upload-outline" size={30} color={colors.dark} />
                            </>
                        )
                    }
                </TouchableOpacity>
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>ပစ္စည်းအမည်</Text>
                <TextInput
                    style={globalStyles.authInput}
                    placeholder="ပစ္စည်းအမည်ကို ရိုက်ထည့်ပါ"
                    onChangeText={val => setName(val)}
                    value={name}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>ပစ္စည်းအရေအတွက်</Text>
                <TextInput
                    keyboardType="number-pad"
                    style={globalStyles.authInput}
                    placeholder="ပစ္စည်းအရေအတွက်ကို ရိုက်ထည့်ပါ"
                    onChangeText={val => setTotalInstock(val)}
                    value={totalInstock}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>အနည်းဆုံးရှိရမည့် အရေအတွက်</Text>
                <TextInput
                    keyboardType="number-pad"
                    style={globalStyles.authInput}
                    placeholder="အနည်းဆုံးရှိရမည့် အရေအတွက်ကို ရိုက်ထည့်ပါ"
                    onChangeText={val => setShowAlertAt(val)}
                    value={showAlertAt}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>ပစ္စည်းယူနစ်</Text>
                <TextInput
                    style={globalStyles.authInput}
                    placeholder="ပစ္စည်းယူနစ်ကို ရိုက်ထည့်ပါ"
                    onChangeText={val => setUnit(val)}
                    value={unit}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>မှတ်ချက်</Text>
                <TextInput
                    multiline
                    style={{ ...globalStyles.authInput, height: 200, textAlignVertical: 'top' }}
                    placeholder="ပစ္စည်းနှင့်ပတ်သတ်၍ အခြားမှတ်သားလိုသော အကြောင်းအရာများ"
                    onChangeText={val => setNote(val)}
                    value={note}
                    numberOfLines={10}
                />
                <View style={globalStyles.mediumSpace} />
                <TouchableOpacity style={globalStyles.primaryButton} onPress={handleInsertNewStock}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color={colors.dark} />
                        ) : (
                            <>
                                <Text style={globalStyles.primaryButtonText}>ပစ္စည်းအသစ် ထည့်မည်</Text>
                                <View style={globalStyles.smallSpaceRow} />
                                <Ionicons name="add-outline" size={30} color={colors.dark} />
                            </>
                        )
                    }
                </TouchableOpacity>
                <View style={globalStyles.mediumSpace} />
            </KeyboardAwareScrollView>
        </View>
    )

}

export default InsertStock