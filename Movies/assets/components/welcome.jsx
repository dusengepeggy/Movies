import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
const images = require ("../pics/muvi.png");
const welcome = require ("../pics/getstarted.png");
import { DarkMode } from '../../utils/darkmodeContext';
import { useContext } from 'react';
export default function Welcome({navigation}) {
    const {changeMode ,darkMode}=useContext(DarkMode)
    return (
        <View>
            <View style={{ backgroundColor:darkMode? "#1F2123":"white" }}>

                <Image source={images} style={{ width: 120, height: 50, marginTop: 50, alignSelf: "center" }} />

            </View>
            <View style={{ backgroundColor: darkMode?"#26282C":"whitesmoke", display: "flex", alignItems: "center", height: "100%" }}>
                <Image source={welcome} style={{ alignSelf: "center", width: 180, height: 150, marginVertical: 50 }} />
                <Text style={{ color:darkMode? "white":"black", fontSize: 25, marginVertical: 15, fontWeight: "600", width: "60%", textAlign: "center" }}>Welcome to Muvi</Text>
                <Text style={{ fontWeight: "300", color: darkMode?"lightgray":"gray", textAlign: "center", width: "70%" }}>Free movie streaming ,all your needs everytime and everywhere</Text>
                <View style={{width:"100%",marginTop:100}}>
                <Pressable onPress={()=>navigation.navigate("Home")} style={{ width: "90%", backgroundColor: "#FDD130", margin:10,paddingVertical: 8, borderRadius: 4,  alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", alignSelf: "center" }}>watch Movie</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("Register")} style={{ width: "90%", paddingVertical: 8, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: 200, color:darkMode? "white":"black", alignSelf: "center" }}>Sign In</Text>
                </Pressable>
                </View>
            </View>

        </View>
    )
}