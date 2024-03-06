import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView,TouchableOpacity } from 'react-native';
const images = require("../pics/muvi.png");
const propic = require("../pics/profilepic.jpeg");
import Icon from "react-native-vector-icons/Feather"

function Card({ title, iconName }) {
    return (
        <View style={{width: '90%', alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 10 }}>
            <Icon name={iconName} size={20 } color={'lightgray'} />
            <Text  style={{ color: 'lightgray', fontSize: 16,fontWeight:'200' }}> {title}</Text>
        </View>)

}

export default function Profile() {
    return (
        <View style={{ backgroundColor: "#25272a" }}>
            <View style={{ backgroundColor: "#1F2123" }}>

                <Text style={{ color: "white", fontSize: 25, marginTop: 40, marginBottom: 20, fontWeight: "600", marginLeft: 20 }}>My Profile</Text>
            </View>
            <View style={{ backgroundColor: "#25272a", gap: 5, padding: 30 }}>
                <Image source={propic} style={{ alignSelf: "center", width: 80, height: 90 }} resizeMode='stretch' />
                <Text style={{ alignSelf: "center", color: "white", fontSize: 18, fontWeight: "300" }}>Rex King</Text>
                <Text style={{ alignSelf: "center", color: "gray" }}>rexking@gmail.com</Text>
                <Text style={{ alignSelf: "center", color: "#FDD130" }}>Edit profile</Text>
            </View>
            <View style={{ backgroundColor: "#26282C", display: "flex", height: "100%", alignContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >
                <Card title={"Inbox"} iconName={"inbox"} />
                <Card title={"Account setting"} iconName={"user"} />
                <Card title={"Language"} iconName={"globe"} />
                <Card title={"Help"} iconName={"info"} />
                <View style={{ height: 20 }}></View>
                <View style={{ width: '90%', alignSelf: 'center', display: 'flex', gap: 5, justifyContent: 'center' }}>
                    <Text style={{ color: 'gray' }}>Terms & conditions</Text>
                    <Text style={{ color: 'gray' }}>Privacy & Policy</Text>
                </View>
                <View style={{height:60}}></View>
            <TouchableOpacity  style={{ width: "90%", backgroundColor: "transparent", paddingVertical: 8, borderRadius: 4,  alignSelf: "center",borderWidth:1,borderColor:'gray'}}>
                <Text style={{ fontSize: 18, alignSelf: "center" ,color:"red",fontWeight:200}}>Log out</Text>
            </TouchableOpacity>
            </View>



        </View>
    )
}