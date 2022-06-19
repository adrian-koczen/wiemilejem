import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomListElement = ({element}) => {
  const [background, setBouckground] = useState(false);
  const handleColorON = () => {
    setBouckground(true);
  };
  const handleColorOFF = () => {
    setBouckground(false);
  };
  return (
    <View
      style={
        background
          ? [styles.containerBorder, styles.background]
          : styles.containerBorder
      }>
      <TouchableOpacity
        onPressIn={handleColorON}
        onPressOut={handleColorOFF}
        activeOpacity={1}>
        <View style={styles.containerContent}>
          <Text style={styles.text}>{element.name}</Text>
          <FontAwesome5
            style={styles.arrowIcon}
            name="chevron-right"
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBorder: {
    paddingHorizontal: 10,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  containerContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    color: '#C9C9C9',
  },
  text: {
    fontSize: 18,
  },
  background: {
    backgroundColor: '#D9EBEE',
  },
});

export default CustomListElement;
