import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, RefreshControl, ActivityIndicator, ToastAndroid } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import WarehouseCard from "../../components/Warehouse/WarehouseCard"
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler"
import colors from "../../styles/colors"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import System from "../../api/model/System"

const Warehouses = props => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [loading, setLoading] = useState(false)
    const [warehouses, setWarehouses] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    // Get all used warehouses
    const loadWarehouses = async () => {
        try {
            let data = await System.getWarehouses()
            setWarehouses(data)
        } catch (error) {
            ToastAndroid.show("ဒေတာများ မရနိုင်ပါ", ToastAndroid.SHORT)
        }
    }

    const onRefresh = async () => {
        await loadWarehouses()
    }

    useEffect(async () => {
        setLoading(true)
        await loadWarehouses()
        setLoading(false)
    }, [])

    useEffect(async () => {
        await loadWarehouses()
    }, [isFocused])

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ဂိုထောင်များ" />
            {
                loading ? (
                    <View style={globalStyles.perfectCenter}>
                        <ActivityIndicator color={colors.dark} size={50} />
                    </View>
                ) : (
                    <ScrollView
                        style={globalStyles.container}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.containerRow}>
                            {
                                warehouses.map(warehouse => (
                                    <WarehouseCard
                                        warehouseId={warehouse._id}
                                        photo={warehouse.photo}
                                        name={warehouse.name}
                                        location={warehouse.location}
                                        key={warehouse._id}
                                    />
                                ))
                            }
                        </View>
                        <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate("AddNewWarehouse")}>
                            <Text style={globalStyles.primaryButtonText}>ဂိုထောင်အသစ်ထည့်ရန်</Text>
                            <Ionicons name="add-outline" size={30} color={colors.dark} />
                        </TouchableOpacity>
                        <View style={globalStyles.mediumSpace} />
                    </ScrollView>
                )
            }
        </View >
    )
}

export default Warehouses