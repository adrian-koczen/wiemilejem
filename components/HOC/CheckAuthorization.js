import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Actions
import {verifyToken} from '../../Redux/actions/authorization';

async function checkToken() {
  let token = await AsyncStorage.getItem('authToken');
  if (!token) {
    return console.log('No token');
  } else {
    verifyToken(token);
  }
}

const checkAutorizattion =
  Component =>
  ({...props}) => {
    useEffect(() => {
      checkToken();
    }, []);
    return <Component {...props} />;
  };

export default checkAutorizattion;
