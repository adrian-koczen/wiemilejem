import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const LoadingComponent = () => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0AACD4" />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
});

export default LoadingComponent;
