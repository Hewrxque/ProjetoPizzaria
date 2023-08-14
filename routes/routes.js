import React, {useContext} from 'react';
import Stack from './StackMain/app.routes.tsx';
import Auth from './StackAuth/auth.routes.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View, ActivityIndicator} from 'react-native';

import {AuthContext} from '../src/context/AuthContext';

export default function Routes() {
  const {isAuthenticated, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1D1D2E',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={60} color={'#FFFFFF'} />
      </View>
    );
  }
  return isAuthenticated ? <Stack /> : <Auth />;
}
