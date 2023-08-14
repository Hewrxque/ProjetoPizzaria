import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../../src/screens/DashBoard";
import Order from "../../src/screens/Order";


const Stack = createNativeStackNavigator();

export default function StackMain(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='DashBoard' component={DashBoard} options={{headerShown: false}}/>
            <Stack.Screen name='Order' component={Order} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}