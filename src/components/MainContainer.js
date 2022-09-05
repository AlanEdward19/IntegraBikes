import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cores } from '../utils/cores';

// Screens
import { TelaPrincipal } from '../features/TelaPrincipal';
import { HorarioBus } from '../features/HorarioBus';
import { Opcoes } from '../features/Opcoes';

//Screen names
const homeName = "Tela Principal";
const detailsName = "Details";
const settingsName = "Opções";
const Bus = "Horarios Onibus"

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            
            }else if (rn === Bus) {
              iconName = focused ? 'bus' : 'bus-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}
        tabBarOptions={{
          activeTintColor: cores.branco,
          inactiveTintColor: cores.azul,
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          activeBackgroundColor: cores.azul,
          inactiveBackgroundColor: cores.branco,
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={TelaPrincipal} />
        <Tab.Screen name={Bus} component={HorarioBus} />
        <Tab.Screen name={settingsName} component={Opcoes} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;