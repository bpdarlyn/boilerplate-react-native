// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase'
import CONSTANTS from '../../constants/Constants';
import { connect } from 'react-redux';
import {
  actionCerrarSesion
} from '../../actions/Actions';
// create a component
class Home extends Component {
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
  }
  cerrarSesionX = (values) => {
    this.props.cerrarSesion(values);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
        <Button
          title="Comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        />
        <Button
          title="Logout"
          onPress={() => {
            this.signOutUser()//this.cerrarSesionX(this.props.usuario)
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
//export default Home;

const mapStateToProps = state => ({
  usuario: state.reducerSesion
});

const mapDispatchToProps = dispatch => ({
    cerrarSesion: (values) => {
        dispatch(actionCerrarSesion(values));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
