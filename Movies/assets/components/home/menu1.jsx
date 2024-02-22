import { StyleSheet, SafeAreaView, Text, View, Image,Button, TouchableOpacity,ScrollView } from 'react-native';

function Card ({name}){
    return(
        <TouchableOpacity
            // title={`${name}`}
            style={{marginHorizontal:15,marginVertical:10,padding:8}}
            
        >
        <Text style={{color:"lightgray",alignSelf:"center"}}>{name}</Text>    
        
        </TouchableOpacity>
    )
}

export default Menu1 =()=>{
    var MenuItems=[
        {
            id:1,
            name:"Featured"
        },
        {
            id:2,
            name:"Series"
        },
        {
            id:3,
            name:"Film"
        },
        {
            id:4,
            name:"Tv reality"
        },
        {
            id:5,
            name:"Shows"
        },
        {
            id:6,
            name:"Music"
        }
    ];
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}} >
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
