import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../src/screens/Login';
const { Navigator, Screen } = createNativeStackNavigator();

export default function StackScreen({ }) {
  return (
    <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
       <Screen name="Login" component={Login} />
    
    </Navigator>
  );
}