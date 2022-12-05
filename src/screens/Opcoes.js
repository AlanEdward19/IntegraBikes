//Main Import
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"

//Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


//Componentes
import { cores } from "../utils/cores";

import { BotaoLargo } from "../components/BotaoLargo";

export const Opcoes = ({navigation}) =>
(
        <LinearGradient colors={[cores.cinza_claro, "#f3eae8"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 1 }} style={styles.container}>

                        <View style={styles.top}>

                                <View style={styles.botoes}>
                                        <BotaoLargo
                                                style={styles.botaoOpcoes}
                                                title="OPÇÕES"
                                                size={100}
                                                textColor={cores.branco}
                                                buttonColor={cores.black}
                                                borderColor={cores.black}
                                                onPress={() => navigation.navigate("Tela Principal")}
                                        />
                                </View>
                                
                                <View style={styles.botoes}>
                                        <BotaoLargo
                                                style={styles.botaoPerfil}
                                                title="PERFIL"
                                                size={90}
                                                textColor={cores.branco}
                                                buttonColor={cores.azul}
                                                borderColor={cores.azul}
                                                onPress={() => navigation.navigate("Tela Principal")}
                                        />
                                </View>

                                <View style={styles.botoes}>
                                        <BotaoLargo
                                                style={styles.botaoCarteira}
                                                title="CARTEIRA"
                                                size={90}
                                                textColor={cores.branco}
                                                buttonColor={cores.azul}
                                                borderColor={cores.azul}
                                                onPress={() => navigation.navigate("Tela Principal")}
                                        />
                                </View>

                                <View style={styles.botoes}>
                                        <BotaoLargo
                                                style={styles.botaoCarteira}
                                                title="HISTÓRICO"
                                                size={90}
                                                textColor={cores.branco}
                                                buttonColor={cores.azul}
                                                borderColor={cores.azul}
                                                onPress={() => navigation.navigate("Tela Principal")}
                                        />
                                </View>

                        </View>
       
        </LinearGradient>

)

const styles = StyleSheet.create({

        camposFundo: {
                backgroundColor: cores.preto_claro,
                position: "absolute",
                alignSelf: "center",
                height: 550,
                width: 410,
                top: 0,
                borderBottomLeftRadius: 60,
                borderBottomRightRadius: 60
        },

        top: {
                paddingTop: 25,
                paddingLeft: 20,
                paddingRight: 20,
                
        },
        
        container: {
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: cores.preto_claro
        },

        botoes: {
                paddingBottom: 25,
                paddingLeft: 20,
                paddingRight: 20,
              },



});
