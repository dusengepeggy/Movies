import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, ScrollView } from 'react-native';
import NavBar from './home/bottomBar';
import logo from '../pics/muvi.png';
import menu2 from './home/menu2';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Menu2 from './home/menu2';
import menu1 from './home/menu1';
import Menu1 from './home/menu1';
import MovieLine from "./home/movieCard"
import VerticalCard from './home/verticalCard';
export default function Home({ navigation }) {

    return (

        <View style={{ flex: 1, backgroundColor: "#26282C", alignItems: "center" }}>

            <View style={{ width: "100%", backgroundColor: "#1F2123", }}>
                <View style={{ display: "flex", paddingTop: 30, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    {/* <View style={{height:10,width:"100%"}}></View> */}
                    <Image source={logo} ></Image>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <MaterialCommunityIcons name='bell-outline' size={25} color={"white"} />
                        <View style={{ width: 20 }}></View>
                        <MaterialCommunityIcons name='bookmark-outline' size={25} color={"white"} />
                    </View>

                </View>
                <Menu1 />
            </View>

            <View style={{ backgroundColor: "#26282C", width: "90%" }}>
                <Menu2 />
                <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{paddingBottom:200, flexGrow: 1, justifyContent: 'space-between' ,backgroundColor: "#26282C"}} >
                    <MovieLine title={"New release"} />
                    <View style={{ height: 20 }}></View>
                    <MovieLine title={"Cartoon"} />
                    <View style={{ height: 20 }}></View>
                    <VerticalCard title={"New"} />
                </ScrollView>



            </View>
            <View style={{ backgroundColor:"#1F2123", width:"100%",paddingHorizontal:25,height:50,bottom:0,position:"absolute" ,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                
                <Icon name='home' color={'lightgray'} size={25} style={{fontWeight:"100"}} />
                <MaterialCommunityIcons name='magnify'  color={'lightgray'}  size={30}/>
                <Icon name='folder'  color={'lightgray'}  size={25} />
                <AntDesign name='appstore-o'  color={'lightgray'} size={25}/>

            </View>



        </View >


    )
} 