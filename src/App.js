import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign/Sign';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator, DrawerActions} from '@react-navigation/drawer';
import CustomDrawerMessages from './components/CustomDrawerMessages/CustomDrawerMessages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
  const [userSession, setUserSession] = useState();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
      setUserInfo(user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  // const DrawerMessages = ({navigation}) => {
  //   const userMail = auth().currentUser.email;
  //   const nickName = userMail.split('@')[0];

  //   return (
  //     <Drawer.Navigator
  //       drawerContent={props => <CustomDrawerMessages {...props} />}>
  //       <Drawer.Screen
  //         options={{
  //           headerRight: () => (
  //             <MaterialCommunityIcons
  //               name="logout"
  //               onPress={() => auth().signOut()}
  //               size={30}
  //             />
  //           ),
  //           headerShown: true,
  //           headerTitle: 'dertler',
  //           headerTintColor: colors.darkgreen,
  //           headerTitleAlign: 'center',
  //         }}
  //         name="DrawerM"
  //         component={Messages}
  //       />
  //     </Drawer.Navigator>
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="Messages"
            options={{
              headerRight: () => (
                <MaterialCommunityIcons
                  name="logout"
                  onPress={() => auth().signOut()}
                  size={30}
                />
              ),
              headerShown: true,
              headerTitle: 'dertler',
              headerTintColor: colors.darkgreen,
              headerTitleAlign: 'center',
            }}
            component={Messages}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position={'top'} />
    </NavigationContainer>
  );
};

export default App;
