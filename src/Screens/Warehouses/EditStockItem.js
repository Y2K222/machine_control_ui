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
import Stocks from "../../api/model/Stocks";

const EditStockItem = props => {

    const navigation = useNavigation()
    const [photo, setPhoto] = useState(props.route.params.photo)
    const [name, setName] = useState(props.route.params.name)
    const [totalInstock, setTotalInstock] = useState(props.route.params.totalInstock + "")
    const [showAlertAt, setShowAlertAt] = useState(props.route.params.showAlertAt + "")
    const [unit, setUnit] = useState(props.route.params.unit)
    const [note, setNote] = useState(props.route.params.note)
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)

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

    const handleEditStock = async () => {
        let stockItem = {
            photo,
            name,
            totalInstock,
            unit,
            showAlertAt,
            note
        }
        setLoading(true)
        try {
            await Stocks.updateInfo(props.route.params._id, stockItem)
            navigation.goBack()
        } catch (error) {
            ToastAndroid.show("ပြင်ဆင်၍ မရနိုင်ပါ", ToastAndroid.SHORT)
        }
        setLoading(false)
    }

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ပစ္စည်းအား ပြင်ဆင်ရန်" back={true} />
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
                <TouchableOpacity style={globalStyles.primaryButton} onPress={handleEditStock}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color={colors.dark} />
                        ) : (
                            <>
                                <Text style={globalStyles.primaryButtonText}>ပြင်ဆင်မည်</Text>
                                <View style={globalStyles.smallSpaceRow} />
                                <Ionicons name="save-outline" size={30} color={colors.dark} />
                            </>
                        )
                    }
                </TouchableOpacity>
                <View style={globalStyles.mediumSpace} />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default EditStockItem