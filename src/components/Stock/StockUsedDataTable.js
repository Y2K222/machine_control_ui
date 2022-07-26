import React from "react"
import { View } from "react-native"
import globalStyles from "../../styles"
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native"
import DataTable, { COL_TYPES } from "react-native-datatable-component/src/DataTable"

const StockUsedDataTable = props => {

    return (
        <View>
            <DataTable
                data={[
                    { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
                    { name: 'Muhammad Akif', age: 22, gender: 'male' },
                    { name: 'Muhammad Umar', age: 21, gender: 'male' },
                    { name: 'Amna Shakeel', age: 22, gender: 'female' },
                    { name: 'Muhammad Ammar', age: 20, gender: 'male' },
                    { name: 'Muhammad Moiz', age: 13, gender: 'male' }
                ]} // list of objects
                colNames={['name', 'age', 'gender']} //List of Strings
                colSettings={[
                    { name: 'name', type: COL_TYPES.STRING, width: '40%' , },
                    { name: 'age', type: COL_TYPES.INT, width: '30%' },
                    { name: 'gender', type: COL_TYPES.STRING, width: '30%' }
                ]}//List of Objects
                noOfPages={10} //number
                backgroundColor={colors.grey + "22"} //Table Background Color
                headerLabelStyle={globalStyles.normalText} //Text Style Works
            />
        </View>
    )
}

export default StockUsedDataTable