import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({placeHolder, onChangeText, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={isSecure}
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
