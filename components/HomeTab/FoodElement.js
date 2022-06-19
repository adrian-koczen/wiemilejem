import axios from 'axios';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
// Redux
import {connect} from 'react-redux';
import {setProduct} from '../../Redux/actions/products';
// ENV
import {API_HOST} from '@env';

// eslint-disable-next-line no-shadow
const FoodElement = ({navigation, product, setProduct}) => {
  const showProduct = async () => {
    let searchedProduct = await axios.get(
      `${API_HOST}/api/products/${product._id}`,
    );
    setProduct(searchedProduct.data);
    navigation.navigate('showProduct');
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => showProduct()}>
      <View style={styles.element}>
        <Text style={styles.elementText}>{product.productName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  element: {
    backgroundColor: '#0183A3',
    width: Dimensions.get('window').width / 4 - 10,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  elementText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default connect(null, {setProduct})(FoodElement);
