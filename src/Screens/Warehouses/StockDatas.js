import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker"

const StockDatas = props => {

    const [filterType, setFilterType] = useState("today")

    const radioButtonsData = [
        {
            id: "1",
            label: "Used Datas",
            value: "used",
            selected: true
        },
        {
            id: "2",
            label: "In/Out Dats",
            value: "inout"
        }
    ]

    const fileterList = [
        {
            key: "today",
            label: "Today"
        },
        {
            key: "this_week",
            label: "This Week"
        },
        {
            key: "this_month",
            label: "This Month"
        }
    ]

    const handleRadioButton = () => {

    }

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Stock Datas" back={true} />
            <View style={globalStyles.smallSpace} />
            <View style={globalStyles.rowLeft}>
                <RadioGroup
                    radioButtons={radioButtonsData}
                    onPress={handleRadioButton}
                    containerStyle={{ flexDirection: "row" }}
                />
            </View>
            <View style={globalStyles.smallSpace} />
            <View style={globalStyles.rowLeft}>
                <View style={globalStyles.half}>
                    <Picker
                        style={globalStyles.select}
                        selectedValue={filterType}
                        onValueChange={(value, index) => {
                            setFilterType(value);
                        }}
                    >
                        {
                            fileterList.map(filter => (
                                <Picker.Item
                                    label={filter.label}
                                    value={filter.key}
                                    key={filter.key}
                                />
                            ))
                        }
                    </Picker>
                </View>
                <View style={globalStyles.half}>
                    <TouchableOpacity style={globalStyles.button}>
                        <Ionicons name="search-outline" size={30} color={colors.dark} />
                        <Text style={globalStyles.normalText}>SEARCH DATAS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default StockDatas