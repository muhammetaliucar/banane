import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: deviceSize.height / 9,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    margin: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'black',
    elevation: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  author: {
    alignItems: 'flex-end',
  },
  author_text: {
    fontStyle: 'italic',
    color: 'white',
    marginEnd: 10,
    marginBottom: 10,
  },
  date: {
    color: 'white',
    fontStyle: 'italic',
    opacity: 0.7,
  },
});
