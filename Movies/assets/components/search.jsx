import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
const images = require ("../pics/muvi.png");
const search = require ("../pics/searchpic.png");
import menu1 from './home/menu1';
import Menu1 from './home/menu1';
var width =Dimensions.get("screen").width
var height=Dimensions.get("screen").height
export default function Search() {
    return (
        <View style={{backgroundColor:"#26282C",flex:1,width:width,height:height}}>
            <View style={{ backgroundColor: "#1F2123"}}>
                <TextInput
                     style={{ width: "90%",alignSelf:"center", backgroundColor: "transparent",marginTop:20}}
                     label={"Enter movie name"}
                     underlineStyle
                     textColor='white'
                     theme={{ colors: { text: 'white', primary: 'orange', } }}
                     right={<TextInput.Icon icon={"magnify"} size={25} color={"#FDD130"} />}
                />
                <Menu1/>
            </View>
            <View style={{ backgroundColor: "#26282C", display: "flex", alignItems: "center",width:"100%",height:"65%",justifyContent:"center" }}>
                <Image source={search} style={{ alignSelf: "center", width: 150, height: 130, marginVertical: 50 }} />
                <Text style={{ color: "white", fontSize: 25, marginVertical: 10, fontWeight: "600", width: "60%", textAlign: "center" }}>Find your movie</Text>
                <Text style={{ fontWeight: "300", color: "lightgray", textAlign: "center", width: "70%" }}>Search movies,series,originals as you want</Text>
  
            </View>

        </View>
    )
}