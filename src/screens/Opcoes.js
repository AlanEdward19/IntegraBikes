//Main Import
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"

//Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


//Componentes
import { cores } from "../utils/cores";
import { BotaoEsticado } from "../components/BotaoEsticado";
import { TextInput } from "react-native-paper";

import { BotaoLargo } from "../components/BotaoLargo";

export const Opcoes = () =>
(
        <LinearGradient colors={[cores.cinza_claro, "#f3eae8"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 1 }} style={styles.container}>
                <View style={{}}>

                </View>

                <View style={styles.camposFundo}>

                        <View style={styles.teste}>

                                <BotaoLargo
                                        style={styles.botaoMeuPerfil}
                                        title="Meu perfil"
                                        size={90}
                                        textColor={cores.branco}
                                        buttonColor={cores.azul}
                                        borderColor={cores.azul}
                                        onPress={() => navigation.navigate("TelaPrincipal")}
                                />

                                <BotaoLargo
                                        style={styles.botaoPrivacidade}
                                        title="Privacidade & Segurança"
                                        size={90}
                                        textColor={cores.branco}
                                        buttonColor={cores.azul}
                                        borderColor={cores.azul}
                                        onPress={() => navigation.navigate("TelaPrincipal")}
                                />

                                <BotaoLargo
                                        style={styles.botaoPagamentos}
                                        title="Pagamentos"
                                        size={90}
                                        textColor={cores.branco}
                                        buttonColor={cores.azul}
                                        borderColor={cores.azul}
                                        onPress={() => navigation.navigate("TelaPrincipal")}
                                />

                        </View>

                </View>

                <View style={styles.botaoEncerrarSessao}>

                        <BotaoLargo
                                title="Encerrar Sessão"
                                size={80}
                                textColor={cores.branco}
                                buttonColor={cores.azul}
                                borderColor={cores.azul}
                                onPress={() => navigation.navigate("TelaPrincipal")}
                        />

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

        teste: {
                top: 70
        },
        
        container: {
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: cores.preto_claro
        },

        botaoMeuPerfil: {
                alignSelf: "center",
                position: "absolute",
                top: 70
        },

        botaoPrivacidade: {
                alignSelf: "center",
                position: "absolute",
                top: 140
        },

        botaoPagamentos: {
                alignSelf: "center",
                position: "absolute",
                top: 210
        },

        botaoEncerrarSessao: {
                alignSelf: "center",
                position: "absolute",
                bottom: 40
        },



});
