import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const initialForm = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword('ali@mail.com', 'hellodb123');
      // await auth().signInWithEmailAndPassword(
      //   formValues.usermail,
      //   formValues.password,
      // );
      setLoading(false);

      showMessage({
        message: 'Başarıyla giriş yaptınız',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        description: 'This is our second message',
        type: 'info',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialForm} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              placeHolder={'e-postanızı giriniz:'}
            />
            <Input
              value={values.password}
              isSecure={true}
              onChangeText={handleChange('password')}
              placeHolder={'şifrenizi giriniz:'}
            />
            <Button
              loading={loading}
              theme={'primary'}
              text={'Giriş Yap '}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        theme={'secondary'}
        text={'Kayıt Ol '}
        onPress={() => {
          navigation.navigate('SignPage');
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
