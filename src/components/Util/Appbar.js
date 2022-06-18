import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import Ionicons from  "react-native-vector-icons/Ionicons"
import colors from "../../styles/colors"

const Appbar = props => {
    const navigation = useNavigation()

    return (
        <View style={globalStyles.topToolsbar}>
            {
                props.back && (
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons name="chevron-back-outline" size={30} color={colors.textColor1} />
                    </TouchableOpacity>
                )
            }
            <Text style={globalStyles.header}>
                {props.title}
            </Text>
        </View>
    )
}

export default Appbar