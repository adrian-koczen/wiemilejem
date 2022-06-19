import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// Redux
import {connect} from 'react-redux';
import {setWeightOption} from '../../../../Redux/actions/products';

const SelectWeight = ({options, setSelectWeightModal, setWeightOption}) => {
  const selectWeight = weightID => {
    setWeightOption(weightID);
    setSelectWeightModal(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wybierz wagę</Text>
      </View>
      <View style={styles.headerShape} />
      <View style={styles.options}>
        {options &&
          options.slice(1).map((option, index) => {
            const weightID = index + 1;
            return (
              <TouchableOpacity
                key={option._id}
                onPress={() => selectWeight(weightID)}>
                <View style={styles.button}>
                  <Text style={styles.optionText}>{option.wagaProduktu} g</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    marginTop: 150,
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#1F88C5',
  },
  headerShape: {
    height: 30,
    width: Dimensions.get('window').width + 5,
    backgroundColor: '#1F88C5',
    transform: [{skewY: '-2deg'}, {translateX: -5}],
    zIndex: -1,
    position: 'absolute',
    top: 45,
  },
  headerText: {
    color: '#ffffff',
    padding: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  header: {
    height: 60,
    backgroundColor: '#1F88C5',
    borderRight: '100px solid transparen',
  },
  options: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 100,
    padding: 10,
    backgroundColor: '#1F88C5',
  },
  optionText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  options: state.singleProduct.options,
});

export default connect(mapStateToProps, {setWeightOption})(SelectWeight);
