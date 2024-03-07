import { StyleSheet, Text, Image, Pressable, Dimensions, ActivityIndicator, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInput } from "react-native-paper"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { AUTH } from '../../firebaseConfig'
var logo = require("../pics/muvi.png")
var width = Dimensions.get("screen");
var height = Dimensions.get("screen");
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let isValid = true;
    let errors = {};

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

    // Re-enter validation
    if (!form.password2) {
      isValid = false;
      errors.password2 = 're-enter password';
    } else if (form.password != form.password2) {
      isValid = false;
      errors.password2 = 'Passwords must match';
    }

    setErrors(errors);
    return isValid;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      // Form is valid
      console.log('Form data:', form);
      const { email, password, password2 } = form
      const toSave = {
        email: email,
        password: password
      }
      // await AsyncStorage.setItem('credential',JSON.stringify(toSave))
      try {
        const result = await createUserWithEmailAndPassword(AUTH, email, password)
        console.log(result);
        showMessage({
          message: 'Registered Successfully',
          type: 'success',
          duration: 3000,
        })
        setForm({
          email: '',
          password: '',
          password2: '',

        })
        setTimeout(() => { navigation.navigate('Login') }, 3000)
      } catch (error) {
        console.log(error.code);
        if (error.code=='auth/email-already-in-use'){
          var message='User already exists'
        }
        else{
          var message='Error signing up'
        }
        showMessage({
          message: message,
          type:'danger',
          duration: 3000,
        })

      }




    }
  };


  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#1F2123" }}>
      
        <FlashMessage position="top" />
        <View style={{ marginTop: 40, display: "flex", flexDirection: 'row', }}>
          <MaterialCommunityIcons onPress={() => navigation.navigate("Welcome")} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>Register</Text>
        </View>
        <ScrollView>
        <View style={{ width: "100%" }} >
          <Image source={logo} style={{ width: 100, height: 30, alignSelf: "center", margin: 20 }} />
          <Text style={{ color: "white", fontWeight: "200", width: "90%", fontSize: 15, textAlign: "center", alignSelf: "center" }}>Sign up to discover all our movies and enjoy our features</Text>
        </View>
        <View style={{ width: "90%", display: 'flex', marginVertical: 20, alignItems: "center", alignSelf: "center" }}>
          <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
            label={"Email address"}
            onChangeText={(text) => setForm({ ...form, email: text })}
            textColor='white'
            keyboardType='email-address'
            value={form.email}
            theme={{ colors: { text: 'black', primary: 'orange', } }}
            right={<TextInput.Icon icon={"email-outline"} size={20} color={"#FDD130"} />}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          <TextInput style={{ width: "100%", backgroundColor: "transparent", color: "white" }}
            label={"Password"}
            textColor='white'
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            theme={{ colors: { text: 'white', primary: 'orange', } }}
            right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
            secureTextEntry
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          <TextInput style={{ width: "100%", backgroundColor: "transparent" }}
            label={"Confirm password"}
            textColor='white'
            value={form.password2}
            onChangeText={(text) => setForm({ ...form, password2: text })}
            theme={{ colors: { text: 'black', primary: 'orange', } }}
            right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
            secureTextEntry
          />
          {errors.password2 && <Text style={styles.error}>{errors.password2}</Text>}
        </View>

        <View style={{ width: "90%", alignSelf: "center" }}>
          <Pressable onPress={() => {
            handleSubmit()
          }} style={{ width: "100%", backgroundColor: "#FDD130", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>Sign up</Text>
          </Pressable>

          <Text style={{ textAlign: "center", alignSelf: "center", fontSize: 13, marginVertical: 8 }}>
            <Text style={{ color: "white" }}>By signing up ,I accept the </Text>
            <Text style={{ color: "#FDD130" }}>Terms of use</Text>
            <Text style={{ color: "white" }}> and </Text>
            <Text style={{ color: "#FDD130" }}>privacy policy</Text>
          </Text>

          <Text style={{ textAlign: "center", alignSelf: "center", color: "white", marginVertical: 8 }}>Or Sign up with  </Text>

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
            <Pressable onPress={() => navigation.navigate("Login")} style={{ display: "flex", justifyContent: "center", }}><Text style={{ color: "#FDD130" }}>Log in</Text></Pressable>

          </View>
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