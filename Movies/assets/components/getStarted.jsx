import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,Pressable, ActivityIndicator,View ,ScrollView,ImageBackground,SafeAreaView} from 'react-native';
const name=require("../pics/joker2.jpg")
export default function GetStarted (){
    return(
        
        <View  style={{width:"100%",height:"100%" }}>
           
            <ImageBackground source={name} resizeMode='cover' style={{width:"100%",height:"100%"}}>
                <View style={{width:"100%",height:"100%",backgroundColor:"black",opacity:0.7}}>
                    
                </View>
                <View style={{position:"absolute",width:"100%",margin:20,height:"100%",display:"flex",justifyContent:"center"} }>
                <Text style={{color:"white",fontSize:25,fontWeight:"600",width:"60%"}} >Enjoy your favorite movie everytime</Text>
                <Text style={{color:"white",marginVertical:20,fontSize:16,letterSpacing:1,fontWeight:"300",width:"90%"}}>Browse through our collection and discover hundreds if movies and series that you'll love</Text>

                </View>
                <Pressable style={{width:"90%",position:"absolute",backgroundColor:"#FDD130",paddingVertical:8,borderRadius:4, bottom:10,alignSelf:"center",zIndex:100}}>
                        <Text style={{fontSize:18,alignSelf:"center"}}>Get started</Text>
                </Pressable>

            </ImageBackground> 
    
        </View>
         
    )
}