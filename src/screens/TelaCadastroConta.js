//Main Import
import React from "react";
import {View,Text,StyleSheet,Image} from "react-native"

//Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


//Componentes
import { cores } from "../utils/cores";
import { BotaoEsticado } from "../components/BotaoEsticado";
import { TextInput } from "react-native-paper";

import { BotaoLargo } from "../components/BotaoLargo";

export const TelaCadastroConta = ({ navigation }) =>
(
    
<LinearGradient colors={[cores.preto_claro,"#000"]} start={{x:0, y:0}}  end={{x:1,y:1}} style={styles.container}>
    <View style={styles.camposFundo}>

    </View>

    <View style={styles.containerLogo}>
        <Image 
            style={styles.logo}
            source={require('../Images/LogoContornado.png')}
        />

    </View>

    <View style={styles.containerInputEmail}>

        <Text style={styles.textoLogin}>Criar Conta</Text>
        <Text style={styles.subtituloTextoLogin}>Entre com as informacoes para criar sua conta</Text>

        <TextInput
        activeUnderlineColor={cores.azul}
        style={styles.InputEmail}
        label="Usuário"
        placeholder={"Insira seu Usuário"}
        />
        
        <TextInput
            activeUnderlineColor={cores.azul}
            style={styles.InputEmail}
            label="Senha"
            placeholder={"Insira sua Senha"}
        />

    </View>

    <View style={styles.botaoLogin}>

        <BotaoLargo 
        title="Criar uma Conta" 
        size={90}
        textColor={cores.branco}
        buttonColor={cores.azul}
        borderColor={cores.azul}
        onPress={() => navigation.navigate("TelaPrincipal")}
        />

    </View>

    <Text 
        style={styles.cadastrar}
        onPress={() => navigation.navigate("TelaLogin")}>
            Já possui uma conta? Entre
    </Text>
    
</LinearGradient>

)

const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: cores.preto_claro  
    },
    
    textoLogin:{
        alignSelf:"center",
        position:"absolute",
        bottom:220,
        fontSize:30,
        color: cores.azul
    },

    subtituloTextoLogin:{
        alignSelf:"center",
        position:"absolute",
        bottom:200,
        fontSize:12,
        color: cores.cinza
    },

    botaoLogin:{
        alignSelf:"center",
        position:"absolute",
        bottom:70
    },

    logo:{
        width:305,
        height:160,
        alignSelf:"center"
    },

    camposFundo:
    {
        backgroundColor:cores.cinza_claro,
        position:"absolute",
        alignSelf:"center",
        height:550,
        width:410,
        bottom:-50,
        borderRadius:60
    },

    containerLogo:{
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        alignSelf: "center",
        top:180

    },

    containerInputEmail:
    {
        position:"absolute",
        bottom:200,
        left:35,
        paddingLeft:10,
        alignSelf:"center",
        alignContent:"center",
        width:"80%"
    },

    imagemFundo:{
        width:275,
        height:210,
        position:"absolute",
        left:67,
        bottom:45
    },
    InputEmail:{
        marginBottom:20,
        backgroundColor:cores.branco,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    
    cadastrar:{
        alignSelf:"center",
        position:"absolute",
        bottom:30,
        fontSize:15,
        color: cores.cinza
    }

  });