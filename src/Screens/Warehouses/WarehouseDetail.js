import React, { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid, ActivityIndicator, Alert } from "react-native"
import globalStyles from "../../styles"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import Warehouse from "../../api/model/Warehouse"
import config from "../../config"
import StockCard from "../../components/Stock/StockCard"
import Warehouses from "./Warehouses"

const WarehouseDetail = props => {

    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const warehouseId = props.route.params.warehouseId
    const [loading, setLoading] = useState(true)
    const [stockLoading, setStockLoading] = useState(true)
    const [stockLoaded, setStockLoaded] = useState(false)
    const [warehouse, setWarehouse] = useState(null)
    const [sotckItems, setStockItems] = useState([])

    const loadWarehouse = async () => {
        try {
            let result = await Warehouse.getInfo(warehouseId)
            setWarehouse(result)
        } catch (error) {
            ToastAndroid.show("Unable to load warehouse !", ToastAndroid.SHORT)
        }
    }

    const loadStockItems = async () => {
        try {
            let result = await Warehouse.getStock(warehouseId)
            setStockItems(result)
        } catch (error) {
            ToastAndroid.show("Unable to load stock items !", ToastAndroid.SHORT)
        }
    }

    const handleDeleteWarehouse = () => {
        Alert.alert(
            "သေချာပါသလား ?",
            "ဂိုထောင်အားဖျက်ပစ်မည်။ ရှိသော Stock အားလုံးလည်းဖျက်ပစ်မည်ဖြစ်သည်။",
            [
                {
                    text: "မလုပ်တော့",
                    style: "cancel"
                },
                {
                    text: "ဆက်လုပ်မည်",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await Warehouse.delete(warehouseId)
                            navigation.goBack(Warehouses)
                        } catch (error) {
                            ToastAndroid.show("ဖျက်ပစ်၍ မရနိုင်သေးပါ ", ToastAndroid.SHORT)
                        }
                    }
                }
            ]
        )
    }

    useEffect(async () => {
        setLoading(true)
        await loadWarehouse()
        setLoading(false)

        setStockLoading(true)
        await loadStockItems()
        setStockLoading(false)
        setStockLoaded(true)
    }, [])

    useEffect(async () => {
        if (isFocused) {
            await loadStockItems()
            await loadWarehouse()
        }
    }, [isFocused])

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title={warehouse ? warehouse.name : "Loading ..."} back={true} />
            {
                loading ? (
                    <View style={globalStyles.perfectCenter}>
                        <ActivityIndicator color={colors.dark} size={50} />
                    </View>
                ) : (
                    <ScrollView style={globalStyles.container}>
                        <View style={globalStyles.mediumSpace} />
                        <Image style={{ width: "100%", height: 200, resizeMode: "cover" }} source={{ uri: config.staticHost + warehouse.photo || "" }} />
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.title}>
                            {warehouse.name}
                        </Text>
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.normalText}>
                            လိပ်စာ : {warehouse.location}
                        </Text>
                        <View style={globalStyles.mediumSpace} />
                        <Text style={globalStyles.title}>ဂိုထောင်ရှိ ပစ္စည်းများ</Text>
                        {
                            stockLoading ? (
                                <View style={{ paddingVertical: 70 }}>
                                    <ActivityIndicator color={colors.dark} size={30} />
                                </View>
                            ) : (
                                <>
                                    {
                                        stockLoaded && sotckItems.length == 0 ? (
                                            <View>
                                                <View style={globalStyles.mediumSpace} />
                                                <View style={globalStyles.rowCenter}>
                                                    <Text style={globalStyles.normalText}>ဂိုထောင်တွင် ပစ္စည်းများမရှိသေးပါ</Text>
                                                </View>
                                                <View style={globalStyles.mediumSpace} />
                                            </View>
                                        ) : (
                                            <View style={globalStyles.containerRow}>
                                                {
                                                    sotckItems.map(stock => {
                                                        return (
                                                            <StockCard
                                                                stockId={stock._id}
                                                                photo={stock.photo}
                                                                name={stock.name}
                                                                totalInstock={stock.totalInstock}
                                                                showAlertAt={stock.showAlertAt}
                                                                unit={stock.unit}
                                                                key={stock._id}
                                                            />
                                                        )
                                                    })
                                                }
                                            </View>
                                        )
                                    }
                                </>
                            )
                        }
                        <View style={globalStyles.smallSpace} />
                        <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate("InsertStock", { warehouseId: warehouseId })}>
                            <Text style={globalStyles.normalText}>ပစ္စည်းအမျိူးအစား အသစ်ထည့်ရန်</Text>
                        </TouchableOpacity>
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.seperator} />
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.title} >Notes</Text>
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.normalText}>
                            {warehouse.note}
                        </Text>
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.seperator} />
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.rowLeft}>
                            <View style={globalStyles.half}>
                                <TouchableOpacity style={globalStyles.primaryButton}
                                    onPress={() => navigation.navigate("EditWarehouse", warehouse)}
                                >
                                    <Text style={globalStyles.normalText}>
                                        အချက်အလက် ပြင်ဆင်ရန်
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={globalStyles.half}>
                                <TouchableOpacity style={globalStyles.primaryButton}
                                    onPress={handleDeleteWarehouse}
                                >
                                    <Text style={globalStyles.warningButtonText}>
                                        ဖျက်ရန်
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={globalStyles.mediumSpace} />
                    </ScrollView>
                )
            }

        </View>
    )
}

export default WarehouseDetail