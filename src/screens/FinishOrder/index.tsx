import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type RouteDetailParams ={
    FinishOrder:{
        number: string | number;
        order_id: string;
    }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder(){
    const route = useRoute<FinishOrderRouteProp>();

    return(
        <View style={styles.container}>
            <Text style={styles.alert}>
                Você deseja finalizar esse pedido?
            </Text>
            <Text style={styles.title}>
                Mesa {route.params?.number}
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