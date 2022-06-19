import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Components
import HomeTab from '../navigatorStacks/HomeTabStack';
import SettingsTab from '../components/SettingsTab/SettingsTab';
import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';

const Stack = createDrawerNavigator();

const HomeDrawerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="products"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Stack.Screen
        name="products"
        component={HomeTab}
        options={{title: 'Produkty', headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={SettingsTab}
        options={{title: 'Ustawienia'}}
      />
    </Stack.Navigator>
  );
};

export default HomeDrawerStack;
