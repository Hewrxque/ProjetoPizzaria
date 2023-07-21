import React from 'react';
import Stack from './StackMain/StackMain';
import Auth from  './StackAuth/StackAuth'
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function Routes() {
  const isAuthenticate = false;
  const loading = false;
  return (
    isAuthenticate ? <Stack/> : <Auth/>
  );
}