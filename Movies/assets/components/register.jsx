import { StyleSheet, Text, Image, Pressable, Dimensions,ActivityIndicator, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInput } from "react-native-paper"
import { Colors } from 'react-native/Libraries/NewAppScreen';
var logo = require("../pics/muvi.png")
var width=Dimensions.get("screen");
var height=Dimensions.get("screen");
export default function Register({navigation}) {
    return (
        <View  style={{ height: "100%", width: "100%", backgroundColor: "#1F2123" }}>
            <View style={{ marginTop: 50, display: "flex", flexDirection: 'row', }}>
                <MaterialCommunityIcons onPress={()=>navigation.navigate("Welcome")} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
                <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>Register</Text>
            </View>
            <View style={{ width: "100%" }} >
                <Image source={logo} style={{ width: 100, height: 30, alignSelf: "center", margin: 20 }} />
                <Text style={{ color: "white", fontWeight: "200", width: "90%", fontSize: 15, textAlign: "center", alignSelf: "center" }}>Sign up to discover all our movies and enjoy our features</Text>
            </View>
            <View style={{ width: "90%", display: 'flex', marginVertical: 20, alignItems: "center", alignSelf: "center" }}>
                <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
                    label={"Email address"}
                    textColor='white'
                    theme={{ colors: { text: 'black', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"email-outline"} size={20} color={"#FDD130"} />}
                />
                <TextInput style={{ width: "100%", backgroundColor: "transparent", color: "white" }}
                    label={"Password"}
                    textColor='white'
                    theme={{ colors: { text: 'white', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
                    secureTextEntry
                />
                <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
                    label={"Confirm password"}
                    textColor='white'
                    theme={{ colors: { text: 'black', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
                    secureTextEntry
                />
            </View>

            <View style={{ width: "90%", alignSelf: "center" }}>
                <Pressable onPress={()=>navigation.navigate("Login")} style={{ width: "100%", backgroundColor: "#FDD130", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>Sign up</Text>
                </Pressable>
                
                <Text style={{ textAlign: "center",alignSelf:"center",fontSize:13,marginVertical:8}}>
                    <Text style={{ color: "white" }}>By signing up ,I accept the </Text>
                    <Text style={{ color: "#FDD130" }}>Terms of use</Text>
                    <Text style={{ color: "white" }}> and </Text>
                    <Text style={{ color: "#FDD130" }}>privacy policy</Text>
                </Text>

                <Text style={{ textAlign: "center",alignSelf:"center",color:"white",marginVertical:8}}>Or Sign up with  </Text>
               
                <Pressable style={{ width: "100%", backgroundColor: "black", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>

                    <Text style={{ fontSize: 16, fontWeight: "300", justifyContent: "center", color: "white", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='apple' color={"white"} size={22} style={{}} />
                        <View style={{ width: 10 }}></View>
                        Sign up with Apple</Text>
                </Pressable>
                <View style={{ height: 8 }}>

                </View>
                <Pressable style={{ width: "100%", backgroundColor: "white", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='google' color={"red"} size={22} style={{}} />
                        <View style={{ width: 10 }}></View>
                        Sign up with google</Text>
                </Pressable>
                <View style={{ width: "100%", height: 20 }}></View>
                <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                    <Text style={{ color: "white" }}>Already have an account ? </Text>
                    <Pressable onPress={()=>navigation.navigate("Login")} style={{ display: "flex", justifyContent: "center", }}><Text style={{ color: "#FDD130" }}>Log in</Text></Pressable>

                </View>
            </View>
        </View>

    )
}