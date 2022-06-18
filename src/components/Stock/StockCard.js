import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native";

const StockCard = props => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={globalStyles.itemCard} onPress={() => navigation.navigate("StockDetail")}>
            <Image style={{ width: "100%", height: 120 }} source={{ uri: "https://external-preview.redd.it/ZWx5UgslhG3V2QQx8mWD9ArsdVnHqTOX6b4vEvNY4l8.jpg?auto=webp&s=300f495bb7544299c6001e6000a047efbb1b264c" }} />
            <View style={globalStyles.smallSpace} />
            <Text style={globalStyles.title}>{props.name}</Text>
            <Text style={globalStyles.normalText}> {props.totalInstock} {props.unit}</Text>
            {
                props.showAlertAt < props.totalInstock && (
                    <View style={globalStyles.rowLeft}>
                        <Ionicons name="alert-circle" size={20} color={colors.warning} />
                        <Text style={globalStyles.normalText}>Low Stock</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

export default StockCard