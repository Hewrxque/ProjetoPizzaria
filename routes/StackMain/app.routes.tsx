import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashBoard from '../../src/screens/DashBoard';
import Order from '../../src/screens/Order';
import {FinishOrder} from '../../src/screens/FinishOrder';

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: undefined
};

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes() {
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

      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
