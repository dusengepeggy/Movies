import { StyleSheet, SafeAreaView, Text, View, Image,Button, TouchableOpacity,ScrollView } from 'react-native';

function Card ({name}){
    return(
        <TouchableOpacity
            // title={`${name}`}
            style={{marginVertical:15,borderWidth:1,borderColor:"gray",marginRight:10,padding:7,borderRadius:5}}

           
        >
        <Text style={{color:"lightgray",alignSelf:"center",fontWeight:"300"}}>{name}</Text>    
        
        </TouchableOpacity>
    )
}

export default Menu2 =()=>{
    var MenuItems=[
        {
            id:1,
            name:"Popular today"
        },
        {
            id:2,
            name:"Marvel"
        },
        {
            id:3,
            name:"Fan choice"
        },
        {
            id:4,
            name:"New release"
        },
        {
            id:5,
            name:"Action"
        }
    ];
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
            {
                MenuItems.map((item,index)=>{
                    return(
                        <Card
                            key={index}
                            name={item.name}
                        />
                    )
                })
            }
        </ScrollView>
    )
}
