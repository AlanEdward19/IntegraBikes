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

export const TelaLogin = ({ navigation }) =>
(
    
<LinearGradient colors={[cores.preto_claro,"#000"]} start={{x:0, y:0}}  end={{x:1,y:1}} style={styles.container}>
    <View style={styles.camposFundo}>

    </View>

    <View style={styles.containerLogo}>
        <Image 
            style={styles.logo}
            source={require('../Images/UPX4.png')}
        />

    </View>

    <View style={styles.containerInputEmail}>

        <Text>Log in</Text>
        <Text>Insira suas informações</Text> //Isso dentro

        <TextInput
        activeUnderlineColor={cores.azul}
        style={styles.InputEmail}
        label="Email"
        placeholder={"Insira seu Email"}
        />
        <TextInput
            activeUnderlineColor={cores.azul}
            label="Senha"
            placeholder={"Insira sua Senha"}
        />

    </View>

    <View style={styles.botaoLogin}>

        <BotaoEsticado 
        title="Entrar" 
        size={90}
        textColor={cores.branco}
        buttonColor={cores.azul_bb}
        borderColor={cores.cinza}
        onPress={() => navigation.navigate("TelaPrincipal")}
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
        bottom:25
    },

    logo:{
        width:260,
        height:185,
        alignSelf:"center"
    },
    camposFundo:
    {
        backgroundColor:cores.cinza,
        position:"absolute",
        alignSelf:"center",
        height:420,
        width:410,
        bottom:0,
        borderRadius:30
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
        paddingLeft:20,
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
        marginBottom:20
    }

  });