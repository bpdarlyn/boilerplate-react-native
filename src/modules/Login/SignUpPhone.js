import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import FormPhone from './Forms/FormPhone';
import Logo from '../../components/Logo';

export default class SignUpPhone extends Component {
    
	render() {
    const { navigation } = this.props;
		return(
			<View style={styles.container}>
                <Logo/>
				<FormPhone type="Continuar"/>
                <TouchableOpacity style={styles.button}
                onPress={() => {
                  navigation.navigate('Authentication');
                }}
                >
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity> 
             <View>   
            </View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity ><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
            </View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
