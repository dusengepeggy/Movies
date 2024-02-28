import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView,ActivityIndicator, Pressable, View, SafeAreaView, ImageBackground } from 'react-native';


function Card2 ({img,rating}){
    return(
        <View  >
            <ImageBackground source={{uri:img}} resizeMode='stretch' style={{width:"100%",height:350,marginBottom:20,alignSelf:"center"}} borderRadius={10}>
           <View style={{padding:5,backgroundColor:"#FDD130",borderRadius:5,alignSelf:"flex-end",marginHorizontal:6,marginVertical:2}}><Text  style={{ textAlign:"center"}} >{rating}</Text></View>
            </ImageBackground>
        </View>
    )
}
export default VerticalCard = ({title}) => {

    var [Data2,setData2]=useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
        }
      };
    
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=33c21faa847d1898c3509dfd1527638f', options)
        .then(response => response.json())
        .then(response => setData2(response.results))
        .catch(err => console.error(err.message));

    return (
        <>
        <View style={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{ color:"white",fontSize:20   }}>{title} <Text style={{color:"#FDD130",fontSize:20 }}>On MUVI</Text></Text>   
            <Text style={{color:"gray"}}>View more</Text>
        </View>
     
        <ScrollView   showsVerticalScrollIndicator={false} >
            {
                Data2.slice(10,14).map((item, index) => {
                    return (
                        <Card2 key={index} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    )
                })
            }
            
        </ScrollView>
        </>
    )

}