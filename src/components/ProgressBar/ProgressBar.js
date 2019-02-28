import React from "react";
import {View,ActivityIndicator} from 'react-native';
import styles from './styles';
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const {loading,content} = props;
  return (
      loading ? <View style={styles.centerActivity}>
        <ActivityIndicator size={"large"} color={"#00ff00"}/>
      </View> : content
  );
};
ProgressBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    content: PropTypes.object
};

export default ProgressBar;
