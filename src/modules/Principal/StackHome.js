import { StackNavigator } from 'react-navigation';
import Home from './Home';  
import Profile from '../Profile/Profile';
import HomeMap from './HomeMap';


const StackHome = StackNavigator({
  Home: {
    screen: Home,
  },
  HomeMap: {
    screen: HomeMap,
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
  initialRouteName: 'HomeMap',
  headerMode: 'none'
}
);

export { StackHome };
