import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: colors.darkgreen,
    borderRadius: 50,
    zIndex: 999,
  },
});
