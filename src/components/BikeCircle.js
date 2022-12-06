import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { cores } from '../utils/cores';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const BikeCircle = ({
  style = {},
  textStyle = {},
  buttonColor = cores.verde,
  circle = 80,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(buttonColor, circle).radius, style]} onPress={props.onPress}>
      <Ionicons name={'bicycle' }  size={circle-30} color={cores.branco}/>
    </TouchableOpacity>
  );
};

const styles = (buttonColor, circle) => ({
    radius: {
      borderRadius: 400,
      width: circle,
      height: circle,
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor:buttonColor,
      margin: 20
    }
  });