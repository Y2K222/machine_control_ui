import React from "react"
import { View, Text } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import { ScrollView } from "react-native-gesture-handler"
import StockCard from "../../components/Stock/StockCard"

const Stocks = props => {
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