import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  button: {
    margin: 8,
    backgroundColor: '#007d72',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: Dimensions.get('window').height * 0.08,
  },
  text: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: '#007d72',
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.darkgreen,
    },
    text: {
      ...base_style.text,
      color: colors.darkgreen,
    },
  }),
};
