import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../../src/screens/DashBoard";

const Stack = createNativeStackNavigator();

export default function StackMain(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='DashBoard' component={DashBoard} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}