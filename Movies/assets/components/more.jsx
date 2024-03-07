import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import YoutubePlayer from "react-native-youtube-iframe";
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { useEffect, useState } from 'react';

export default More = ({ route, navigation }) => {
    const [ofGenre, setOfGenre] = useState([])
    var [genreList, setGenreList] = useState([]);
    var genre = route.params;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
        }
    };



    useEffect(() => {
        const handleGenre = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=33c21faa847d1898c3509dfd1527638f&language=en-US&page=1`)
                .then(response => response.json())
                .then(response => {
                    setOfGenre(response.results)
                })
                .catch(err => console.error(err));
            fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, options)
                .then(res => res.json())
                .then(res => setGenreList(res.genres))
                .catch(err => console.error(err));


        }
        handleGenre()
    }, [])

    console.log(ofGenre)

    return (
        <View style={{ backgroundColor: "#1F2123", flex: 1 }}>
            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons style={{ margin: 10 }} onPress={() => navigation.goBack()} name='arrow-left' size={25} color={"#FDD130"} />
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>{genre.name}</Text>
            </View>

            <FlatList
                

                data={ofGenre}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { movieId: item.id })} style={{ marginVertical: 10, width: "90%", display: "flex", flexDirection: "row", alignSelf: "center" }}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} width={150} height={200} />
                            <View style={{ padding: 5, width: "50%" }}>
                                <Text style={{ color: "white", marginBottom: 10, fontWeight: "bold", fontSize: 18 }}>{item.title} </Text>
                                <Text style={{ color: "gray", fontSize: 14, marginBottom: 10 }}>{item.release_date}</Text>
                                <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    {


                                        genreList.map((genre, index) => {
                                            if (item.genre_ids.includes(genre.id)) {
                                                return (


                                                    <Text key={index} style={{ marginRight: 10, color: "white", fontSize: 14 }}>{genre.name}</Text>

                                                )

                                            }
                                        })


                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                }}
            >

            </FlatList>


        </View>
    )
}