// import liraries
import React, { Component } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  Button, 
  FlatList, 
  TouchableHighlight,
  TextInput } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Row from './Render/Row';


// create a component
class HomeMap extends Component {
  constructor(props){
      super(props);
      this.state = {
        datas: data,
        showCancel: true
      };
  }
    
  componentDidMount(){
      //this.captureCurrentPosition();
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
    
  stateLatLong = {
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

  space(){
    return(<View style={{height: 50, width: 2, backgroundColor: 'black'}}/>)
  };
  toggleCancel = () => {
    this.setState({
        showCancel: !this.state.showCancel
    });
  };

  _renderCancel = (props) =>  {
    return (
        <TouchableHighlight 
          style = {styles.actionButtonCancel}
          onPress={()=> this.toggleCancel()}>
          <View>
              <Text style={styles.buttonText} >Cancelar</Text>
          </View>
        </TouchableHighlight>
    );
  };
  _renderMarcar = (props) =>  {
    return (
        <TouchableHighlight 
          style = {styles.actionButton}
          onPress={()=> this.toggleCancel()}>
          <View>
              <Text style={styles.buttonText} >Marcar</Text>
          </View>
        </TouchableHighlight>
    );
  };
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
          <MapView
            //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            onRegionChange={this.onRegionChange}
            showsUserLocation={true}
          >
          </MapView>
          {this.state.showCancel ? this._renderMarcar() : null} 

          {this.state.showCancel ? this._renderCancel() : null} 
          <FlatList
            style={styles.containerok}
            data={this.state.datas}
            horizontal={true}
            keyExtractor = { (item, index) => index.toString() }
            renderItem={({ item, index }) => <Row item={item}  />}
            ItemSeparatorComponent={() => <View style={styles.separador} />}
          />
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
    actionButton: {
      backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      position: 'absolute',
      width: 202,
      height: 50,
      top: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionButtonCancel: {
      backgroundColor:'#cb2431',
      borderRadius: 25,
      marginVertical: 10,
      bottom: 10,
      paddingVertical: 13,
      position: 'absolute',
      width: 202,
      height: 50,
      flex: 1,
      alignItems: 'center',
    },
    containerok: {
      position: 'absolute',
      height: 150,
      flex: 1,
      flexDirection: 'row'
    },
    separador: {
      borderWidth: 1,
      borderColor: '#C0C0C0',
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
   });


const data = [
  {   
      id: 0,
      code: "100",
      direction: "B/ Los Lotes",
      cost: "20 Bs.-"
  },
  {
      id: 1,
      code: "200",
      direction: "B/ Penocos",
      cost: "20 Bs.-"
  },
  {
      id: 2,
      code: "300",
      direction: "B/ Braninf. Santa Cruz de la Sierra",
      cost: "20 Bs.-"
  }
]

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


