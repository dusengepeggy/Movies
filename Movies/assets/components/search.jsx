import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, Dimensions ,FlatList, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const images = require("../pics/muvi.png");
const search = require("../pics/searchpic.png");
//  

import menu1 from './home/menu1';
import Menu1 from './home/menu1';
import { useState } from 'react';
var width = Dimensions.get("screen").width
var height = Dimensions.get("screen").height
export default function Search({navigation}) {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    var [genreList,setGenreList]=useState([]);
    const [isSearchInitiated, setIsSearchInitiated] = useState(false);
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

    
    const handleSearch = (text)=>{
        if (text=='') {
            setSearchResults([]);
            setIsSearchInitiated(false);
            
        }
        else{

              
           fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(response =>setSearchResults(response.results))
                .catch(err => console.error(err));
            setIsSearchInitiated(true)
            console.log(genreList);
            
        }
     
     

    }

    return (
        <View style={{ backgroundColor: "#26282C", flex: 1, width: width, height: height }}>
            <View style={{ backgroundColor: "#1F2123" }}>
                <TextInput
                    style={{ width: "90%", alignSelf: "center", backgroundColor: "transparent", marginTop: 20 }}
                    label={"Enter movie name"}
                    underlineStyle
                    textColor='white'
                    theme={{ colors: { text: 'white', primary: 'orange', } }}
                    right={<TextInput.Icon icon={"magnify"} size={25} color={"#FDD130"} />}
            
                    onChangeText={handleSearch}
                   
                />
                <Menu1 navigation={navigation}/>
            </View>
            {!isSearchInitiated?(
                <View  style={{ backgroundColor: "#26282C", display: "flex", alignItems: "center", width: "100%", height: "65%", justifyContent: "center" }}>

                <Image source={search} style={{ alignSelf: "center", width: 150, height: 130, marginVertical: 50 }} />
                <Text style={{ color: "white", fontSize: 25, marginVertical: 10, fontWeight: "600", width: "60%", textAlign: "center" }}>Find your movie</Text>
                <Text style={{ fontWeight: "300", color: "lightgray", textAlign: "center", width: "70%" }}>Search movies,series,originals as you want</Text>

                </View>
            ):(
             <View style={{display:'flex',flexDirection:"row"}}>
                <FlatList style={{width:"100%",paddingBottom:300}} data={searchResults}
                  renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('Detail',{movieId:item.id})} style={{marginVertical:10,width:"90%",display:"flex",flexDirection:"row", alignSelf:"center" }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}} width={150} height={200}/>
                    <View style={{padding:5,width:"50%"}}>
                        <Text style={{color:"white",marginBottom:10 ,fontWeight:"bold",fontSize:18}}>{item.title} </Text>
                        <Text style={{color:"gray",fontSize:14,marginBottom:10 }}>{item.release_date}</Text>
                        <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                        {
                            

                                genreList.map((genre,index)=>{
                                    if (item.genre_ids.includes(genre.id)) {
                                        return(
                                            
                                           
                                            <Text key={index} style={{marginRight:10,color:"white",fontSize:14}}>{genre.name}</Text>
                                            
                                        )
                                        
                                    }
                                })

               
                        }
                        </View>
                    </View>   
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />

                
            </View>)}



        </View>
    )
}