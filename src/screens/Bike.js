import React from "react";
import {View,Text,StyleSheet} from "react-native"
import MainContainer from "../components/MainContainer";
import SideMenu from "../components/SideMenu";


export const Bike = () => 
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Informações de Bike')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Informações de Bike</Text>
        </View>
)

