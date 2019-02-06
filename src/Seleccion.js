// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './services/Firebase';
import { RutasAutenticadas } from './modules/RutasAutenticadas';
import { RutasNoAutenticadas } from './modules/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './actions/Actions';

// create a component
class Seleccion extends Component {
  componentDidMount() {
    this.props.autenticacion();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  usuario: state.reducerSesion,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    // dispatch(actionCreator)
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log(usuario.toJSON());
        dispatch(actionEstablecerSesion(usuario));
      } else {
        console.log('No existe sesión');
        dispatch(actionCerrarSesion());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
