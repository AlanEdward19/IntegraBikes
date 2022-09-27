//Main Import
import React from "react";
import {View,Text,StyleSheet,Image} from "react-native"

//Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


//Componentes
import { cores } from "../utils/cores";
import {Botao} from "../components/Botao";

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

    <View style={styles.containerTexto}>

        <Text style={styles.Texto}>
            Novo modelo de serviço 
            de bicicletas publicas 
            
            <Text style={{color:cores.azul}}> gratuitas</Text> e <Text style={{color:cores.azul, textDecorationLine: 'underline'}}>modernas</Text>
        
        </Text>

    </View>

    <View style={styles.containerDescricao}>

        <Text style={styles.TextoDescricao}>
                Sorocaba dispoe de um novo modelo de serviço de bicicletas
                publicas compartilhadas integrado com a rede de transporte coletivo
                da cidade
        </Text>

    </View>

    <View style={styles.containerDescricao2}>

        <Text style={styles.TextoDescricao}> 
                Participe dessa inovação
        </Text>

    </View>
    
    <View style={styles.botao}>

        <Botao 
        title="Iniciar" 
        size={100}
        textColor={cores.branco}
        buttonColor={cores.azul_bb}
        borderColor={cores.preto_claro}
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

    botao:{
        alignSelf:"center",
        position:"absolute",
        bottom:-12
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
        top:280

    },

    containerDescricao:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:"absolute",
        paddingLeft:10,
        paddingTop:30,
        paddingRight:70,
        top:550
    },

    containerDescricao2:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:"absolute",
        paddingLeft:10,
        paddingTop:30,
        paddingRight:70,
        top:625
    },

    containerTexto:{
        paddingTop:25,
        paddingLeft:10,
        paddingRight:70,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:"absolute",
        top:450
    },

    Texto:{
        fontSize:27,
        color:cores.branco
    },

    TextoDescricao:{
        fontSize:16,
        color:cores.branco
    },

    imagemFundo:{
        width:275,
        height:210,
        position:"absolute",
        left:67,
        bottom:45
    }

  });