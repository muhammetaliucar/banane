import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './FloatingButton.style';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcon name={icon} color="white" size={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
