import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView,ActivityIndicator, Pressable, View, SafeAreaView, ImageBackground } from 'react-native';


function Card2 ({img,rating}){
    return(

        <Pressable>
            <ImageBackground source={{uri:img}} style={{width:210,height:270,marginRight:20}} resizeMode='stretch' borderRadius={10}>
           <View style={{padding:6,margin:4,backgroundColor:"#FDD130",borderRadius:5,alignSelf:"flex-end",marginHorizontal:6,marginVertical:2}}><Text  style={{ textAlign:"center"}} >{rating}</Text></View>
            </ImageBackground>
        </Pressable>
    )
}
export default MovieLine = ({title,dbName}) => {
    const [Data,setData]=useState([]);
    const [Data1,setData1]=useState([])
    
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response =>setData(response.results))  
    .catch(err => console.error(err));

      
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setData1(response.results))
        .catch(err => console.error(err));

    
    {
        if(title==="New release"){
        
         var toDisplay=[];
         toDisplay=Data.slice(0,5); 
        
        
        }
        else if(title=="Cartoon"){
            var toDisplay=[];
            toDisplay=Data1.slice(0,5);
        }
        else{
            var toDisplay=dbName;
            
        }

        
    }

    return (
        <>
        <View style={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{ color:"white",fontSize:20   }}>{title}</Text>   
            <Text style={{color:"gray"}}>View more</Text>
        </View>
     
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ga>
            {
               
                toDisplay.map((item, index) => {
                    return (
                      
                        <Card2 key={index} id={item.id} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    )
                })
                

                    
               
            }
            
        </ScrollView>
        </>
    )

}