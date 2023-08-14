import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';

export default function DashBoard() {
  //   const {signOut} = useContext(AuthContext);
  const navigation = useNavigation();
  const [number, setNumber] = useState('');

  async function openOrder(){
    if(number === ''){
      return;
    }
    navigation.navigate('Order',{ number: number, order_id: 'A'})
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número da mesa"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.textButton}>Abrir mesa</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={signOut}>
          <Text>Sair do app</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
}
