import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  text_right: {
    marginLeft: 12,
    fontSize: 16,
    alignSelf: 'flex-end' 
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  footer: {
    marginHorizontal: 16,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    flex: 1
  }
});

const Row = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Text>{props.item.code}</Text>
    </View>
    <View >
        <Text style={styles.text}>
        {`${props.item.direction}`}
        </Text>
    </View>
    <View style = {styles.icon}>
        <Text style={styles.text_right}>{props.item.cost}</Text>
    </View>
  </View>
);

export default Row;