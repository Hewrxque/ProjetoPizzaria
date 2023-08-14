import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/AuthContext';

export default function Login() {
  const {login, loadingAuth} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLongin() {
    if (email === '' || password === '') {
      return;
    }
    await login({email, password});
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
          <Image
            style={styles.image}
            source={require('../../Assets/Pizzaria.png')}
          />
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
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLongin}>
            {loadingAuth ? (
              <ActivityIndicator size={25} color={'#FFF'} />
            ) : (
              <Text style={styles.textButton}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
