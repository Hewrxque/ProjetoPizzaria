import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashBoard from '../../src/screens/DashBoard';
import Order from '../../src/screens/Order';

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<StackPramsList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
