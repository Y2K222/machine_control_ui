import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import WarehouseCard from "../../components/Warehouse/WarehouseCard"
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler"
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native"

const Warehouses = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Warehouses" />
            <ScrollView style={globalStyles.container}>
                <View style={globalStyles.smallSpace} />
                <WarehouseCard
                    photo="https://sagotiva.com/wp-content/uploads/2021/03/warehouse.jpg"
                    name="ကုန်ကြမ်း ဂိုထောင်"
                    location="၆ရပ်ကွက် ရန်ကုန်လမ်း တောင်ဒဂုံ"
                />
                <WarehouseCard
                    photo="https://www.obwiik.com/wp-content/uploads/2020/02/obwiik-buildings-warehouse-building-2.jpg"
                    name="ဆီ ဂိုထောင်"
                    location="၆ရပ်ကွက် ရန်ကုန်လမ်း တောင်ဒဂုံ"
                />
                <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate("AddNewWarehouse")}>
                    <Text style={globalStyles.primaryButtonText}>Add New Warehouse</Text>
                    <Ionicons name="add-outline" size={30} color={colors.dark} />
                </TouchableOpacity>
                <View style={globalStyles.mediumSpace} />
            </ScrollView>
        </View>
    )
}

export default Warehouses