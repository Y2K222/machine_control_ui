import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import config from "../../config"
import colors from "../../styles/colors"

const ProductionCard = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.itemCardWarpper}>
            <TouchableOpacity style={globalStyles.itemCard}
                onPress={() => navigation.navigate("ProductionDetail", { productionId: props.productionId })}
            >
                <Image style={{ width: "100%", height: 120, borderWidth: 1, borderColor: colors.grey, borderRadius: 10 }} source={{ uri: config.staticHost + props.photo }} />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.header}>{props.name}</Text>
                <Text style={globalStyles.normalText}>{props.location}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ProductionCard