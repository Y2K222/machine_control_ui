import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"

const ProductionCard = props => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={globalStyles.card} onPress={()=> navigation.navigate("ProductionDetail")}>
            <Image style={{ width: "100%", height: 180 }} source={{ uri: props.photo }} />
            <View style={globalStyles.smallSpace} />
            <Text style={globalStyles.header}>{props.name}</Text>
            <View style={globalStyles.smallSpace} />
            <Text style={globalStyles.normalText}>{props.location}</Text>
        </TouchableOpacity>
    )

}

export default ProductionCard