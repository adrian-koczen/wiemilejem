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
// Redux
import {connect} from 'react-redux';
import {setAuthenticatedTrue} from '../../Redux/actions/authorization';
// ENV
import {API_HOST} from '@env';

const SignupComponent = ({navigation, dispatch}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const signinRequest = async () => {
    setLoading(true);
    await axios
      .post(`${API_HOST}/api/auth`, formData)
      .then(res => {
        if ((res.status = '200')) {
          setLoading(false);
          setAuthenticatedTrue(res.data.token, dispatch);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
        alert('Error');
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
            <View style={styles.justifyCenter}>
              <Text
                style={styles.registerNavigate}
                onPress={() => {
                  navigation.navigate('signup');
                }}>
                Nie mam konta
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.justifyCenter}>
              <View style={styles.buttonWidth}>
                <Button onPress={() => signinRequest()} title="Wyślij" />
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
  registerNavigate: {
    color: '#0691D1',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});

export default connect(null, null)(SignupComponent);
