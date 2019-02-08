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
import { connect } from 'react-redux';
import { actionLoginPhone } from '../../actions/Actions';
import autenticacion from '../../services/Firebase';

class SignUpPhone extends Component {
  /*
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null,
    };
  }
  */
  signInPhone = (values) => {
    console.log("NUMBER");
    console.log(values);
    this.props.loginPhone(values);
    //const { phoneNumber } = this.state;
    //this.setState({ message: 'Sending code ...' });
    //console.log(phoneNumber);
    //firebase.auth().signInWithPhoneNumber(phoneNumber)
    //  .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
    //  .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

	render() {
    const { navigation } = this.props;
		return(
			<View style={styles.container}>
        <Logo/>
        
				<FormPhone type="RegistroPhone" loginPhone={this.signInPhone}/>
        
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.goBack();
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



const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  loginPhone: (datos) => {
    dispatch(actionLoginPhone(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPhone);
