import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { cores } from '../utils/cores';

export const BotaoEsticado = ({
  style = {},
  textStyle = {},
  textColor = cores.branco,
  borderColor=cores.branco,
  buttonColor = cores.preto_claro,
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size,textColor,buttonColor,borderColor).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size,textColor).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size,textColor,buttonColor,borderColor) => ({
    radius: {
      borderRadius: size / 2,
      width: size+110,
      height: size-30,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: borderColor,
      borderWidth: 2,
      backgroundColor:buttonColor
    },
    text: { color: textColor, fontSize: size / 4 },
  });