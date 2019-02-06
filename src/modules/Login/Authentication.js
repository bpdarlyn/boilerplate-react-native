import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


import Logo from '../../components/Logo';

const FBSDK = require('react-native-fbsdk');
const {LoginButton, ShareDialog} = FBSDK;

//import Facebook from '../../services/Facebook';


export default class Authentication extends Component {

  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent,
    };
  }
  
  async shareLinkWithShareDialog() {
    const canShow = await ShareDialog.canShow(this.state.shareLinkContent);
    if (canShow) {
      try {
        const {isCancelled, postId} = await ShareDialog.show(
          this.state.shareLinkContent,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  }

	render() {
    const { navigation } = this.props;
		return( 
			<View style={styles.container}>
				<Logo/>
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('SignUpPhone');
          }}
          style={styles.button}>
            <Text style={styles.buttonText}>Ingrear con Télefono</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttonFaceBook}>
            <Text style={styles.buttonText}>Ingresar con Facebook</Text>
        </TouchableOpacity> 
        <LoginButton />
        <TouchableHighlight
          style={styles.share}
          onPress={this.shareLinkWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>
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
  },
  buttonFaceBook: {
    width:300,
    backgroundColor:'#3c50e8',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
});
