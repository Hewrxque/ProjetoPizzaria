import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {CategoryProps} from '../../screens/Order';

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

const {width: WIDHT, height: HEIGHT} = Dimensions.get('window');

export function ModalPicker({
  options,
  handleCloseModal,
  selectedItem,
}: ModalPickerProps) {
  function onPressItem(item: CategoryProps) {
    //console.log(item);
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onPressItem(item)}>
      <Text style={styles.item}>{item?.name}</Text>
    </TouchableOpacity>
  ));
  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: WIDHT - 20,
    height: HEIGHT / 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8A8A8A',
    borderRadius: 4,
  },
  option:{
    alignItems: 'flex-start',
    borderTopWidth: 0.8,
    borderTopColor: '#8A8A8A'
  },
  item:{
    margin: 18,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101026'
  }
});
