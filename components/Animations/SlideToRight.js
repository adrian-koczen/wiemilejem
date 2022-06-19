import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SlideToRight = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 80,
        duration: 1000,
        useNativeDriver: false,
      }),
    ).start();
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={styles.center}>
        <Animated.View style={[styles.animationBlock, {left: animatedValue}]} />
        <Icon style={styles.arrow} name="arrow-right" size={14} />
        <Icon style={styles.arrow} name="arrow-right" size={14} />
        <Icon style={styles.arrow} name="arrow-right" size={14} />
        <Icon style={styles.arrow} name="arrow-right" size={14} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  center: {
    width: 100,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrow: {
    color: '#9AA5A7',
    marginRight: 5,
  },
  animationBlock: {
    zIndex: 1,
    position: 'absolute',
    width: 24,
    left: 0,
    height: '100%',
    backgroundColor: '#FFFFFF3A',
  },
});

export default SlideToRight;
