import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
const images = require("../pics/muvi.png");
const propic = require("../pics/profilepic.jpeg");
import Icon from "react-native-vector-icons/Feather"
import { getAuth, signOut } from 'firebase/auth';
import { AUTH } from '../../firebaseConfig';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkMode } from '../../utils/darkmodeContext';
import { useContext } from 'react';
import { Button } from 'react-native-paper';

function Card({ title, iconName }) {
    var { darkMode } = useContext(DarkMode)
    return (
        <>
            <View style={{ width: '90%', alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 10 }}>
                <Icon name={iconName} size={20} color={darkMode ? 'lightgray' : "gray"} />
                <Text style={{ color: darkMode ? 'lightgray' : "gray", fontSize: 16, fontWeight: '200' }}> {title}</Text>
            </View>


        </>
    )

}

export default function Profile({ navigation }) {
    var { darkMode, changeMode } = useContext(DarkMode)

    const auth = getAuth();
    console.log(auth);
    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log("signout")
            navigation.navigate('Login')

        } catch (error) {
            console.log(error)
        }

    }
    return (

        <View style={{ backgroundColor: darkMode ? "#25272a" : "white" }}>
            <View style={{ backgroundColor: darkMode ? "#1F2123" : "white", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ backgroundColor: darkMode ? "#1F2123" : "white", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ marginTop: 30, margin: 10 }} onPress={() => navigation.navigate('Home1')} name='arrow-left' size={25} color={"#FDD130"} />
                    <Text style={{ color: darkMode ? "white" : "black", fontSize: 25, marginTop: 40, marginBottom: 20, fontWeight: "600", marginLeft: 20 }} >My Profile</Text>
                </View>
                <View style={{ backgroundColor: darkMode ? "#1F2123" : "white", display: 'flex', flexDirection: 'row', alignItems: 'center',gap:10 }}>
                    <Icon style={{ alignSelf: "center", justifyContent: "center", marginTop: 20 }} name={darkMode ? "moon" : "sun"} onPress={() => changeMode()} size={25} color={darkMode ? 'lightgray' : "gray"} />
                    <Icon style={{ alignSelf: "center", justifyContent: "center", marginTop: 20 }} name="more-vertical" onPress={() => navigation.openDrawer()} size={25} color={darkMode ? 'lightgray' : "gray"} />

                </View>
            </View>

            <ScrollView style={{ paddingBottom: 100 }}>
                <View style={{ backgroundColor: darkMode ? "#25272a" : "white", gap: 5, padding: 30 }}>
                    <Image source={propic} style={{ alignSelf: "center", width: 80, height: 90 }} resizeMode='stretch' />
                    <Text style={{ alignSelf: "center", color: darkMode ? "white" : "black", fontSize: 18, fontWeight: "300" }}>Rex King</Text>
                    <Text style={{ alignSelf: "center", color: "gray" }}>rexking@gmail.com</Text>
                    <Text style={{ alignSelf: "center", color: "#FDD130" }}>Edit profile</Text>
                </View>
                <View style={{ backgroundColor: darkMode ? "#26282C" : "whitesmoke", display: "flex", height: "100%", alignContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20 }} >
                    <Card title={"Inbox"} iconName={"inbox"} />
                    <Card title={"Account setting"} iconName={"user"} />
                    <Card title={"Language"} iconName={"globe"} />
                    <Card title={"Help"} iconName={"info"} />
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', alignSelf: 'center', display: 'flex', gap: 5, justifyContent: 'center' }}>
                        <Text style={{ color: darkMode ? 'gray' : "black" }}>Terms & conditions</Text>
                        <Text style={{ color: darkMode ? 'gray' : "black" }}>Privacy & Policy</Text>
                    </View>
                    <View style={{ height: 60 }}></View>

                    <TouchableOpacity onPress={() => handleLogout()} style={{ width: "90%", backgroundColor: "transparent", paddingVertical: 8, borderRadius: 4, alignSelf: "center", borderWidth: 1, borderColor: 'gray' }}>
                        <Text style={{ fontSize: 18, alignSelf: "center", color: "red", fontWeight: 200 }}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>



        </View>

    )
}