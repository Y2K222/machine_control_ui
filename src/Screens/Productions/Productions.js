import React from "react"
import { View, Text } from "react-native"
import globalStyles from "../../styles"
import Appbar from "../../components/Util/Appbar"
import ProductionCard from "../../components/Production/ProductionCard"
import { ScrollView } from "react-native-gesture-handler"

const Productions = props => {
    return (
        <View style={globalStyles.fullScreen}>
            <Appbar title="Productions" />
            <ScrollView style={globalStyles.container}>
                <View style={globalStyles.smallSpace} />
                <ProductionCard
                    photo="https://us.heller.biz/fileadmin/Startseite/Ich-suche/maschinen-und-loesungen.jpg"
                    name="Production 1"
                    location="၆ရပ်ကွက် ရန်ကုန်လမ်း တောင်ဒဂုံ"
                />
                <ProductionCard
                    photo="https://assets.new.siemens.com/siemens/assets/api/uuid:19b17ed8-753a-4972-9cd7-d2ba84df8946/width:2000/quality:high/emo-key-visual-ohturbine-1920x1080px.jpg"
                    name="Production 2"
                    location="၆ရပ်ကွက် ရန်ကုန်လမ်း တောင်ဒဂုံ"
                />
            </ScrollView>
        </View>
    )
}

export default Productions