import React from 'react';
import {View} from 'react-native';
// Components
import CustomList from '../CustomList/CustomList';

const data = [
  {
    id: 0,
    name: 'Edytuj dane personalne',
  },
  {
    id: 1,
    name: 'Zmień hasło',
  },
  {
    id: 2,
    name: 'Zmień adres email',
  },
];

const SettingsTab = () => {
  return (
    <View>
      <CustomList data={data} />
    </View>
  );
};

export default SettingsTab;
