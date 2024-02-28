import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
const images = require ("../pics/muvi.png");
const propic = require ("../pics/profilepic.jpeg");

export default function Profile() {
    return (
        <View style={{backgroundColor:"#25272a"}}>
            <View style={{ backgroundColor: "#1F2123" }}>

            <Text style={{ color: "white", fontSize: 25, marginTop: 40,marginBottom:20, fontWeight: "600", marginLeft:20 }}>My Profile</Text>
            </View>
            <View style={{backgroundColor:"#25272a",gap:5, padding:30}}>
                <Image source={propic} style={{alignSelf:"center", width:80,height:90}} resizeMode='stretch'/>
                <Text style={{alignSelf:"center",color:"white",fontSize:18,fontWeight:"300"}}>Rex King</Text>
                <Text style={{alignSelf:"center",color:"gray"}}>rexking@gmail.com</Text>
                <Text style={{alignSelf:"center",color:"#FDD130"}}>Edit profile</Text>
            </View>
            <View style={{ backgroundColor: "#26282C", display: "flex", alignItems: "center", height: "100%",alignContent:'center' ,borderTopLeftRadius:20,borderTopRightRadius:20}} >

            </View>

        </View>
    )
}