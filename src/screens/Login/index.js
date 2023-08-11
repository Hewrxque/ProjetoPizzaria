import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';

import { AuthContext } from '../../context/AuthContext';
import logo from '../../Assets/Pizzaria.png'
export default function Login() {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

async  function handleLongin(){

    if(email === '' || password === ''){
      return;
    }
      await login({email, password})
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.contentInput}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Digite seu senha"
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLongin}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
