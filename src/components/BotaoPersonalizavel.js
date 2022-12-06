import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { cores } from '../utils/cores';

export const BotaoPersonalizavel = ({
  style = {},
  textStyle = {},
  textColor = cores.branco,
  borderColor=cores.branco,
  buttonColor = cores.preto_claro,
  size = 125,
  width = 125 -200,
  height = 125 + 200,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size,textColor,buttonColor,borderColor, width, height).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size,textColor).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size,textColor,buttonColor,borderColor, width, height) => ({
    radius: {
      borderRadius: size / 2,
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      borderColor: borderColor,
      borderWidth: 2,
      backgroundColor:buttonColor,
    },
    text: { color: textColor, fontSize: size / 4 },
  });