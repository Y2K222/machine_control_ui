import React, { useEffect, useState, useTransition } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid, ActivityIndicator, Alert } from "react-native"
import globalStyles from "../../styles"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import DialogInput from "react-native-dialog-input"
import Stocks from "../../api/model/Stocks"
import Warehouse from "../../api/model/Warehouse"
import config from "../../config"

const ItemActionBar = props => {

    const navigation = useNavigation()

    const [isDialogVisible, setIsDialogVisible] = useState(false)
    const [isStockIn, setIsStockIn] = useState(false)
    const [dialogTitle, setDialogTitle] = useState("")
    const [dialogMessage, setDialogMessage] = useState("")
    const [hintInput, setInitInput] = useState("")

    const handlePressStock = type => {
        if (type == "in") {
            setIsStockIn(true)
            setDialogTitle("ပစ္စည်းသွင်းမည်")
            setDialogMessage("ပစ္စည်းအရေအတွက်ကို ရိုက်ထည့်ပါ")
            setInitInput("နံပါတ်သာရိုက်ထည့်ပါ")
            setIsDialogVisible(true)
        } else {
            setIsStockIn(false)
            setDialogTitle("ပစ္စည်းထုတ်မည်")
            setDialogMessage("ပစ္စည်းအရေအတွက်ကို ရိုက်ထည့်ပါ.")
            setInitInput("နံပါတ်သာရိုက်ထည့်ပါ")
            setIsDialogVisible(true)
        }
    }

    const handleStockCountSubmit = async count => {
        if (isStockIn) {
            try {
                await Warehouse.stockIn(props.stockItem.from, props.stockItem._id, parseInt(count))
                ToastAndroid.show("ပစ္စည်းထည့်ခြင်း အောင်မြင်ပါသည်", ToastAndroid.SHORT)
                setIsDialogVisible(false)
            } catch (error) {
                ToastAndroid.show("ပစ္စည်းထည့်၍ မရနိုင်ပါ", ToastAndroid.SHORT)
                return false
            }
        } else {
            try {
                await Warehouse.stockOut(props.stockItem.from, props.stockItem._id, parseInt(count))
                ToastAndroid.show("ပစ္စည်းထုတ်ခြင်း အောင်မြင်ပါသည်", ToastAndroid.SHORT)
                setIsDialogVisible((false))
            } catch (error) {
                console.log(error)
                ToastAndroid.show("ပစ္စည်းထုတ်၍ မရနိုင်ပါ", ToastAndroid.SHORT)
            }
        }
        try {
            let result = await Stocks.getInfo(props.stockItem._id)
            props.setStockItem(result)
        } catch (error) {
            console.log(error)
            ToastAndroid.show("ပြင်ဆင်ရန်ကြိုးစားနေပါသည်", ToastAndroid.SHORT)
        }
    }

    return (
        <>
            <DialogInput isDialogVisible={isDialogVisible}
                title={dialogTitle}
                message={dialogMessage}
                hintInput={hintInput}
                textInputProps={{ keyboardType: "number-pad" }}
                submitInput={(count) => handleStockCountSubmit(count)}
                closeDialog={() => { setIsDialogVisible(false) }}>
            </DialogInput>
            <View style={globalStyles.rowSpaceEvenly}>
                <TouchableOpacity style={globalStyles.actionItem} onPress={() => handlePressStock("in")}>
                    <Ionicons name="enter-outline" size={30} color={colors.primary} />
                    <Text style={globalStyles.normalText}>သွင်းမည်</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.actionItem} onPress={() => handlePressStock("out")}>
                    <Ionicons name="exit-outline" size={30} color={colors.primary} />
                    <Text style={globalStyles.normalText}>သွင်းထုတ်မည်</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.actionItem} onPress={() => navigation.navigate("StockRecord", { stockId: props.stockItem._id })} >
                    <Ionicons name="analytics-outline" size={30} color={colors.primary} />
                    <Text style={globalStyles.normalText}>အသေးစိတ်</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const StockDetail = props => {

    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const stockId = props.route.params.stockId
    const [loading, setLoading] = useState(true)
    const [stockItem, setStockItem] = useState(null)

    const loadStockItem = async () => {
        try {
            let result = await Stocks.getInfo(stockId)
            setStockItem(result)
        } catch (error) {
            ToastAndroid.show("ဒေတာမရနိုင်ပါ", ToastAndroid.SHORT)
        }
    }

    const handleDeleteItem = async () => {
        Alert.alert(
            "သေချာပါသလား ?",
            "ပစ္စည်းအားဖျက်ပစ်မည်ဖြစ်သည်။ ပြန်ယူ၍မရနိုင်ပါ",
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
                            await Stocks.delete(stockItem._id)
                            // navigation.goBack()
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
        await loadStockItem()
        setLoading(false)
    }, [])

    useEffect(async () => {
        if (isFocused) {
            await loadStockItem()
        }
    }, [isFocused])

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title={stockItem ? stockItem.name : "Loading ..."} back={true} />
            {
                loading ? (
                    <View style={globalStyles.perfectCenter}>
                        <ActivityIndicator color={colors.dark} size={50} />
                    </View>
                ) : (
                    <ScrollView style={globalStyles.container}>
                        <View style={globalStyles.mediumSpace} />
                        <Image style={{ width: "100%", height: 200, resizeMode: "cover", borderWidth: 1, borderColor: colors.grey }} source={{ uri: stockItem ? config.staticHost + stockItem.photo : config.staticHost + "/system/placeholder.png" }} />
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.rowLeft}>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.normalText}>ပစ္စည်းအမည်</Text>
                            </View>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.title}>: {stockItem.name}</Text>
                            </View>
                        </View>
                        <View style={globalStyles.rowLeft}>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.normalText}>လက်ရှိအရေအတွက်</Text>
                            </View>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.title}>: {stockItem.totalInstock} {stockItem.unit}</Text>
                            </View>
                        </View>
                        <View style={globalStyles.rowLeft}>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.normalText}>အနည်းဆုံးရှိရမည့် အရေအတွက်</Text>
                            </View>
                            <View style={globalStyles.halfNoHeight}>
                                <Text style={globalStyles.title}>: {stockItem.showAlertAt} {stockItem.unit}</Text>
                            </View>
                        </View>
                        <View style={globalStyles.smallSpace} />
                        {
                            stockItem.showAlertAt > stockItem.totalInstock && (
                                <View style={globalStyles.rowLeft}>
                                    <Ionicons name="alert-circle" size={20} color={colors.warning} />
                                    <Text style={globalStyles.warningButtonText}>
                                        ကုန်ပစ္စည်းအရေအတွက်နည်းနေပါသည်
                                    </Text>
                                </View>
                            )
                        }
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.seperator} />
                        <View style={globalStyles.smallSpace} />
                        <ItemActionBar stockItem={stockItem} setStockItem={setStockItem} />
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.seperator} />
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.title}>မှတ်ချက်</Text>
                        <View style={globalStyles.smallSpace} />
                        <Text style={globalStyles.normalText}>
                            {stockItem.note}
                        </Text>
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.seperator} />
                        <View style={globalStyles.smallSpace} />
                        <View style={globalStyles.rowLeft}>
                            <View style={globalStyles.half}>
                                <TouchableOpacity style={globalStyles.primaryButton}
                                    onPress={() => navigation.navigate("EditStockItem", stockItem)}
                                >
                                    <Text style={globalStyles.normalText}>
                                        အချက်အလက် ပြင်ဆင်ရန်
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={globalStyles.half}>
                                <TouchableOpacity style={globalStyles.primaryButton}
                                    onPress={handleDeleteItem}
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

export default StockDetail