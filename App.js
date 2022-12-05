import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import { TelaInicial } from './src/screens/TelaInicial';
import MiddlewareScren from './src/features/MiddlewareScreen';
import { TelaLogin } from './src/screens/TelaLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaCadastroConta } from './src/screens/TelaCadastroConta';
import { ESaoBento } from './src/screens/estacoes/ESaoBento';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'light-content'} />
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
        />
        <Stack.Screen name="TelaPrincipal" component={MiddlewareScren} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastroConta" component={TelaCadastroConta} />
        <Stack.Screen name="A" component={ESaoBento} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
