import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from "react-redux"
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors"

// Screens
import Warehouses from "../Screens/Warehouses/Warehouses"
import WarehouseDetail from "../Screens/Warehouses/WarehouseDetail"
import InsertStock from "../Screens/Warehouses/InsertStock"
import AddNewWarehouse from "../Screens/Warehouses/AddNewWarehouse"
import EditStockItem from "../Screens/Warehouses/EditStockItem"
import EditWarehouse from "../Screens/Warehouses/EditWarehouse"
import Stocks from "../Screens/Warehouses/Stocks"
import StockDetail from "../Screens/Warehouses/StockDetail"
import StockDatas from "../Screens/Warehouses/StockDatas"
import StockEdit from "../Screens/Warehouses/StockEditScreen"
import StockRecord from "../Screens/Warehouses/StockRecord"

import Productions from "../Screens/Productions/Productions"
import ProductionDetail from "../Screens/Productions/ProductionDetail"
import AddNewProduction from "../Screens/Productions/AddNewProduction"

import Operators from "../Screens/Operators/Operators"
import Finaloutputs from "../Screens/Finaloutputs/Finaloutputs"
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// Stacknavigator options
const stackNavigatorOptions = {
    headerTitle: false,
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerShown: false,
};

const WarehouseStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Warehouses"
            screenOptions={stackNavigatorOptions}
        >
            <Stack.Screen name="Warehouses" component={Warehouses} />
            <Stack.Screen name="AddNewWarehouse" component={AddNewWarehouse} />
            <Stack.Screen name="EditWarehouse" component={EditWarehouse} />
            <Stack.Screen name="WarehouseDetail" component={WarehouseDetail} />
            <Stack.Screen name="EditStockItem" component={EditStockItem} />
            <Stack.Screen name="InsertStock" component={InsertStock} />
            <Stack.Screen name="Stocks" component={Stocks} />
            <Stack.Screen name="StockDetail" component={StockDetail} />
            <Stack.Screen name="StockEdit" component={StockEdit} />
            <Stack.Screen name="StockRecord" component={StockRecord} />
        </Stack.Navigator>
    )
}

const ProductionStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Productions"
            screenOptions={stackNavigatorOptions}
        >
            <Stack.Screen name="Productions" component={Productions} />
            <Stack.Screen name="ProductionDetail" component={ProductionDetail} />
            <Stack.Screen name="AddNewProduction" component={AddNewProduction} />
        </Stack.Navigator>
    )
}

const OperatorStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Operators"
            screenOptions={stackNavigatorOptions}
        >
            <Stack.Screen name="Operators" component={Operators} />
        </Stack.Navigator>
    )
}

const FinaloutputsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Finaloutputs"
            screenOptions={stackNavigatorOptions}
        >
            <Stack.Screen name="Finaloutputs" component={Finaloutputs} />
        </Stack.Navigator>
    )
}

const Navigator = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName=""
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name == "Warehouse") iconName = focused ? "home" : "home-outline"
                        else if (route.name == "Production") iconName = focused ? "cog" : "cog-outline"
                        else if (route.name == "Operator") iconName = focused ? "people" : "people-outline"
                        else iconName = focused ? "grid" : "grid-outline"
                        return <Ionicons name={iconName} size={size} color={colors.iconColor} />
                    },
                    tabBarActiveTintColor: colors.textColor1,
                    tabBarInactiveTintColor: colors.textColor1,
                })}
            >
                <Tab.Screen
                    name="Warehouse"
                    component={WarehouseStack}
                />
                <Tab.Screen
                    name="Production"
                    component={ProductionStack}
                />
                <Tab.Screen
                    name="Operator"
                    component={OperatorStack}
                />
                <Tab.Screen
                    name="FinalOutput"
                    component={FinaloutputsStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator