// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

// create a component
class HomeMap extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.captureCurrentPosition();
    }
    
    captureCurrentPosition(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
              this.setState({
                region: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                },
              });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    
    state = {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
    };
    
    onRegionChange = (region) => {
        this.setState({ region });
    };
    
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
        <MapView
          //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          onRegionChange={this.onRegionChange}
        >
        </MapView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeMap);


