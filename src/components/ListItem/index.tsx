import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
}
export function ListItem({data}: ItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{data.amount} - {data.name}</Text>
      <TouchableOpacity  >
          <Icon name={'trash-can'} size={25} color={'#FF3F4B'} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101026',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: '#8A8A8A',
    height: 60
  },
  item:{
    color: '#FFFFFF'
  }
});
