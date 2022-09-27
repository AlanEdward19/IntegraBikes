import { createDrawerNavigator } from '@react-navigation/drawer';
import { Opcoes } from '../features/Opcoes';
import { HorarioBus } from '../features/Bike';

const Drawer = createDrawerNavigator();

function SideMenu() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={HorarioBus}
        options={{ drawerLabel: 'Home' }}
      />
    
    </Drawer.Navigator>
  );
}

export default SideMenu;