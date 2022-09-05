import React from "react";
import {View,Text,StyleSheet} from "react-native"
import MainContainer from "../components/MainContainer";
import SideMenu from "../components/SideMenu";


export const HorarioBus = () => 
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Horario de Onibus')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Horario de Onibus</Text>
        </View>
)

