import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const navigate = createStackNavigator();
import Login from './assets/components/login';
import Register from './assets/components/register';
import Welcome from './assets/components/welcome';
import GetStarted from './assets/components/getStarted';
import Loading from "./assets/components/loading";
import Home from './assets/components/home';
var Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <navigate.Navigator initialRouteName='Loading' >
        <navigate.Screen name='Loading' component={Loading} options={{ headerShown: false }} />
        <navigate.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <navigate.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <navigate.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <navigate.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <navigate.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      </navigate.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen name="Home"  component={Register}/>
        <Tab.Screen name="Movies" component={Login}/>
        <Tab.Screen name="Tv" children={Welcome} />
      </Tab.Navigator> */}
    </NavigationContainer>


  );
}


