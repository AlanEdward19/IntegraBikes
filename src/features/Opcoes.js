import React from "react";
import {View,Text,StyleSheet} from "react-native"
import MainContainer from "../components/MainContainer";

export const Opcoes = () => 
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Opções')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Opções</Text>
        </View>
)

