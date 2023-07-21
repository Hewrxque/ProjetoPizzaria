import React from 'react';
import Stack from './StackMain/StackMain';
import Auth from  './StackAuth/StackAuth'
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar, View, ActivityIndicator } from 'react-native';

export default function Routes() {
  const isAuthenticate = false;
  const loading = false;

  if(loading){
    return(
      <View
      style={{
        flex: 1, 
        backgroundColor: '#1D1D2E',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <ActivityIndicator size={60} color={'#FFFFFF'}/>
      </View>
    )
  }
  return (
    isAuthenticate ? <Stack/> : <Auth/>
  );
}