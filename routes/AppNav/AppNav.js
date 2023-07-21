import React from 'react';
import Stack from '../StackMain/StackMain';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
export default function AppNav() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={"#1D1D2E"}/>
      <Stack />
    </NavigationContainer>
  );
}