import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const navigate = createStackNavigator();
import Login from '../login';
import Register from '../register';
import Welcome from '../welcome';
import GetStarted from '../getStarted';
import Loading from "../loading";
import Home from '../home';
import NavBar from './bottomNavigation';
import Detail from '../details';


var Tab = createBottomTabNavigator()
export default function TopBar() {
  
  return (
    <>
      <StatusBar style="light" />
      <navigate.Navigator initialRouteName='Loading' >
        <navigate.Screen name='Loading' component={Loading} options={{ headerShown: false }} />
        <navigate.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <navigate.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <navigate.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <navigate.Screen name="Home" component={NavBar} options={{ headerShown: false }} />
        <navigate.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <navigate.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
      </navigate.Navigator>


    </> 

 

    


  );
}


