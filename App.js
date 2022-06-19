/* eslint-disable no-shadow */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Components
import LoadingComponent from './components/Authorization/LoadingComponent';
// Navigator Stacks
import AuthorizationStack from './navigatorStacks/authorizationStack';
//import HomeBottomTabsStack from './navigatorStacks/homeBottomTabsStack';
import HomeDrawerStack from './navigatorStacks/homeDrawerStack';
// Redux
import {connect} from 'react-redux';
import {verifyToken, setLoadingToFalse} from './Redux/actions/authorization';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Ignore logs
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = ({authorizationState, verifyToken, setLoadingToFalse}) => {
  useEffect(() => {
    async function checkToken() {
      try {
        await AsyncStorage.getItem('authToken').then(async token => {
          if (!token) {
            setLoadingToFalse();
            return console.log('No token');
          } else {
            await verifyToken(token);
            setLoadingToFalse();
          }
        });
      } catch (error) {
        setLoadingToFalse();
      }
    }
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authorizationState.loading) {
    return <LoadingComponent />;
  }

  return (
    <NavigationContainer>
      {!authorizationState.authenticated ? (
        <AuthorizationStack />
      ) : (
        //<HomeBottomTabsStack />
        <HomeDrawerStack />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  authorizationState: state.authorization,
});

export default connect(mapStateToProps, {verifyToken, setLoadingToFalse})(App);
