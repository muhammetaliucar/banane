import React, {useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './CustomDrawerMessages.style';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDrawerMessages = ({props, navigation}) => {
  const userInfo = auth().currentUser;
  const nickName = userInfo.email.split('@')[0];

  return (
    <SafeAreaView {...props} style={{marginTop: 30, flex: 1, marginLeft: 10}}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
        }}>
        <AntDesign style={{marginRight: 20}} name="profile" size={30} />
        <Text style={styles.fontText}>{nickName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          auth().signOut();
        }}
        style={{flexDirection: 'row'}}>
        <AntDesign style={{marginRight: 20}} name="logout" size={30} />
        <Text style={styles.fontText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawerMessages;
