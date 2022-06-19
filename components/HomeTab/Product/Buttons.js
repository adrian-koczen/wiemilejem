import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Buttons = ({
  setSelectWeightModal,
  setEnterWeight,
  hideEnterWeight,
  setHideEnterWeight,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      <ScrollView horizontal={true} persistentScrollbar={false}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setSelectWeightModal(true);
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wybierz opcję wagową</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setHideEnterWeight(!hideEnterWeight);
            setEnterWeight(true);
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wprowadź własną wagę</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={[styles.button, styles.marginRightZero]}>
            <Text style={styles.buttonText}>Dodaj do ulubionych</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

EStyleSheet.build({});

const styles = EStyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#7A7A7A',
    marginBottom: 10,
    marginRight: 10,
  },
  marginRightZero: {
    marginRight: 0,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default Buttons;
