import React from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerActions } from 'react-navigation';
import { StackHome } from './Principal/StackHome';
import { DrawerMenu } from './DrawerMenu';

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('../images/menu-button.png')}/>
    }else{
        return <Image source={require('../images/left-arrow.png')}/>
    }
}


export const RutasAutenticadas = StackNavigator({
  DrawerMenu: {
    screen: DrawerMenu,
  }
},
{
  navigationOptions: ({ navigation }) => ({
      title: 'MY APP',  // Title to appear in status bar
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
      headerStyle: {
          backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

  })
}
);

