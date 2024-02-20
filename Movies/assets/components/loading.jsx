import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, ActivityIndicator,View ,SafeAreaView} from 'react-native';
const images = require("../pics/muvi.png"); 
export default function Loading (){
     return(
        
        <View style={styles.container}>
           
            <Image source={images} style={{width:250,height:100}}/> 
    
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F2123',
    },
})