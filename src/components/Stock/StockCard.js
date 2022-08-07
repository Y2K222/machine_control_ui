import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native";
import config from "../../config";

const StockCard = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.itemCardWarpper}>
            <TouchableOpacity style={globalStyles.itemCard} onPress={() => navigation.navigate("StockDetail", { stockId: props.stockId })}>
                <Image style={{ width: "100%", height: 120, borderWidth: 1, borderColor: "#ddd" }} source={{ uri: props.photo ? config.staticHost + props.photo : config.staticHost + "/system/placeholder.png" }} />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.title}>{props.name}</Text>
                <View style={globalStyles.rowLeft}>
                    {
                        props.showAlertAt > props.totalInstock && (
                            <Ionicons name="alert-circle-outline" color={colors.warning} size={20} />
                        )
                    }
                    <Text style={globalStyles.normalText}> {props.totalInstock} {props.unit}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default StockCard