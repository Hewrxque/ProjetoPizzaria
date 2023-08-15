import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {api} from '../../services/api';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackPramsList} from '../../../routes/StackMain/app.routes';
import styles from './styles';

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [number, setNumber] = useState('');

  async function openOrder() {
    if (number === '') {
      return;
    }
    const response = await api.post('/order', {
      table: Number(number),
    });

    console.log(response.data);
    navigation.navigate('Order', {number: number, order_id: response.data.id});

    setNumber('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        placeholder="Numero da mesa"
        placeholderTextColor="#F0F0F0"
        style={styles.textInput}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.textButton}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
