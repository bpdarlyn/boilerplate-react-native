import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, 
  Button 
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {

  return (
    <View style={styles.texInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'telefono' ? 'number-pad' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
        onBlur={props.input.onBlur}
      />
      <View style={styles.linea} />
      {props.meta.touched &&
        props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  );
};


const validate = (values) => {
  const errors = {};
  if (!values.telefono) {
    errors.telefono = 'requerido';
  } else if (values.telefono.length < 5) {
    errors.telefono = 'deben ser al menos 5 caracteres';
  } else if (values.telefono.length > 16) {
    errors.telefono = 'debe ser menor de 10 caracteres';
  }
/*
  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'correo invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length > 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.password.length < 16) {
    errors.password = 'debe ser menor de 15 caracteres';
  }
*/
  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password debe coincidir';
  }

  return errors;
};

const FormPhone = (props) => {
  
  return (
    <View>
      <Field name="telefono" component={fieldNombre} ph="75052653" />
      <Button title="Registrar Teléfono" onPress={
          props.handleSubmit(props.loginPhone)
        } />

    </View>
  );
};

const styles = StyleSheet.create({
  texInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
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


export default reduxForm({
  form: 'FormPhone',
  validate,
})(FormPhone);

/*
export default class FormPhone extends Component {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Télefono"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onSubmitEditing={()=> this.password.focus()}
              />
        <Text style={styles.text}>Te enviaremos un mensaje de texto para confirmar tu número</Text>
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    paddingVertical:10,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
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
  text: {
    fontSize:16,
    fontWeight:'500',
    marginVertical: 15,
    paddingHorizontal: 10,
    color:'#ffffff',
    textAlign:'center'
  }
});

*/