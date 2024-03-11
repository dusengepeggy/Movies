import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, useIsFocused } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import DrawerNavigation from './drawerNavigation';
import Search from '../search';
import Home from '../home';
import Profile from '../profile';
import List from '../list';
import logo from '../../pics/muvi.png';
import { Colors } from 'react-native/Libraries/NewAppScreen';
var Tab = createBottomTabNavigator()
import { getAuth, } from 'firebase/auth';
import { useState, useEffect, useContext } from 'react';
import { DarkMode } from '../../../utils/darkmodeContext';
import TopTabNavigator from './topNav';
export default function NavBar({ navigation }) {
	const {changeMode ,darkMode}=useContext(DarkMode)
	var auth = getAuth()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	useEffect(() => {

		console.log(auth);
		if (auth["currentUser"]) {
			setIsLoggedIn(true)
		}
		console.log(auth);
	}, [])

	return (
		<>

			{
				isLoggedIn ?
					(<Tab.Navigator
						initialRouteName='Home'
						screenOptions={{
							tabBarShowLabel: false,
							tabBarActiveTintColor: "yellow",
							tabBarInactiveTintColor: "lightgray",
							tabBarStyle: {
								backgroundColor:darkMode? "#1F2123":"white",
								borderBlockColor: "transparent",

							},

						}}

					>
						<Tab.Screen name="Home1" component={TopTabNavigator} options={{
							tabBarIcon: ({ focused }) => <Icon name={'home'} color={focused ? "orange" : 'lightgray'} size={25} style={{ fontWeight: "100" }} />,
							headerRight: () => {
								return (
									<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginRight: 20 }} >
										<MaterialCommunityIcons name='bell-outline' size={25} color={darkMode?"white":"black"} />
										<View style={{ width: 20 }}></View>
										<MaterialCommunityIcons name='bookmark-outline' size={25} color={darkMode?"white":"black"} />
									</View>
								)

							},
							headerLeft: () => {
								return (

									<Image source={logo} style={{ marginLeft: 20 }} ></Image>

								)
							},
							headerStyle: { backgroundColor:darkMode? '#1F2123':"white", height: 80, },
							headerTitleStyle: { color:darkMode? "#1f2123":"white" },


						}} />
						<Tab.Screen name="Search" component={Search} options={{ headerShown: false, tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='magnify' color={focused ? "orange" : 'lightgray'} size={30} /> }} />
						<Tab.Screen name="List" component={List} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Icon name='folder' color={focused ? "orange" : 'lightgray'} size={25} /> }} />
						<Tab.Screen name="Profile" component={DrawerNavigation}  options={{  headerShown: false, tabBarIcon: ({ focused }) => <AntDesign name='appstore-o' color={focused ? "orange" : 'lightgray'} size={25}   /> }} />
					</Tab.Navigator>)
					:
					(<Tab.Navigator
						screenOptions={{
							tabBarShowLabel: false,
							tabBarActiveTintColor: "yellow",
							tabBarInactiveTintColor:darkMode? "lightgray":"gray",
							tabBarStyle: {
								backgroundColor:darkMode? "#1F2123":"white",
								borderBlockColor: "transparent",
								borderBottomColor: darkMode? "#1F2123":"white",

							},

						}}

					>
						<Tab.Screen name="Home1" component={TopTabNavigator} options={{

							tabBarIcon: ({ focused }) => <Icon name={'home'} color={focused ? "orange" : 'lightgray'} size={25} style={{ fontWeight: "100" }} />, 

							headerLeft: () => {
								return (
									<TouchableOpacity onPress={() => navigation.navigate('Register')}>
										<Image source={logo} style={{ marginLeft: 20 }} ></Image>
									</TouchableOpacity>
								)
							},
							headerStyle: { backgroundColor: darkMode? "#1f2123":"white", height: 80, borderBottomColor: "#1f2123" },
							headerTitleStyle: { color:darkMode? "#1f2123":"white" },

						}} />
						<Tab.Screen name="Search" component={Search} options={{ headerShown: false, tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='magnify' color={focused ? "orange" : 'lightgray'} size={30} /> }} />

					</Tab.Navigator>)
			}



		</>
	)
} 
