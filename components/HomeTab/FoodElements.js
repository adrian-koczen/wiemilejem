import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// Components
import LoadingComponent from '../Authorization/LoadingComponent';
import FoodElement from './FoodElement';

const HomeTab = ({navigation, products, fetchLoading}) => {
  if (fetchLoading) {
    return <LoadingComponent />;
  }
  if (products.length === 0) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.flexOne} />
      </TouchableWithoutFeedback>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => {
          return (
            <FoodElement
              key={product._id}
              navigation={navigation}
              product={product}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
  loadingComponent: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(HomeTab);
