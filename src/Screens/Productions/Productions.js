import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, RefreshControl, ActivityIndicator, ToastAndroid } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductionCard from "../../components/Production/ProductionCard"
import { ScrollView } from "react-native-gesture-handler"
import colors from "../../styles/colors";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import System from "../../api/model/System";

const Productions = props => {

    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [loading, setLoading] = useState(false)
    const [setLoaded, setIsLoaded] = useState(false)
    const [productions, setProductions] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    // Get all productions
    const loadProductions = async () => {
        try {
            let data = await System.getCbProduction()
            setProductions(data)
        } catch (error) {
            console.log(error);
            ToastAndroid.show("ဒေတာများ မရနိုင်ပါ", ToastAndroid.SHORT)
        }
    }

    const onRefresh = async () => {
        await loadProductions()
    }

    useEffect(async () => {
        setLoading(true)
        await loadProductions()
        setLoading(false)
    }, [])

    useEffect(async () => {
        if (isFocused) await loadProductions()
    }, [isFocused])

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="ထုတ်လုပ်ရေးများ" />
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
                                productions.map(production => (
                                    <ProductionCard
                                        productionId={production._id}
                                        photo={production.photo}
                                        name={production.name}
                                        location={production.location}
                                        key={production._id}
                                    />
                                ))
                            }
                        </View>
                        <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate("AddNewProduction")}>
                            <Text style={globalStyles.primaryButtonText}>ထုတ်လုပ်ရေး အသစ်ထည့်ရန်</Text>
                            <Ionicons name="add-outline" size={30} color={colors.dark} />
                        </TouchableOpacity>
                    </ScrollView>
                )
            }
        </View>
    )
}

export default Productions