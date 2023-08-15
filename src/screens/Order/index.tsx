import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useRoute, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity>
        <Icon name={'trash-can'} size={40} color={'#FF3F4B'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.input}>
        <Text style={{color: '#FFFFFF'}}>
          Pizzas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={{color: '#FFFFFF'}}>
          Pizza de calabresa
        </Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>
          Quantidade
        </Text>
        <TextInput
        style={[styles.input, { width: '60%', textAlign: 'center'}]}
        placeholder='1'
        placeholderTextColor={'#FFFFFF'}
        keyboardType='numeric'
        value='1'
        />
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Icon name={"plus"} size={30} color={'#FFFFFF'}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Avançar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
