import React, { useEffect, useState } from "react"
import { View, Text, ToastAndroid } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import { ScrollView } from "react-native-gesture-handler"
import StockCard from "../../components/Stock/StockCard"
import Warehouse from "../../api/model/Warehouse"

const Stocks = props => {

    const warehouseId = props.route.params.warehouseId
    const [stockItems, setStockItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(async () => {
        try {
            let items = await Warehouse.getStock(warehouseId)
            console.log(items);
        } catch (error) {
            console.log(error)
            ToastAndroid.show("Unable to load stocks", ToastAndroid.SHORT)
        }
    }, [])

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Stocks" back={true} />
            <ScrollView>
                <View style={globalStyles.containerRow}>
                    <StockCard
                        name="အင်ဂျင် 10000px"
                        totalInstock={180000}
                        showAlertAt={100000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                    <StockCard
                        name="အင်ဂျင်"
                        totalInstock={180000}
                        showAlertAt={200000}
                        unit="လုံး"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Stocks