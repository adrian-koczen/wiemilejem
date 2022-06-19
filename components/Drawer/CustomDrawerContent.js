import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
// Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userContainer}>
        <FontAwesome5 style={styles.icon} size={64} name="user" solid />
        <Text style={styles.text}>Witaj, username!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#F1EFEF',
  },
  icon: {
    color: '#3B3A3A',
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CustomDrawerContent;
