import Row from './Form/Row';
import React from 'react';
import { View, Text, StyleSheet, 
    Button,
    FlatList } from 'react-native';

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: data
        };
    }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.datas}
        keyExtractor = { (item, index) => index.toString() }
        renderItem={({ item, index }) => <Row item={item}  />}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
    );
  }
}

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
    },
    {   
        id: 3,
        code: "100",
        direction: "B/ Los Lotes",
        cost: "20 Bs.-"
    },
    {
        id: 4,
        code: "200",
        direction: "B/ Penocos",
        cost: "20 Bs.-"
    },
    {
        id: 5,
        code: "300",
        direction: "B/ Braninf. Santa Cruz de la Sierra",
        cost: "20 Bs.-"
    }
]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    separador: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
      },
  });

export default Travel;