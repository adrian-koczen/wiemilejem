import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';
import {Keyboard} from 'react-native';
// Components
import LoadingComponent from './LoadingComponent';
// ENV
import {API_HOST} from '@env';

const VerifyCodeSignUpComponent = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  useEffect(() => {
    if (verifyCode.length > 4) {
      setVerifyCode(verifyCode.slice(0, 4));
    }
  }, [verifyCode]);

  const checkVerifyCode = async () => {
    setLoading(true);
    await axios
      .post(`${API_HOST}/api/verifyRegistration`, {
        verifyCode: Number(verifyCode),
        email: route.params.email,
      })
      .then(() => {
        setLoading(false);
        alert('Success');
        navigation.navigate('signup');
      })
      .catch(error => {
        setLoading(false);
        alert(error.message);
        navigation.navigate('signup');
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Kod weryfikujący</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={value => {
              setVerifyCode(value);
            }}
            value={verifyCode}
            placeholder="Wprowadź kod weryfikujący"
          />
          <View>
            <View style={styles.justifyCenter}>
              <View style={styles.buttonWidth}>
                <Button onPress={() => checkVerifyCode()} title="Wyślij" />
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#D1D1D1',
  },
  buttonWidth: {
    marginTop: 30,
    marginBottom: 30,
    width: 200,
  },
  justifyCenter: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default VerifyCodeSignUpComponent;
