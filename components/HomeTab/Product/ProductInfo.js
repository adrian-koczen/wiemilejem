import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// Redux
import {connect} from 'react-redux';

const ProductInfo = ({product, selectedOption}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Waga produktu: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wagaProduktu} g`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Energia: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.energia.value} ${product.options[selectedOption].wartosciOdzywcze.energia.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Białko: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.białko.value} ${product.options[selectedOption].wartosciOdzywcze.białko.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Węglowodany: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.węglowodany.value} ${product.options[selectedOption].wartosciOdzywcze.węglowodany.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Tłuszcz: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.tłuszcz.value} ${product.options[selectedOption].wartosciOdzywcze.tłuszcz.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Błonnik: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.błonnik.value} ${product.options[selectedOption].wartosciOdzywcze.błonnik.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Cukry proste: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.cukryproste.value} ${product.options[selectedOption].wartosciOdzywcze.cukryproste.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Kwasy tłuszczowe nasycowne: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.kwasytłuszczowenasycone.value} ${product.options[selectedOption].wartosciOdzywcze.kwasytłuszczowenasycone.unit}`}</Text>
      </View>
      <View style={styles.productWeight}>
        <Text style={styles.optionKey}>Sól: </Text>
        <Text
          style={
            styles.productWeightCount
          }>{`${product.options[selectedOption].wartosciOdzywcze.sól.value} ${product.options[selectedOption].wartosciOdzywcze.sól.unit}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  optionKey: {
    color: '#000000',
    fontSize: 16,
    width: 120,
  },
  productWeight: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  productWeightCount: {
    textAlign: 'center',
    width: 80,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#1F88C5',
    color: '#ffff',
    fontSize: 16,
  },
});

const mapStateToProps = state => ({
  product: state.singleProduct,
  selectedOption: state.singleProduct.selectedOption,
});

export default connect(mapStateToProps, null)(ProductInfo);
