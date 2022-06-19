/* eslint-disable no-shadow */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
// Redux
import {connect} from 'react-redux';
import {fetchProducts, clearProducts} from '../../Redux/actions/products';
// ENV
import {API_HOST} from '@env';

const Search = ({fetchProducts, clearProducts, setFetchLoading}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length === 0) {
      clearProducts();
    }
    let source = axios.CancelToken.source();
    const scrapeProduct = async () => {
      if (text.length > 2) {
        setFetchLoading(true);
        await axios
          .post(
            `${API_HOST}/api/products/`,
            {searchString: text},
            {
              cancelToken: source.token,
            },
          )
          .then(res => {
            fetchProducts(res.data);
            setFetchLoading(false);
          })
          .catch(function (e) {
            setFetchLoading(false);
          });
      }
    };
    scrapeProduct();
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Wpisz nazwę produktu"
        onChangeText={value => {
          setText(value);
        }}
        value={text}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  textInput: {
    marginTop: 7,
    paddingLeft: 20,
    backgroundColor: '#D3D2D2',
    borderRadius: 20,
    paddingVertical: 5,
  },
});

export default connect(null, {fetchProducts, clearProducts})(Search);
