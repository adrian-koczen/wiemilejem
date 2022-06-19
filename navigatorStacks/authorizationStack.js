import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Stacks
import VerifyCodeSignUpComponent from '../components/Authorization/VerifyCodeSignUpComponent';
// Components
import SignupComponent from '../components/Authorization/SignupComponent';
import SigninComponent from '../components/Authorization/SigninComponent';

const Stack = createNativeStackNavigator();

const AuthorizationStack = () => {
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="signin"
        options={{title: 'Logowanie'}}
        component={SigninComponent}
      />
      <Stack.Screen
        name="signup"
        options={{title: 'Rejestracja'}}
        component={SignupComponent}
      />
      <Stack.Screen
        name="signupVerify"
        options={{title: 'Potwierdzenie kodem'}}
        component={VerifyCodeSignUpComponent}
      />
    </Stack.Navigator>
  );
};

export default AuthorizationStack;
