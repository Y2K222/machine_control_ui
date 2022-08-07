import React, { useEffect, useRef, useState, useTransition } from "react"
import { View, Text, TouchableOpacity, ScrollView, ToastAndroid, ActivityIndicator } from "react-native"
import globalStyles from "../../styles"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import DialogInput from "react-native-dialog-input"
import Stocks from "../../api/model/Stocks"
import Warehouse from "../../api/model/Warehouse"
import config from "../../config"
import { Picker } from "@react-native-picker/picker"

const StockRecord = props => {

    const stockId = props.route.params.stockId
    const navigation = useNavigation()
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [datas, setDatas] = useState([])
    const monthRef = useRef()
    const yearRef = useRef()
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const years = ["2022", "2023", "2024"]

    const loadData = async () => {
        try {
            let result = await Stocks.getDataWithMonth(stockId, month, year)
            setDatas(result)
        } catch (error) {
            console.log(error)
            ToastAndroid.show("ဒေတာများ မရရှိနိုင်ပါ", ToastAndroid.SHORT)
        }
    }

    const getType = type => {
        if (type == "in") return "သွင်း"
        else if (type == "out") return "ထုတ်"
        else return "သုံး"
    }

    const getStyle = type => {
        if (type == "in") return globalStyles.itemTextIn
        else if (type == "out") return globalStyles.itemTextOut
        else return globalStyles.itemTextUse
    }

    useEffect(async () => {
        setLoading(true)
        await loadData()
        setLoading(false)
    }, [month, year])

    return (
        <View style={globalStyles.fullScreen} >
            <Appbar title={"ဒေတာများ"} back={true} />
            <View style={globalStyles.container}>
                <View style={globalStyles.smallSpace} />
                <View style={globalStyles.rowLeft}>
                    {/* Month */}
                    <View style={globalStyles.half}>
                        <Picker
                            ref={monthRef}
                            selectedValue={month}
                            onValueChange={(val, index) => {
                                setMonth(val)
                            }}
                            style={globalStyles.authInput}
                        >
                            {
                                months.map((mon, index) => (
                                    <Picker.Item
                                        label={mon}
                                        value={index}
                                        key={index}
                                    />
                                ))
                            }
                        </Picker>
                    </View>
                    {/* / Month */}
                    {/* Year */}
                    <View style={globalStyles.half}>
                        <Picker
                            ref={yearRef}
                            selectedValue={year}
                            onValueChange={(val, index) => {
                                setYear(val)
                            }}
                            style={globalStyles.authInput}
                        >
                            {
                                years.map((yr, index) => (
                                    <Picker.Item
                                        label={yr}
                                        value={yr}
                                        key={index}
                                    />
                                ))
                            }
                        </Picker>
                    </View>
                    {/* / Year */}
                </View>
                <View style={globalStyles.smallSpace} />
                {/* Data List */}
                {
                    loading ? (
                        <View style={globalStyles.perfectCenter}>
                            <View style={globalStyles.largeSpace} />
                            <ActivityIndicator color={colors.dark} size={50} />
                        </View>
                    ) : (
                        <ScrollView>
                            {
                                datas.map(data => (
                                    <View style={globalStyles.item} key={data._id}>
                                        <Text style={getStyle(data.type)}>
                                            {new Date(data.createdAt).toLocaleDateString()} - {new Date(data.createdAt).toLocaleTimeString()} က အရေအတွက် {data.count} ကို {getType(data.type)} ခဲ့သည်
                                        </Text>
                                    </View>
                                ))
                            }
                            <View style={globalStyles.largeSpace} />
                            <View style={globalStyles.largeSpace} />
                            <View style={globalStyles.largeSpace} />
                        </ScrollView>
                    )
                }
                {/* / Data List */}
            </View >
        </View >
    )
}

export default StockRecord