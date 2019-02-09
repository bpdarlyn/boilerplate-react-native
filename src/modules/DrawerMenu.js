import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import { StackHome } from './Principal/StackHome';
import { Profile } from './Profile/Profile';
import DrawerScreen from './Menu/DrawerScreen';
// Drawer Navigator
export const DrawerMenu = createDrawerNavigator({
    Home: {
      screen: StackHome
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
}
);