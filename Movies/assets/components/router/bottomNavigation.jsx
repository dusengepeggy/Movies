import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer, useIsFocused}   from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Home from '../home';
import Search from '../search';
import List from '../list';
import Profile from '../profile';
import { Colors } from 'react-native/Libraries/NewAppScreen';
var Tab=createBottomTabNavigator()
export default function NavBar (){

    return(
        <>
            <Tab.Navigator 
                screenOptions={{
                    tabBarShowLabel:false,
                    tabBarActiveTintColor:"yellow",
                    tabBarInactiveTintColor:"lightgray",
                    tabBarStyle: {
                        backgroundColor: "#1F2123",
                        borderBlockColor:"transparent",

                    },
                   tabBarIconStyle:{
                    color:"white"
                   }
                }}
             
            >
                <Tab.Screen name="Home1" component={Home} options={{headerShown:false,tabBarIcon:({focused}) => <Icon name={'home'} color={focused?"orange":'lightgray'} size={25} style={{fontWeight:"100"}}  /> }}  />
                <Tab.Screen name="Search" component={Search} options={{headerShown:false,tabBarIcon:({focused})=><MaterialCommunityIcons name='magnify' color={focused?"orange":'lightgray'} size={30}/>}}/>
                <Tab.Screen name="List" component={List} options={{headerShown:false,tabBarIcon:({focused})=> <Icon name='folder'  color={focused?"orange":'lightgray'}  size={25} />}}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown:false,tabBarIcon:({focused})=><AntDesign name='appstore-o' color={focused?"orange":'lightgray'} size={25}/>}} />
            </Tab.Navigator> 
        </>
    )
} 
