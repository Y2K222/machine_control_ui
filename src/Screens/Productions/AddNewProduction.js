import { useNavigation, useTheme } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, Image, ToastAndroid, ActivityIndicator } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import Appbar from "../../components/Util/Appbar"
import System from "../../api/model/System"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import config from "../../config";
import mime from "mime"
import * as ImagePicker from "expo-image-picker"

const AddNewProduction = props => {

    const navigation = useNavigation()
    const [photo, setPhoto] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [name, setName] = useState("")
    const [totalOutputCount, setTotalOutputCount] = useState("")
    const [location, setLocation] = useState("")
    const [note, setNote] = useState("")
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

    const handleAddNewProduction = async () => {
        setLoading(true)
        // Production Object
        let production = {
            photo: photo || false,
            name,
            location,
            totalOutputCount,
            note,
        }
        try {
            await System.createCbProduction(production)
            navigation.goBack()
        } catch (error) {
            console.log(error)
            ToastAndroid.show("အသစ်ထည့်၍ မရနိုင်သေးပါ", ToastAndroid.SHORT)
        }
        setLoading(false)
    }

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ထုတ်လုပ်ရေး အသစ်ထည့်ရန်" back={true} />
            <KeyboardAwareScrollView style={globalStyles.container}>
                <View style={globalStyles.smallSpace} />
                {/* Warehouse photo */}
                <Text style={globalStyles.normalText}>Warehouse Photo</Text>
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
                {/* / Warehouse photo */}
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>အမည်</Text>
                <TextInput
                    style={globalStyles.authInput}
                    placeholder="အမည်ရိုက်ထည့်ပါ"
                    onChangeText={val => setName(val)}
                    value={name}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>ထွက်ရှိထားသည့် အရေအတွက်</Text>
                <TextInput
                    keyboardType="number-pad"
                    style={globalStyles.authInput}
                    placeholder="အရေအတွက်ကို ရိုက်ထည့်ပါ"
                    onChangeText={val => setTotalOutputCount(val)}
                    value={totalOutputCount}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>လိပ်စာ</Text>
                <TextInput
                    style={globalStyles.authInput}
                    placeholder="လိပ်စာကိုရိုက်ထည့်ပါ"
                    onChangeText={val => setLocation(val)}
                    value={location}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>မှတ်ချက်များ</Text>
                <TextInput
                    multiline
                    style={{ ...globalStyles.authInput, height: 200, textAlignVertical: 'top' }}
                    placeholder="မှတ်သားလိုသည့် အကြောင်းအရာများကိုရိုက်ထည့်ပါ"
                    onChangeText={val => setNote(val)}
                    value={note}
                    numberOfLines={10}
                />
                <View style={globalStyles.mediumSpace} />
                <TouchableOpacity style={globalStyles.primaryButton} onPress={handleAddNewProduction}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color={colors.dark} />
                        ) : (
                            <>
                                <Text style={globalStyles.primaryButtonText}>အသစ်ထည့်မည်</Text>
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

export default AddNewProduction