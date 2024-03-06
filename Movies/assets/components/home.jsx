import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ActivityIndicator, Pressable, View, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import logo from '../pics/muvi.png';
import menu2 from './home/menu2';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Menu2 from './home/menu2';
import Menu1 from './home/menu1';
import Card2 from "./home/movieCard"
import Card3 from './home/verticalCard';
import { useState ,useEffect} from 'react';
export default function Home({ navigation }) {
    const [Data, setData] = useState([]);
    const [Data1, setData1] = useState([])
    var [Data2, setData2] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyMWZhYTg0N2QxODk4YzM1MDlkZmQxNTI3NjM4ZiIsInN1YiI6IjY1ZDg3MzNhMTQ5NTY1MDE2MmY1OGQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yx7u3Y174Gr1eXSUvhFMNf3eWr60Ttg1fxmMAoxDHI'
        }
    };
    const handleFetch=()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(respons => respons.json())
        .then(respons => setData(respons.results))
        .catch(err => console.error(err));


    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => setData1(res.results))
        .catch(err => console.error(err));


    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setData2(response.results))
        .catch(err => console.error(err.message));


    }

    useEffect(()=>{
        handleFetch()
    },[])

    

    return (

        <View style={{ flex: 1, backgroundColor: "#26282C", alignItems: "center" }}>

            <View style={{ width: "100%", backgroundColor: "#1F2123", }}>
                <View style={{ display: "flex", paddingTop: 30, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    {/* <View style={{height:10,width:"100%"}}></View> */}
                    <Image source={logo} ></Image>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <MaterialCommunityIcons name='bell-outline' size={25} color={"white"} />
                        <View style={{ width: 20 }}></View>
                        <MaterialCommunityIcons name='bookmark-outline' size={25} color={"white"} />
                    </View>

                </View>
                <Menu1 navigation={navigation} />
            </View>

            <View style={{ backgroundColor: "#26282C", width: "90%" }}>
                {/* <Menu2 /> */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200, flexGrow: 1, justifyContent: 'space-between', backgroundColor: "#26282C" }} >
                    <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingVertical: 10,alignItems:'center' }}>
                        <Text style={{ color: "white", fontSize: 20 }}>New release</Text>
                        <Text style={{ color: "gray" }}>View more</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ga>
                        {

                            Data.slice(0,6).map((item, index) => {
                                return (

                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { movieId: item.id })} >
                                    <Card2  id={item.id} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                    </TouchableOpacity>
                                )
                            })




                        }

                    </ScrollView>
                    <View style={{ height: 20 }}></View>
                    <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 ,alignItems:'center'}}>
                        <Text style={{ color: "white", fontSize: 20 }}>Popular</Text>
                        <Text style={{ color: "gray" }}>View more</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ga>
                        {

                            Data1.slice(0,6).map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { movieId: item.id })} >
                                    <Card2  id={item.id} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                    </TouchableOpacity>
                                    )
                            })




                        }

                    </ScrollView>
                    <View style={{ height: 20 }}></View>
                    <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingVertical: 10,alignItems:'center' }}>
                        <Text style={{ color: "white", fontSize: 20 }}>New <Text style={{ color: "#FDD130", fontSize: 20 }}>On MUVI</Text></Text>
                        <Text style={{ color: "gray" }}>View more</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} >
                        {
                            Data2.slice(0,6).map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { movieId: item.id })} >
                                        <Card3  rating={item.vote_average} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </ScrollView>
                </ScrollView>



            </View>
            {/* <View style={{ backgroundColor:"#1F2123", width:"100%",paddingHorizontal:25,height:50,bottom:0,position:"absolute" ,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                
                <Icon name='home' color={'lightgray'} size={25} style={{fontWeight:"100"}} />
                <MaterialCommunityIcons name='magnify'  color={'lightgray'}  size={30}/>
                <Icon name='folder'  color={'lightgray'}  size={25} />
                <AntDesign name='appstore-o'  color={'lightgray'} size={25}/>

            </View> */}



        </View >


    )
} 