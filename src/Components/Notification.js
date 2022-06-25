import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification = ({item}) => {

    const history = useNavigation();

  return (
    <TouchableOpacity onPress={()=> history.navigate('view', {id: item.id})} style={style.container}>
        <View style={style.image_container}>
        <View style={style.category_container}>
        <Text style={style.category}>{item.category}</Text>
        </View>
        <View style={style.star_container}>
        <Text style={style.star}>{item.star}</Text>
        </View>
        <Image source={{uri: item.image}} style={style.image} />
        </View>
        <View style={style.detail_container}>
            <Text style={style.title}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
    container:{
        width: 320,
        marginHorizontal:5
    },
    image:{
        width: '100%',
        height: 200,
        borderRadius: 5
    },
    image_container:{
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 0.92,
        shadowRadius: 4.65,
        elevation: 7,
        width: '100%',
        height: 200
    },
    detail_container:{
        marginTop: 5,
        position: 'absolute',
        bottom:0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding:10,
        width: '100%'
    },
    title:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: 'white'
    },
    category:{
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    category_container:{
        position: 'absolute',
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        left: 5,
        top:5
    },
    star_container:{
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 99999,
        backgroundColor: '#EC712B',
        width: 30,
        height: 30,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    star:{
        fontSize: 12,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center'
    }
    
})

export default Notification