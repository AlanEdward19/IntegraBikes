import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import { TelaInicial } from './src/features/TelaInicial';
import MiddlewareScren from './src/features/MiddlewareScreen';
import { TelaPrincipal } from './src/features/TelaPrincipal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
