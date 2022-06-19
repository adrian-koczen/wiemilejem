import React from 'react';
import {View} from 'react-native';
// Components
import CustomListElement from './CustomListElement';

const CustomList = ({data}) => {
  return (
    <View>
      {data.map(element => {
        return <CustomListElement key={element.id} element={element} />;
      })}
    </View>
  );
};

export default CustomList;
