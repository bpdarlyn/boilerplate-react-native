import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import FormPhone from './Forms/FormPhone';
import Logo from '../../components/Logo';
import { connect } from 'react-redux';
import { actionLoginPhone } from '../../actions/Actions';
import {autenticacion} from '../../services/Firebase';
const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

class SignUpPhone extends Component {

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+591',
      confirmResult: null,
    };
  }

  componentDidMount() {
    
    this.unsubscribe = autenticacion.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+591',
          confirmResult: null,
        });
      }
    });
    
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    console.log(this.state);
    const { phoneNumber } = this.state;
    this.setState({ message: 'Enviando Código...' });
    
    autenticacion.signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Código fue enviado!' }))
      .catch(error => this.setState({ message: `Registro de teléfono Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Código confirmado!' });
        })
        .catch(error => this.setState({ message: `Error al confirmar Código: ${error.message}` }));
    }
  };

  signOut = () => {
    autenticacion.signOut();
  }
  
  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;
      
    return (
      <View style={{ padding: 25 }}>
        <Text>Escriba su número:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'+59175052653'}
          value={phoneNumber}
        />
        <TouchableOpacity style={styles.button}
          onPress={this.signIn}>
          <Text style={styles.buttonText}>Registrase</Text>
        </TouchableOpacity> 
      </View>
    );
  }
  
  renderMessage() {
    const { message } = this.state;
  
    if (!message.length) return null;
  
    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }
  
  renderVerificationCodeInput() {
    const { codeInput } = this.state;
  
    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Ingrese código de verificación:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Nro de Código '}
          value={codeInput}
        />
        <TouchableOpacity style={styles.button}
          onPress={this.confirmCode}>
          <Text style={styles.buttonText}>Confirmar Código</Text>
        </TouchableOpacity> 
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={styles.container}>
        
        {!user && !confirmResult && this.renderPhoneNumberInput()}
        
        {this.renderMessage()}
        
        {!user && confirmResult && this.renderVerificationCodeInput()}
        
        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
            <Text style={{ fontSize: 25 }}>Desea salir!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <TouchableOpacity style={styles.button}
              onPress={this.signOut}>
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity> 
          </View>
        )}
      </View>
    );
  }
  // ----------------------------------------
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
