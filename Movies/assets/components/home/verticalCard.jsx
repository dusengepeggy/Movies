import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView,ActivityIndicator, Pressable, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';


export default function Card3 ({img,rating}){
    return(
        <View >
            <ImageBackground source={{uri:img}} resizeMode='stretch' style={{width:"100%",height:350,marginBottom:20,alignSelf:"center"}} borderRadius={10}>
           <View style={{padding:5,backgroundColor:"#FDD130",borderRadius:5,alignSelf:"flex-end",marginHorizontal:6,marginVertical:2}}><Text  style={{ textAlign:"center"}} >{rating}</Text></View>
            </ImageBackground>
        </View>
    )
}
