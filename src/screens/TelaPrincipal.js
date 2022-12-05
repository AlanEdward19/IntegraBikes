import React from "react";
import {View,Text,StyleSheet} from "react-native"

//Utils
import { cores } from '../utils/cores';

//Componentes
import { BotaoEsticado } from "../components/BotaoEsticado";
import { BotaoLargo } from "../components/BotaoLargo";
import { BotaoPersonalizavel } from "../components/BotaoPersonalizavel";

export const TelaPrincipal = () => 
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
        <View>
                <View style={styles.botaoPrincipal}>

                <BotaoPersonalizavel
                        title= "ESTAÇÕES PROXIMAS"
                        height={100}
                        width={370}
                        size={130}
                />
                
                </View>

                <View style={styles.botoes}>

                <BotaoPersonalizavel
                        title= "E11- ESTAÇÃO S.BENTO"
                        height={70}
                        width={370}
                        textColor={cores.branco}
                        buttonColor={cores.azul}
                        borderColor={cores.azul}
                        size={110}
                />

                </View>

                <View style={styles.botoes}>

                <BotaoPersonalizavel
                        title= "E10- CASA DO CID.JPA"
                        height={70}
                        width={370}
                        textColor={cores.branco}
                        buttonColor={cores.azul}
                        borderColor={cores.azul}
                        size={110}
                />

                </View>

                <View style={styles.botoes}>

                <BotaoPersonalizavel
                        title= "E09- SHOPPING CIDADE"
                        height={70}
                        width={370}
                        textColor={cores.branco}
                        buttonColor={cores.azul}
                        borderColor={cores.azul}
                        size={110}
                />

                </View>

                <View style={styles.botoes}>

                <BotaoPersonalizavel
                        title= "E08- MARIA ANTON.PR"
                        height={70}
                        width={370}
                        textColor={cores.branco}
                        buttonColor={cores.azul}
                        borderColor={cores.azul}
                        size={110}
                />

                </View>
                
        </View>

        </View>
)

const styles = StyleSheet.create({
        
        botaoPrincipal:{
                paddingBottom: 40,
                paddingLeft:20,
                paddingRight:20
            },

        botoes:{
            paddingBottom: 25,
            paddingLeft:20,
            paddingRight:20
        }
    
      });

