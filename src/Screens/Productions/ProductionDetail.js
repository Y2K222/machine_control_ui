import React from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import globalStyles from "../../styles"
import { useNavigation } from "@react-navigation/native"
import Appbar from "../../components/Util/Appbar"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import RawCard from "../../components/Production/RawCard"

const ProductionDetail = props => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Production Detail" back={true} />
            <ScrollView>
                <View style={globalStyles.container}>
                    <View style={globalStyles.mediumSpace} />
                    <Image style={{ width: "100%", height: 200, resizeMode: "cover" }} source={{ uri: "https://external-preview.redd.it/ZWx5UgslhG3V2QQx8mWD9ArsdVnHqTOX6b4vEvNY4l8.jpg?auto=webp&s=300f495bb7544299c6001e6000a047efbb1b264c" }} />
                    <View style={globalStyles.smallSpace} />
                    <View style={globalStyles.rowLeft}>
                        <View style={globalStyles.halfNoHeight}>
                            <Text style={globalStyles.normalText}>Production Name</Text>
                        </View>
                        <View style={globalStyles.halfNoHeight}>
                            <Text style={globalStyles.title}>: Production Name</Text>
                        </View>
                    </View>
                    <View style={globalStyles.rowLeft}>
                        <View style={globalStyles.halfNoHeight}>
                            <Text style={globalStyles.normalText}>Location</Text>
                        </View>
                        <View style={globalStyles.halfNoHeight}>
                            <Text style={globalStyles.normalText}>: Production Location</Text>
                        </View>
                    </View>
                    <View style={globalStyles.smallSpace} />
                    <View style={globalStyles.card}>
                        <View style={globalStyles.columnCenter}>
                            <Text style={globalStyles.normalText}>Total Output Count</Text>
                            <Text style={globalStyles.header}>8,932,928</Text>
                        </View>
                    </View>
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.title}>Notes</Text>
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.normalText}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </Text>
                    <View style={globalStyles.smallSpace} />
                    <View style={globalStyles.seperator} />
                    <View style={globalStyles.smallSpace} />
                    <Text style={globalStyles.title}>Used Raws</Text>
                    <View style={globalStyles.containerRow} >
                        <RawCard
                            name="အင်ဂျင်"
                            totalInstock={180000}
                            showAlertAt={10000}
                            unit="လုံး"
                        />
                        <RawCard
                            name="အင်ဂျင်"
                            totalInstock={180000}
                            showAlertAt={10000}
                            unit="လုံး"
                        />
                        <RawCard
                            name="အင်ဂျင်"
                            totalInstock={180000}
                            showAlertAt={10000}
                            unit="လုံး"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

export default ProductionDetail