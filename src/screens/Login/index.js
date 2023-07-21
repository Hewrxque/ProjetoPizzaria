import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Logo from '../../Assets/Pizzaria.png';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Image source={Logo} style={styles.image} />
      </View>
      <View
        style={styles.contentInput}>
        <TextInput placeholder="Digite seu email" style={styles.textInput} />
        <TextInput placeholder="Digite seu senha" style={styles.textInput} />
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: 'bold', color: '#922222'}}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
