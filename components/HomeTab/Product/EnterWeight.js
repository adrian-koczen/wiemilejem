import React, {useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';

const EnterWeight = ({hideEnterWeight}) => {
  const options = {
    fadeInWeight: 50,
    fadeOutWeight: 0,
  };
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: !hideEnterWeight ? options.fadeInWeight : options.fadeOutWeight,
      duration: 400,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeIn, hideEnterWeight]);

  return (
    <Animated.View
      style={{
        height: fadeIn,
        backgroundColor: '#06BB7E',
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 10,
        }}>
        Siema siema, o tej porze
      </Text>
    </Animated.View>
  );
};

export default EnterWeight;
