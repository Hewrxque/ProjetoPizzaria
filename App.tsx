import React from 'react';
import Routes from './routes/routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {AuthProvider} from './src/context/AuthContext';
export default function AppNav() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'#1D1D2E'}
          translucent={false}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
