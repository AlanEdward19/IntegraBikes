import React from "react";
import {View,Text,StyleSheet} from "react-native"

export const TelaPrincipal = () => 
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Tela Principal')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Tela Principal</Text>
        </View>
)

