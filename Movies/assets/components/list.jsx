import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
const images = require ("../pics/muvi.png");
const welcome = require ("../pics/mylist.png")
export default function List({navigation}) {
    return (
        <View>
            <View style={{ backgroundColor: "#1F2123" }}>

            <Text style={{ color: "white", fontSize: 25, marginTop: 40,marginBottom:20, fontWeight: "600", marginLeft:20 }}>My List</Text>
            </View>
            <View style={{ backgroundColor: "#26282C", display: "flex", alignItems: "center", height: "100%",alignContent:'center' }}>
                <Image source={welcome} style={{ alignSelf: "center", width: 100, height: 110, marginVertical:100,marginBottom: 50 }} />
                <Text style={{ color: "white", fontSize: 25, marginVertical: 15, fontWeight: "600", width: "80%", textAlign: "center" }}>create your own list</Text>
                <Text style={{ fontWeight: "300",fontSize:18, color: "lightgray", textAlign: "center", width: "60%" }}>Let's do something because I have a suprise for you</Text>
                <View style={{width:"100%",marginTop:70}}>
                <Pressable onPress={()=>navigation.navigate('Home1')} style={{ width: "90%", backgroundColor: "#FDD130", margin:10,paddingVertical: 8, borderRadius: 4,  alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", alignSelf: "center" }}>Explore Movie</Text>
                </Pressable>

                </View>
            </View>

        </View>
    )
}