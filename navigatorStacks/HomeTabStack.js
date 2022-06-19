import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Components
import SearchProducts from '../components/HomeTab/SearchProducts';
import Product from '../components/HomeTab/Product/Product';
// Redux
import {connect} from 'react-redux';
const Stack = createNativeStackNavigator();

const HomeTab = ({productName}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Wyszukaj produkty', headerShown: false}}
        name="searchProducts"
        component={SearchProducts}
      />
      <Stack.Screen
        options={{title: productName}}
        name="showProduct"
        component={Product}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = state => ({
  productName: state.singleProduct.productName,
});

export default connect(mapStateToProps, null)(HomeTab);
