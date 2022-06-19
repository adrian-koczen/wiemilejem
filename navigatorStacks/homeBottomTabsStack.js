import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Components
import HomeTab from './HomeTabStack';
import SettingsTabStack from './SettingsTabStack';

const Stack = createBottomTabNavigator();

function HomeBottomTabsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Produkty"
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Wyszukaj produkty',
          tabBarLabel: 'Produkty',
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} />,
        }}
        name="products"
        component={HomeTab}
      />
      <Stack.Screen
        options={{
          title: 'Twoja lista',
          tabBarLabel: 'Twoja lista',
          tabBarIcon: () => <MaterialCommunityIcons name="food" size={25} />,
        }}
        name="youtList"
        component={HomeTab}
      />
      <Stack.Screen
        options={{
          title: 'Ustawienia',
          tabBarLabel: 'Ustawienia',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="format-list-bulleted" size={25} />
          ),
        }}
        name="settings"
        component={SettingsTabStack}
      />
    </Stack.Navigator>
  );
}

export default HomeBottomTabsStack;
