import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Utils
import { cores } from "../utils/cores";

//Componentes
import { BotaoPersonalizavel } from "../components/BotaoPersonalizavel";
import { BikeCircle } from "../components/BikeCircle";


export const TelaPrincipal = ({navigation}) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
  
        <View style={styles.botaoPrincipal}>
  
          <BotaoPersonalizavel
            title="E08 - MARIA ANTON.PR"
            height={100}
            width={370}
            size={110}
          />
          
        </View>
  
        <View style={styles.botoes}>
  
          <BotaoPersonalizavel
            title="ESTAÇÃO MAIS PROXIMA E07"
            height={70}
            width={370}
            textColor={cores.branco}
            buttonColor={cores.azul}
            borderColor={cores.azul}
            size={110}
            
          />
  
        </View>
  
        <View style={styles.bikes}>
  
          <BikeCircle
            buttonColor={cores.vermelho}
          />
  
          <BikeCircle
            buttonColor={cores.vermelho}
          />
  
          <BikeCircle
            buttonColor={cores.verde}
          />
          
              <BikeCircle
              buttonColor={cores.verde}
            />
  
            <BikeCircle
              buttonColor={cores.vermelho}
            />
  
            <BikeCircle
              buttonColor={cores.vermelho}
            />
        
          
            <BikeCircle
              buttonColor={cores.verde}
            />
  
            <BikeCircle
              buttonColor={cores.vermelho}
            />
  
            <BikeCircle
              buttonColor={cores.vermelho}
            />
            
          </View>
   
  
      </View>
  
    </View>
  );
  
  const styles = StyleSheet.create({
    botaoPrincipal: {
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: "center"
    },
  
    botoes: {
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: "center"
    },
  
    bikes:{
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingTop: 30,
      flexDirection: "row",
      flex: 1,
      alignItems: "flex-start",
      flexWrap: "wrap"
      
    }
  });
  