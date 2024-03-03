import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView } from 'react-native';
import  Video  from "react-native-video";
import { useState } from 'react';
const images = require("../pics/muvi.png");
const welcome = require("../pics/getstarted.png");

export default function Detail({ navigation }) {
    const [video, setvideo] = useState({   })
    const result = useRoute();
    console.log(result.params);
    const { movieId } = result.params
    console.log(movieId);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => console.log(setvideo(response.result[0])))
        .catch(err => console.error(err));
        console.log(video);

    return (

        <View style={{ backgroundColor: "#1F2123", flex: 1, paddingTop: 50 }}>

            <MaterialCommunityIcons onPress={() => navigation.navigate("Home")} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
            <Video source={{ uri: `https://www.youtube.com/watch?v=${video.key}` }} controls={true} resizeMode="contain" style={{ width: 500, height: 600 }} />

        </View>






    )
}