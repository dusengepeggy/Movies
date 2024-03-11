import Home from '../home';
import Search from '../search';
import List from '../list';
import Profile from '../profile';
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavBar from './bottomNavigation';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather"
import { DarkMode } from '../../../utils/darkmodeContext';
import { useContext, useLayoutEffect } from 'react';
const Drawer = createDrawerNavigator()

export default DrawerNavigator = () => {
    var navigation =useNavigation()
    var { darkMode } = useContext(DarkMode)

    return (
        
        <Drawer.Navigator initialRouteName='Profile' screenOptions={{headerShown:false}}  >
            <Drawer.Screen name="Home3" component={Home} />
            <Drawer.Screen name="Search3" component={Search}  />
            <Drawer.Screen name="List3" component={List} />
            <Drawer.Screen name="Profile" component={Profile}  />
            
        </Drawer.Navigator>
        
       
    )
}