// import liraries
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TextInput 
} from 'react-native';
import { connect } from 'react-redux';
import FormProfile from './Forms/FormProfile';
// create a component
class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FormProfile />
        <Button
          title="Volver"
          onPress={() => {
            navigation.goBack();
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
    backgroundColor: '#2c3e50',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);