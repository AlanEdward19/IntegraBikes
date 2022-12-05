import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Utils
import { cores } from "../../utils/cores";

//Componentes
import { BotaoPersonalizavel } from "../../components/BotaoPersonalizavel";

export const ESaoBento = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View>

      <View style={styles.botaoPrincipal}>

        <BotaoPersonalizavel
          title="E11- ESTAÇÃO S.BENTO"
          height={100}
          width={370}
          size={110}
        />
        
      </View>

      <View style={styles.botoes}>

        <BotaoPersonalizavel
          title="ESTAÇÃO MAIS PROXIMA E09"
          height={70}
          width={370}
          textColor={cores.branco}
          buttonColor={cores.azul}
          borderColor={cores.azul}
          size={110}
        />

      </View>

      <View>

        <BikeCircle
          buttonColor={cores.verde}
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
  },

  botoes: {
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
