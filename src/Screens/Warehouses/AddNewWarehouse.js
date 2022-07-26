import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import Appbar from "../../components/Util/Appbar";

const AddNewWarehouse = props => {

    const navigation = useNavigation()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Add New Warehouse" back={true} />
            <View style={globalStyles.smallSpace} />
            <View style={globalStyles.container}>
                <Text style={globalStyles.normalText}>Warehouse Name</Text>
                <TextInput
                    style={globalStyles.authInput}
                />
                <View style={globalStyles.smallSpace} />
                <Text style={globalStyles.normalText}>Warehouse Location</Text>
                <TextInput
                    style={globalStyles.authInput}
                />
            </View>
        </View>
    )

}

export default AddNewWarehouse