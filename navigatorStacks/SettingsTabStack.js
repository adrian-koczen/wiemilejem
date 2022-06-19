import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Components
import SettingsTab from '../components/SettingsTab/SettingsTab';

const Stack = createNativeStackNavigator();

const SettingsTabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SettingsTabStack;
