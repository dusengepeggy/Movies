import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView,ActivityIndicator, Pressable, View, SafeAreaView, ImageBackground } from 'react-native';


function Card2 ({img,rating}){
    return(
        <View  >
            
            <Text style={{width:20,padding:2,backgroundColor:"#FDD130", textAlign:"center",borderRadius:5}}>{rating}</Text>
            <Image source={{uri:img}} style={{width:200,height:120}}></Image>
        </View>
    )
}
export default MovieLine = ({title}) => {
    var movies = [
        {
            id: 1,
           
            rating: 4,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
        {
            id: 2,
            
            rating: 5,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
        {
            id: 3,
           
            rating: 4,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
    ]

    return (
        <>
        <View style={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{ color:"white",fontSize:20   }}>{title}</Text>   
            <Text style={{color:"gray"}}>View more</Text>
        </View>
     
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {
                movies.map((item, index) => {
                    return (
                        <Card2 key={item.id} id={item.id} rating={item.rating} img={item.img} />
                    )
                })
            }
        </ScrollView>
        </>
    )

}