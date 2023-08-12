import React, {useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

import {AuthContext} from '../../context/AuthContext';

export default function DashBoard() {
//   const {signOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
    
        <Text style={styles.title}>
            Novo Pedido
        </Text>
        <TextInput style={styles.textInput} placeholder='Número da mesa' keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>
                Abrir mesa
            </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={signOut}>
          <Text>Sair do app</Text>
        </TouchableOpacity> */}
     
    </SafeAreaView>
  );
}
