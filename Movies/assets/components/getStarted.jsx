import { StatusBar } from 'expo-status-bar';
import {useState,useRef} from "react"
import { StyleSheet, Text, Image,Animated, Pressable,Dimensions, FlatList, useWindowDimensions, ActivityIndicator, View, ScrollView, ImageBackground, SafeAreaView, } from 'react-native';
const name = require("../pics/joker2.jpg")
var width =Dimensions.get("screen").width
var height=Dimensions.get("screen").height


export default function GetStarted({ navigation }) {
    const ScrollX=useRef(new Animated.Value(0)).current;
    var bground = [
        {
            id: 1,
            url: require("../pics/joker2.jpg")
        },
        {
            id: 2,
            url: require("../pics/joker2.jpg")

        },
        {
            id: 3,
            url: require("../pics/joker2.jpg")
        },

    ];
    return (

        <FlatList
            data={bground}
            renderItem={({item,id}) => {
                return (
                    <View style={{flex:1 }}>

                        <ImageBackground source={item.url}  style={{ width: width, height: height }}>
  
                            <View style={{backgroundColor:"rgba(0,0,0,0.8)", width: "100%",  height: "100%", display: "flex", justifyContent: "center" ,padding:20 }}>
                                <Text style={{ color: "white", fontSize: 25, fontWeight: "600", width: "60%" }} >Enjoy your favorite movie everytime</Text>
                                <Text style={{ color: "white", marginVertical: 20, fontSize: 16, letterSpacing: 1, fontWeight: "300", width: "90%" }}>Browse through our collection and discover hundreds if movies and series that you'll love</Text>

                            </View>
                            <Pressable onPress={() => navigation.navigate('Welcome')} style={{ width: "90%", position: "absolute", backgroundColor: "#FDD130", paddingVertical: 8, borderRadius: 4, bottom: 10, alignSelf: "center", zIndex: 100 }}>
                                <Text style={{ fontSize: 18, alignSelf: "center" }}>Get started</Text>
                            </Pressable>

                        </ImageBackground>

                    </View>

                )
            }}
            horizontal
            bounces={false}
            keyExtractor={item=>item.id}
            pagingEnabled
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:ScrollX}}}],{useNativeDriver:false})}
        />





      

    )
}