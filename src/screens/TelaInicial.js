//Main Import
import React from "react";
import {View,Text,StyleSheet,Image} from "react-native"

//Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


//Componentes
import { cores } from "../utils/cores";
import { BotaoEsticado } from "../components/BotaoEsticado";

export const TelaInicial = ({ navigation }) =>
(
    
<LinearGradient colors={[cores.preto_claro,"#000"]} start={{x:0, y:0}}  end={{x:1,y:1}} style={styles.container}>
    <View style={styles.containerLogo}>
        <Image
            source={require('../Images/Fundo.png')}
            style={styles.imagemFundo}
        />

        <Image 
            style={styles.logo}
            source={require('../Images/UPX4.png')}
        />

    </View>

    
    <View style={styles.botaoLogin}>

        <BotaoEsticado 
        title="Entrar" 
        size={90}
        textColor={cores.branco}
        buttonColor={cores.azul_bb}
        borderColor={cores.preto_claro}
        onPress={() => navigation.navigate("TelaLogin")}
        />

    </View>

    <View style={styles.botaoRegistro}>

        <BotaoEsticado 
        title="Registrar-se" 
        size={90}
        textColor={cores.azul_bb}
        buttonColor={cores.branco}
        borderColor={cores.preto_claro}
        onPress={() => navigation.navigate("TelaCadastroConta")}
        />

    </View>
    
</LinearGradient>

)

const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: cores.preto_claro  
    },

    botaoLogin:{
        alignSelf:"center",
        position:"absolute",
        bottom:90
    },
    
    botaoRegistro:{
        alignSelf:"center",
        position:"absolute",
        bottom:20
    },

    logo:{
        width:260,
        height:185,
        alignSelf:"center"
    },

    containerLogo:{
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        alignSelf:"center",
        top:330

    },

    imagemFundo:{
        width:275,
        height:210,
        position:"absolute",
        left:67,
        bottom:45
    }

  });