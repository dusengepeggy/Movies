import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import YoutubePlayer from "react-native-youtube-iframe";
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { useEffect, useState } from 'react';

export default More = ({ route, navigation }) => {
    const [ofGenre, setOfGenre] = useState([])
    var genre = route.params;
    

    
    const handleGenre=()=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
            }
        };
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
            setOfGenre(response.results)
            console.log(ofGenre)
        })
        .catch(err => console.error(err));

    }
    useEffect(()=>{
        handleGenre()
    },[])



    return (
        <View style={{ backgroundColor: "#1F2123", flex: 1 }}>
            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons style={{ margin: 10 }} onPress={() => navigation.navigate("Home")} name='arrow-left' size={25} color={"#FDD130"} />
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>{genre.name}</Text>
            </View>

            <FlatList
                data={ofGenre}
                renderItem={(item, index) => {
                    <View key={index} style={{width:'40%'}}>
                        <ImageBackground source={{ uri:`https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={{ width: 210, height: 270, marginRight: 20 }} resizeMode='stretch' borderRadius={10}>
                            <View style={{ padding: 6, margin: 4, backgroundColor: "#FDD130", borderRadius: 5, alignSelf: "flex-end", marginHorizontal: 6, marginVertical: 2 }}><Text style={{ textAlign: "center" }} >{item.vote_average}</Text></View>
                        </ImageBackground>
                        <Text>{item.title}</Text>
                    </View>

                }}
            >

            </FlatList>


        </View>
    )
}