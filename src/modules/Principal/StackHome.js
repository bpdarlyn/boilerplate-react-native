import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Profile from '../Profile/Profile';

const StackHome = StackNavigator({
  Home: {
    screen: Home,

  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      gesturesEnabled: false,
      headerLeft: null
    }
  },
},
{ 
  initialRouteName: 'Home',
  headerMode: 'none',

}
);

export { StackHome };
