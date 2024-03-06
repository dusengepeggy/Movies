import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView,ActivityIndicator, Pressable, View, SafeAreaView, ImageBackground } from 'react-native';


export default function Card2 ({img,rating}){
    return(

        <View>
            <ImageBackground source={{uri:img}} style={{width:210,height:270,marginRight:20}} resizeMode='stretch' borderRadius={10}>
           <View style={{padding:6,margin:4,backgroundColor:"#FDD130",borderRadius:5,alignSelf:"flex-end",marginHorizontal:6,marginVertical:2}}><Text  style={{ textAlign:"center"}} >{rating}</Text></View>
            </ImageBackground>
        </View> 
    )
}
