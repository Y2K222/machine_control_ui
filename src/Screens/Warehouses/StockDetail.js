import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"

const StockDetail = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ItemDetail" back={true} />
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
            </View>
        </View>
    )
}

export default StockDetail