import { useState,useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image,Button, TouchableOpacity,ScrollView } from 'react-native';
import { DarkMode } from '../../../utils/darkmodeContext';
function Card ({name}){
    var {darkMode}=useContext(DarkMode)
    return(
        <View
            // title={`${name}`}
            style={{marginVertical:15,borderWidth:1,borderColor:"gray",height:30,marginRight:10,padding:7,borderRadius:5}}

           
        >
        <Text style={{color:darkMode?"lightgray":"gray", alignSelf:"center",fontWeight:"300"}}>{name}</Text>    
        
        </View>
    )
}

export default Menu2 =({navigation})=>{
    var [genreList,setGenreList]=useState([]);
    const handleList=()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response =>setGenreList(response.genres))
            .catch(err => console.error(err));

    }

    useEffect(()=>{
        handleList()
    },[])

   
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
            {
                genreList.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>navigation.navigate('More',item)}>
                        <Card
                            
                            name={item.name}
                        />
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
