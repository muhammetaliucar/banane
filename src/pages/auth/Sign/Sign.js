import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './Sign.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const initialValues = {
  usermail: '',
  password: '',
  passVertif: '',
};

const Sign = ({navigation}) => {
  const handleFormSubmit = async values => {
    if (values.password !== values.passVertif) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
    } else {
      try {
        await auth().createUserWithEmailAndPassword(
          values.usermail,
          values.password,
        );
        navigation.navigate('LoginPage');
        showMessage({
          message: 'Kullanıcı oluşturuldu',
          type: 'success',
        });
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'success',
        });
      }
    }
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              placeHolder={'e-postanızı giriniz:'}
            />
            <Input
              isSecure={true}
              value={values.password}
              onChangeText={handleChange('password')}
              placeHolder={'şifrenizi giriniz:'}
            />
            <Input
              isSecure={true}
              value={values.passVertif}
              onChangeText={handleChange('passVertif')}
              placeHolder={'şifrenizi tekrar giriniz:'}
            />
            <Button
              theme={'primary'}
              text={'Kayıt Ol '}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        theme={'secondary'}
        text={'Geri '}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default Sign;
