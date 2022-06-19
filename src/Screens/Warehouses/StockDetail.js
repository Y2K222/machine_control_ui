import React, { useState, useTransition } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import DialogInput from "react-native-dialog-input"

const ItemActionBar = props => {

    const navigation = useNavigation()

    const [isDialogVisible, setIsDialogVisible] = useState(false)
    const [isStockIn, setIsStockIn] = useState(false)
    const [dialogTitle, setDialogTitle] = useState("")
    const [dialogMessage, setDialogMessage] = useState("")
    const [hintInput, setInitInput] = useState("")

    const handlePressStock = type => {
        if (type == "in") {
            setIsStockIn(true)
            setDialogTitle("Stock In")
            setDialogMessage("Please enter the numbers of item .")
            setInitInput("Enter numbers only. Eg(100, 200)")
            setIsDialogVisible(true)
        } else {
            setIsStockIn(false)
            setDialogTitle("Stock Out")
            setDialogMessage("Please enter the numbers of item .")
            setInitInput("Enter numbers only. Eg(100, 200)")
            setIsDialogVisible(true)
        }
    }

    const handleStockCountSubmit = count => {
        if (isStockIn) {

        } else {

        }
    }

    return (
        <>
            <DialogInput isDialogVisible={isDialogVisible}
                title={dialogTitle}
                message={dialogMessage}
                hintInput={hintInput}
                textInputProps={{ keyboardType: "number-pad" }}
                submitInput={(count)=> handleStockCountSubmit(count)}
                closeDialog={() => { setIsDialogVisible(false) }}>
            </DialogInput>
            <View style={globalStyles.rowCenter}>
                <TouchableOpacity style={globalStyles.actionItem} onPress={()=> handlePressStock("in")} >
                    <Ionicons name="enter-outline" size={40} color={colors.primary} />
                    <Text style={globalStyles.normalText}>Stock In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.actionItem} onPress={()=> handlePressStock("out")}>
                    <Ionicons name="exit-outline" size={40} color={colors.primary} />
                    <Text style={globalStyles.normalText}>Stock Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.actionItem} onPress={()=> navigation.navigate("StockDatas")} >
                    <Ionicons name="analytics-outline" size={40} color={colors.primary} />
                    <Text style={globalStyles.normalText}>Details</Text>
                </TouchableOpacity>
                <View style={globalStyles.actionItem}>
                    <Ionicons name="settings-outline" size={40} color={colors.primary} />
                    <Text style={globalStyles.normalText}>Edit</Text>
                </View>
            </View>
        </>
    )
}

const StockDetail = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ItemDetail" back={true} />
            <ScrollView>
                <View style={globalStyles.card}>
                    <Image style={{ width: "100%", height: 200, resizeMode: "cover" }} source={{ uri: "https://external-preview.redd.it/ZWx5UgslhG3V2QQx8mWD9ArsdVnHqTOX6b4vEvNY4l8.jpg?auto=webp&s=300f495bb7544299c6001e6000a047efbb1b264c" }} />
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.header}>အင်ဂျင်</Text>
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.normalText}>Total Instock: 200 လုံး</Text>
                    <Text style={globalStyles.normalText}>Show Alert At: 10 လုံး</Text>
                    <View style={globalStyles.smallSpace} />
                    <View style={globalStyles.seperator} />
                    <View style={globalStyles.smallSpace} />
                    <ItemActionBar />
                    <View style={globalStyles.smallSpace} />
                    <View style={globalStyles.seperator} />
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.title}>Notes</Text>
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.normalText}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default StockDetail