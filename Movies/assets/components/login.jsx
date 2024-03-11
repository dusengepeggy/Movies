import { StyleSheet, Text, Image, Pressable, Dimensions,ActivityIndicator, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInput } from "react-native-paper"
import { useState ,useEffect, useContext} from 'react';
import FlashMessage,{showMessage} from "react-native-flash-message";
import { Colors } from 'react-native/Libraries/NewAppScreen';
var logo = require("../pics/muvi.png")
var width=Dimensions.get("screen").width;
var height=Dimensions.get("screen").height;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../../firebaseConfig';
import { DarkMode } from '../../utils/darkmodeContext';


export default function Login({navigation}) {
  const {changeMode ,darkMode}=useContext(DarkMode)
  const [form, setForm] = useState({
        email: '',
        password: '',
       
      });
    const [security,setSecurity]=useState(true)

  
    
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
          try {
           const response =  await signInWithEmailAndPassword(AUTH,email,password);
           
           setTimeout(()=>{ navigation.navigate('Home')},3000) 
            setForm({
              email: '',
              password: '',
            })
          } catch (error) {
            console.log(error);
            showMessage({
              message: "Error",
              description: "description",
              type:'danger',
            })
          }
            
          }

          // finally{
          //   setTimeout(()=>{ navigation.navigate('Home')},3000)
          // }


          // Proceed with form submission (e.g., API call)
        }
    return (
        <View style={{ height: "100%", width: "100vh", backgroundColor:darkMode? "#1F2123":"whitesmoke" }}>
          
           <FlashMessage position="top" />
            <View style={{ marginTop: 50, display: "flex", flexDirection: 'row', }}>
                <MaterialCommunityIcons onPress={()=>navigation.navigate("Register")} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
                <Text style={{ fontSize: 20, fontWeight: "600", color:darkMode? "white":"black" }}>Login</Text>
            </View>
            <ScrollView>
            <View style={{ width: "100%" }} >
                <Image source={logo} style={{ width: 100, height: 30, alignSelf: "center", margin: 40 }} />
                <Text style={{ color:darkMode? "white":"black", fontWeight: "300", width: "90%", fontSize: 18, textAlign: "center", alignSelf: "center" }}>Log in to enjoy many benefits and we won't let you go! </Text>
            </View>
            <View style={{ width: "90%", display: 'flex', marginVertical: 20, alignItems: "center", alignSelf: "center" }}>
                <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
                    label={"Email address"}
                    keyboardType='email-address'
                    onChangeText={(text) => setForm({ ...form, email: text })}
                    value={form.email}
                    textColor={darkMode? "white":"black"}
                    theme={{ colors: { text: 'black', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"email-outline"} size={20} color={"#FDD130"} />}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                <TextInput style={{ width: "100%", backgroundColor: "transparent", color: "white" }}
                    label={"Password"}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                    value={form.password}
                    textColor={ darkMode? "white":"black"}
                    theme={{ colors: { text: 'white', primary: 'orange', } }}
                    right={<TextInput.Icon onPress={()=>setSecurity(!security)} icon={  security? "eye-outline":"eye-off-outline"} size={20} color={"#FDD130"} />}
                    secureTextEntry={security}
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


                <Text style={{ textAlign: "center",alignSelf:"center",color:darkMode?"white":"black",marginVertical:12}}>Or Login  with  </Text>
               
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
                    <Text style={{ color: darkMode?"white":"black" }}>Don't have an account ? </Text>
                    <Pressable onPress={()=>navigation.navigate("Register")}  style={{ display: "flex", justifyContent: "center", }}><Text style={{ color: "#FDD130" }}>Sign in</Text></Pressable>

            </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 20,
      },
})