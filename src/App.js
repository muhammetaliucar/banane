import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign/Sign';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages';
import colors from './styles/colors';

const Stack = createStackNavigator();

const App = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'dertler',
            headerTintColor: colors.darkgreen,
          }}
          name="Messages"
          component={Messages}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        {/* <Stack.Screen name="SignPage" component={Sign} /> */}
      </Stack.Navigator>
      <FlashMessage position={'top'} />
    </NavigationContainer>
  );
};

export default App;
