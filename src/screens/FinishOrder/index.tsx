import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export function FinishOrder(){
    return(
        <View style={styles.container}>
            <Text style={styles.alert}>
                Você deseja finalizar esse pedido?
            </Text>
            <Text style={styles.title}>
                Mesa 30
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Finalizar Pedido
                </Text>
                <Icon name={"cart-outline"} size={20} color={'#1D1D2E'} />
            </TouchableOpacity>
        </View>
    )
}