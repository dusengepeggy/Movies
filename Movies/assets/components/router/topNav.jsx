import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
var Top=createMaterialTopTabNavigator()
import Home from '../home';
import Profile from '../profile';
import { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import NewRelease from '../tobNavPages/newRelease';
import Popular from '../tobNavPages/popular';
import Toprated from '../tobNavPages/Toprated';
import upcoming from '../tobNavPages/upcoming'
import { DarkMode } from '../../../utils/darkmodeContext';
export default function TopTabNavigator() {
    var {darkMode}=useContext(DarkMode)
    return (
        <Top.Navigator screenOptions={{
            tabBarScrollEnabled:true,
            
            tabBarStyle:{
                backgroundColor:darkMode?"#1f2123":'white',
                borderTopWidth:0,
                alignContent:"center",
                borderTopColor:darkMode?"#1f2123":'white',
                borderWidth:0
                 
                
            },
            tabBarActiveTintColor:"orange",
            tabBarInactiveTintColor:darkMode?'lightgray':'black',
            tabBarIndicatorStyle:{
                height:6,
                
                borderRadius:5,
                backgroundColor:"orange",
                
            },
            

            
        }} >
            
            <Top.Screen name="Home" component={Home} options={{}} />
            <Top.Screen name="New released" component={NewRelease} />
            <Top.Screen name="Popular" component={Popular} />
            <Top.Screen name="Top rated" component={Toprated} />
            <Top.Screen name="Upcoming" component={upcoming} />
        </Top.Navigator>
    )
}