import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import YoutubePlayer from "react-native-youtube-iframe";
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { DarkMode } from '../../utils/darkmodeContext';
import { useContext, useEffect, useState } from 'react';
// const images = require("../pics/muvi.png");
const welcome = require("../pics/getstarted.png");
import Card2 from './home/movieCard'
export default function Detail({ navigation }) {
    const {darkMode}=useContext(DarkMode)
    const [video, setvideo] = useState([])
    const result = useRoute();
    const [details, setDetails] = useState({});
    const [recomendation, setRecomendation] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)


    var { movieId } = result.params
    console.log(movieId);

    const handleSearch = () => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setDetails(response)
                console.log(details)
            })
            .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setvideo(res.results[res.results.length - 1].key)
                console.log(video)
            },

            )
            .catch(err => console.error(err));


        fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, options)
            .then(respons => respons.json())
            .then(respons => {
                setRecomendation(respons.results)
                console.log(recomendation)
            })
            .catch(err => console.error(err));
    };
    useEffect(() => {
        handleSearch()
    }, [])


    return (

        <View style={{ backgroundColor:darkMode? "#1F2123":"white", flex: 1 }}>



            <ScrollView >
                {
                    isPlaying ? (
                        <View style={{ paddingTop: 20 }}>
                            <MaterialCommunityIcons style={{ margin: 10 }} onPress={() => navigation.goBack()} name='arrow-left' size={25} color={"#FDD130"} />
                            <YoutubePlayer
                                height={200}
                                style={{ position: 'absolute  ' }}
                                videoId={video}

                            />
                        </View>
                    ) : (
                        <ImageBackground resizeMode='stretch' style={{ width: "100%", paddingTop: 20, height: 400 }} source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}>
                            <MaterialCommunityIcons onPress={() => navigation.goBack()} name='arrow-left' size={25} color={"#FDD130"} />
                        </ImageBackground>)
                }




                <View style={{ width: "90%", alignSelf: 'center', marginTop: 20 }}>
                    <View>
                        <Text style={{ color:darkMode? "white":"black", marginBottom: 15, fontWeight: "600", fontSize: 20 }}>{details.title}</Text>
                        <Text style={{ color:darkMode? "lightgray":"gray", fontWeight: 300, marginBottom: 10 }}>{details.overview}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                            <TouchableOpacity onPress={() => setIsPlaying(true)} style={{ width: "45%", backgroundColor: "#FDD130", padding: 15, borderRadius: 4, alignSelf: "center" }}><Text>Play</Text></TouchableOpacity>
                            <TouchableOpacity style={{ width: "45%", backgroundColor: "transparent", padding: 15, borderRadius: 4, alignSelf: "center", borderWidth: 1, borderColor: 'grey' }}><Text style={{ color: '#FDD130' }}>Add to list</Text></TouchableOpacity>
                        </View>
                    </View>

                    {/* <Video source={{ uri: `https://www.youtube.com/watch?v=${video.key}` }} controls={true} resizeMode="contain" style={{ width: 500, height: 600 }} /> */}
                    <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 ,alignItems:'center'}}>
                        <Text style={{ color: darkMode? "white":"black", fontSize: 20 }}>You may also like</Text>
                        <Text style={{ color: "gray" }}>View more</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ga>
                        {

                            recomendation.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() =>{
                                        movieId=item.id;
                                        handleSearch();
                                        setIsPlaying(false)
                                    }} >
                                        <Card2 key={index} id={item.id} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                    </TouchableOpacity>
                                )
                            })




                        }

                    </ScrollView>
                </View>
            </ScrollView>

        </View>






    )
}