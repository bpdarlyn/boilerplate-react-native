import React from "react";
import {View,ActivityIndicator} from 'react-native';
import styles from './styles';
import PropTypes from "prop-types";
import LinearGradient from 'react-native-linear-gradient';

const ProgressBar = (props) => {
  const {loading,content} = props;
  return (
    loading ? <LinearGradient colors={['#9EBE00','#0099DB']} style={styles.centerActivity}>
        <ActivityIndicator size={"large"} color={"#9EBE00"}/>
      </LinearGradient> : content
  );
};
ProgressBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    content: PropTypes.object
};

export default ProgressBar;
