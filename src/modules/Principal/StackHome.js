import { StackNavigator } from 'react-navigation';
import Home from './Home';

const StackHome = StackNavigator({
  Home: {
    screen: Home,
  },
});

export { StackHome };
