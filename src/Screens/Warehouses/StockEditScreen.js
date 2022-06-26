import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"

const Stock = props => {

    const navigation = useNavigation()
    const [stockName, setStockName] = useState("")
    const [stockUnit, setStockUnit] = useState("")

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Edit Item Info" back={true} />
            <View style={globalStyles.smallSpace} />
            <View style={globalStyles.container}>
                <Text style={globalStyles.normalText}>Stock Item Name</Text>
                <TextInput
                    style={globalStyles.authInput}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>Stock Item Unit</Text>
                <TextInput
                    style={globalStyles.authInput}
                />
                <View style={globalStyles.mediumSpace} />
                <TouchableOpacity style={globalStyles.primaryButton}>
                    <Text style={globalStyles.primaryButtonText}>Update Data</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default Stock