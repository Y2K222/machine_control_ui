import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native";

const RawCard = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.itemCard}>
            <Image style={{ width: "100%", height: 120 }} source={{ uri: "https://external-preview.redd.it/ZWx5UgslhG3V2QQx8mWD9ArsdVnHqTOX6b4vEvNY4l8.jpg?auto=webp&s=300f495bb7544299c6001e6000a047efbb1b264c" }} />
            <View style={globalStyles.smallSpace} />
            <Text style={globalStyles.title}>{props.name}</Text>
            <View style={{marginTop: -15}} />
            <View style={globalStyles.rowLeft}>
                <View style={globalStyles.half}>
                    <Text style={globalStyles.normalText}>Count</Text>
                </View>
                <View style={globalStyles.half}>
                    <Text style={globalStyles.normalText}>: 3</Text>
                </View>
            </View>
            <TouchableOpacity style={globalStyles.primaryButton}>
                <Text style={globalStyles.primaryButtonText}>Change Raw</Text>
                <Ionicons name="repeat-outline" size={30} color={colors.dark} />
            </TouchableOpacity>
        </View>
    )
 
}

export default RawCard