import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress, theme = 'primary', loading}) => {
  return (
    <TouchableOpacity style={styles[theme].button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <Text style={styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
