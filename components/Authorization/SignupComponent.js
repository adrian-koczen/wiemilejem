import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import axios from 'axios';
import {Keyboard} from 'react-native';
// Components
import LoadingComponent from './LoadingComponent';
// ENV
import {API_HOST} from '@env';

const SignupComponent = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const registerRequest = async () => {
    setLoading(true);
    await axios
      .post(`${API_HOST}/api/registerNewUser`, formData, {
        timeout: 10000,
      })
      .then(res => {
        if ((res.status = '200')) {
          setLoading(false);
          navigation.navigate('signupVerify', {email: formData.email});
        }
      })
      .catch(error => {
        // Tymczasowy alert, do zmiany do komponent Alert
        alert(error.message);
        setLoading(false);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setFormData({...formData, email: value});
              }}
              value={formData.email}
              placeholder="Wprowadź E-mail"
            />
            <Text style={styles.text}>Hasło</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={value => {
                setFormData({...formData, password: value});
              }}
              value={formData.password}
              placeholder="Wprowadź hasło"
            />
            <Text style={styles.text}>Wprowadź hasło ponownie</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={value => {
                setFormData({...formData, password2: value});
              }}
              value={formData.password2}
              placeholder="Wprowadź hasło"
            />
          </View>
          <View>
            <View style={styles.justifyCenter}>
              <View style={styles.buttonWidth}>
                <Button onPress={() => registerRequest()} title="Wyślij" />
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
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#F9F9FB',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#D1D1D1',
  },
  text: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
    marginBottom: 10,
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

export default SignupComponent;
