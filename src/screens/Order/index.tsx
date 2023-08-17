import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {api} from '../../services/api';
import {ModalPicker} from '../../components/ModalPicker/indexx';
import {ListItem} from '../../components/ListItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackPramsList} from '../../../routes/StackMain/app.routes';

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

export type CategoryProps = {
  id: string;
  name: string;
};

type ProductsProps = {
  id: string;
  name: string;
};

type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
};

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<
    CategoryProps | undefined
  >();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

  const [products, setProducts] = useState<ProductsProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<
    ProductsProps | undefined
  >();
  const [modalProductVisible, setModalProductVisible] = useState(false);

  const [amount, setAmount] = useState('1');
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('category');
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }
    loadInfo();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/category/product', {
        params: {
          category_id: categorySelected?.id,
        },
      });
      setProducts(response.data);
      setProductSelected(response.data[0]);
    }

    loadProducts();
  }, [categorySelected]);

  //funçao para fechar uma order
  async function handleCloseOrder() {
    try {
      await api.delete('/order', {
        params: {
          order_id: route.params?.order_id,
        },
      });

      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  }

  //funçao para aparecer o modal
  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  function handleChangeProduct(item: ProductsProps) {
    setProductSelected(item);
  }

  //adicionar produto na mesa
  async function handleAddItem() {
    const response = await api.post('/order/add', {
      order_id: route.params?.order_id,
      product_id: productSelected?.id,
      amount: Number(amount),
    });
    let data = {
      id: response.data.id,
      product_id: productSelected?.id as string,
      name: productSelected?.name as string,
      amount: amount,
    };
    setItems(oldArray => [...oldArray, data]);
  }

  async function handleDeleteItem(item_id: string) {
    await api.delete('/order/remove', {
      params: {
        item_id: item_id,
      },
    });

    let removeItem = items.filter(item => {
      return item.id !== item_id;
    });
    setItems(removeItem);
  }

  function handleFinishOrder(){
    navigation.navigate("FinishOrder", {
      number: route.params?.number,
      order_id: route.params?.order_id
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        {items.length === 0 && (
          <TouchableOpacity onPress={handleCloseOrder}>
            <Icon name={'trash-can'} size={40} color={'#FF3F4B'} />
          </TouchableOpacity>
        )}
      </View>

      {category.length !== 0 && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalCategoryVisible(true)}>
          <Text style={{color: '#FFFFFF'}}>{categorySelected?.name}</Text>
        </TouchableOpacity>
      )}

      {products.length !== 0 && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalProductVisible(true)}>
          <Text style={{color: '#FFFFFF'}}>{productSelected?.name}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, {width: '60%', textAlign: 'center'}]}
          placeholder="1"
          placeholderTextColor={'#FFFFFF'}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddItem}>
          <Icon name={'plus'} size={30} color={'#FFFFFF'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {opacity: items.length === 0 ? 0.3 : 1}]}
          disabled={items.length === 0}
          onPress={handleFinishOrder}>
          <Text style={styles.textButton}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginTop: 24}}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem data={item} deleteItem={handleDeleteItem} />
        )}
      />

      <Modal
        transparent={true}
        visible={modalCategoryVisible}
        animationType="fade">
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectedItem={handleChangeCategory}
        />
      </Modal>

      <Modal
        transparent={true}
        visible={modalProductVisible}
        animationType="fade">
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={products}
          selectedItem={handleChangeProduct}
        />
      </Modal>
    </View>
  );
}
