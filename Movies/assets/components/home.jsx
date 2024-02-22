import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
import NavBar from './home/bottomBar';
import logo from '../pics/muvi.png';
import menu2 from './home/menu2';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Menu2 from './home/menu2';
import menu1 from './home/menu1';
import Menu1 from './home/menu1';
import MovieLine from "./home/movieCard"
export default function Home({ navigation }) {

    return (

        <View style={{ flex: 1, backgroundColor: "#26282C", alignItems: "center" }}>
            <View style={{width: "100%",backgroundColor: "#1F2123",}}>
                <View style={{ display: "flex",  paddingTop: 30, paddingHorizontal: 20,  flexDirection: "row", justifyContent: "space-between" }}>
                    {/* <View style={{height:10,width:"100%"}}></View> */}
                    <Image source={logo} ></Image>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <MaterialCommunityIcons name='bell-outline' size={25} color={"white"} />
                        <View style={{ width: 20 }}></View>
                        <MaterialCommunityIcons name='bookmark-outline' size={25} color={"white"} />
                    </View>

                </View>
                <Menu1/>
            </View>
            <View style={{ backgroundColor: "#26282C", width: "90%" }}>
                <Menu2 />
                <MovieLine title={"New release"}/>
            </View>
        </View>

    )
} 