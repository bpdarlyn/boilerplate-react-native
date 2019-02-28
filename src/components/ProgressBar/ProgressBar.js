import React from "react";
import {ActivityIndicator,Image,View} from 'react-native';
import styles from './styles';
import PropTypes from "prop-types";
import Container from './../Container/Container';
import {accentColor} from './../../../assets/colors/color-palette';
const logoCompany = require('./../../../assets/images/launcher_icon.png');

const ProgressBar = (props) => {
    const {loading, content} = props;
    return (
        loading ? <Container>
            <View style={styles.centerActivity}>
                <Image source={logoCompany} resizeMode={'contain'} style={{width:100, height: 100,marginBottom:20}}/>
                <ActivityIndicator size={"large"} color={accentColor}/>
            </View>
        </Container> : content
    );
};
ProgressBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    content: PropTypes.object
};

export default ProgressBar;
