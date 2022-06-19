import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
// Components
import FoodElements from './FoodElements';
import Search from './Search';

const XD = ({navigation}) => {
  const [fetchLoading, setFetchLoading] = useState(false);
  return (
    <View style={styles.flexOne}>
      <Search setFetchLoading={setFetchLoading} />
      <FoodElements navigation={navigation} fetchLoading={fetchLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default XD;
