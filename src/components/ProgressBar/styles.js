import { StyleSheet,Dimensions } from 'react-native';
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  centerActivity:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
