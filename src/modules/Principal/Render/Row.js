import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    navBar: {
        height: 150,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        width:200,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    itemStyle: {
        flex: 1,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end' ,
        borderWidth: 1
    },
    icon: {
        flex: 1
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
    }
});

const Row = (props) => (
  <View style={styles.navBar}>

    <View style={styles.itemStyle}>
        <Image 
          style={styles.image}
          resizeMode={"cover"}
          source={{ uri: "https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg"}}
        />
        <Text style={styles.text}>
        {`${props.item.direction}`}
        </Text>
    </View>

  </View>
);

export default Row;