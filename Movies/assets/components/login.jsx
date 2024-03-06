import { StyleSheet, Text, Image, Pressable, Dimensions,ActivityIndicator, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInput } from "react-native-paper"
import { useState ,useEffect} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
var logo = require("../pics/muvi.png")
var width=Dimensions.get("screen").width;
var height=Dimensions.get("screen").height;
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
    const [form, setForm] = useState({
        email: '',
        password: '',
       
      });

  
    
      const [errors, setErrors] = useState({});
    const validateForm =async () => {
        let isValid = true;
        let errors = {};
      var credentials= await AsyncStorage.getItem('credential')
        // Email validation
        if (!form.email) {
          isValid = false;
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          isValid = false;
          errors.email = 'Email is invalid';
        }
      
        // Password validation
        if (!form.password) {
          isValid = false;
          errors.password = 'Password is required';
        } else if (form.password.length < 8) {
          isValid = false;
          errors.password = 'Password must be at least 8 characters';
        }
      
        setErrors(errors);
        return isValid;
      };
      const handleSubmit =async () => {
        if (validateForm()) {
          // Form is valid
          console.log('Form data:', form);
          const {email,password}=form
          const toSave={
            email:email,
            password:password
          }


          navigation.navigate('Home')
          setForm({
            email: '',
            password: '',
          

          })

          // Proceed with form submission (e.g., API call)
        }
      };
    return (
        <View style={{ height: "100%", width: "100vh", backgroundColor: "#1F2123" }}>
            <View style={{ marginTop: 50, display: "flex", flexDirection: 'row', }}>
                <MaterialCommunityIcons onPress={()=>navigation.navigate("Register")} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
                <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>Login</Text>
            </View>
            <View style={{ width: "100%" }} >
                <Image source={logo} style={{ width: 100, height: 30, alignSelf: "center", margin: 40 }} />
                <Text style={{ color: "white", fontWeight: "300", width: "90%", fontSize: 18, textAlign: "center", alignSelf: "center" }}>Log in to enjoy many benefits and we won't let you go! </Text>
            </View>
            <View style={{ width: "90%", display: 'flex', marginVertical: 20, alignItems: "center", alignSelf: "center" }}>
                <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
                    label={"Email address"}
                    onChangeText={(text) => setForm({ ...form, email: text })}
                    value={form.email}
                    textColor='white'
                    theme={{ colors: { text: 'black', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"email-outline"} size={20} color={"#FDD130"} />}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                <TextInput style={{ width: "100%", backgroundColor: "transparent", color: "white" }}
                    label={"Password"}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                    value={form.password}
                    textColor='white'
                    theme={{ colors: { text: 'white', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
                    secureTextEntry
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            </View>

            <View style={{ width: "90%", alignSelf: "center" }}>
                <Pressable onPress={()=>{
                        handleSubmit()
                }}  style={{ width: "100%", backgroundColor: "#FDD130", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>Get started </Text>
                </Pressable>
                <Text style={{width:"100%" ,textAlign:"right",color:"#FDD130",fontWeight:"200",marginTop:5}}>Forgot password ? </Text>


                <Text style={{ textAlign: "center",alignSelf:"center",color:"white",marginVertical:12}}>Or Login  with  </Text>
               
                <Pressable style={{ width: "100%", backgroundColor: "black", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>

                    <Text style={{ fontSize: 16, fontWeight: "300", justifyContent: "center", color: "white", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='apple' color={"white"} size={22} style={{}} />
                        <View style={{ width: 10 }}></View>
                        Login with Apple</Text>
                </Pressable>
                <View style={{ height: 5 }}>

                </View>
                <Pressable style={{ width: "100%", backgroundColor: "white", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='google' color={"red"} size={22} style={{}} />
                        <View style={{ width: 10 }}></View>
                       Login with google</Text>
                </Pressable>
                <View style={{ width: "100%", height: 20 }}></View>

            </View>
            <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", bottom:0   }}>
                    <Text style={{ color: "white" }}>Don't have an account ? </Text>
                    <Pressable onPress={()=>navigation.navigate("Register")}  style={{ display: "flex", justifyContent: "center", }}><Text style={{ color: "#FDD130" }}>Sign in</Text></Pressable>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 20,
      },
})