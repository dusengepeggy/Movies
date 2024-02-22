import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer}   from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
var Tab=createBottomTabNavigator()
export default function NavBar (){

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home"  />
                <Tab.Screen name="Movies" />
                <Tab.Screen name="Tv"/>
            </Tab.Navigator>
        </NavigationContainer>
    )
} 