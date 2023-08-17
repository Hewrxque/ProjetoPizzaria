import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {api} from '../../services/api';

import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackPramsList } from '../../../routes/StackMain/app.routes'
type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>;

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
  async function handleFinish() {
    try {
      await api.put('/order/send', {
        order_id: route.params?.order_id,
      });

      navigation.popToTop();
      
    } catch {
      console.log('Erro ao finalizar, tente novamente mais tarde');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar Pedido</Text>
        <Icon name={'cart-outline'} size={20} color={'#1D1D2E'} />
      </TouchableOpacity>
    </View>
  );
}
