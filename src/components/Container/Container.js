import React from "react";
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {primaryColor,secondaryColor} from './../../../assets/colors/color-palette';

const Container = ({children}) => {
    return (
        <LinearGradient colors={[primaryColor,secondaryColor]} style={styles.styleContainer}>
            {children}
        </LinearGradient>
    );
};

export default Container;
