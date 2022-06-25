import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Data from '../Data/Movies.json';
import { faArrowLeft, faClock, faFolder, faPlay, faShare, faStreetView, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'react-native-star-rating';
import Modal from "react-native-modal";
import Video from 'react-native-video';

import Star from '../Assets/star.png';
import Half from '../Assets/half.png';
import Out from '../Assets/out.png';


const view = props => {
  const VideoRef = useRef(null);
  const id = props.route.params.id;
  const item = Data.filter(item=> item.id == id) [0];
  const [isModalVisible, setModalVisible] = useState(false);
  const [pasued, setPaused] = useState(false);
  const Cast = ({cast}) => {
    return(
      <View style={style.cast_container}>
        <Image style={style.cast_image} source={{uri: item.image}} />
        <Text style={style.cast_name}>{cast.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <View style={style.header}>
        <View style={style.controls}>
          <TouchableOpacity onPress={()=> props.navigation.goBack()} style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            <Text style={{marginLeft:5 ,color:"white", fontSize: 15, fontWeight: '700'}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShare} size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={style.overlay} />
        <Image source={{uri: item.image}} resizeMode="cover" style={style.header_image} />
        <View style={style.playButtonContainer}>
          <TouchableOpacity onPress={()=> {
            setModalVisible(!isModalVisible);
            setPaused(false);
          }} style={style.playButton}>
          <FontAwesomeIcon icon={faPlay} size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={style.informationImageContainer}>
        <Image style={style.information_image} source={{uri: item.image}} />
        </View>
        <View style={style.informationNameContainer}>
        <Text style={style.informationName}>{item.name}</Text>
        </View>
      </View>
      <View style={style.body}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <View style={{flex:1}} />
          <View style={style.top_right}>
          <View style={style.top_right_item}>
              <FontAwesomeIcon icon={faStreetView} size={20} />
              <Text>{item.director}</Text>
            </View>
            <View style={style.top_right_item}>
              <FontAwesomeIcon icon={faFolder} size={20} />
              <Text>{item.category}</Text>
            </View>
            <View style={style.top_right_item}>
              <FontAwesomeIcon icon={faClock} size={20} />
              <Text>{item.time}</Text>
            </View>
            <View style={style.top_right_item}>
            <StarRating
             emptyStar={Out}
             fullStar={Star}
             halfStar={Half}
            disabled={false}
            maxStars={5}
            starSize={20}
            fullStarColor={'#DB3069'}
            rating={item.star}
            selectedStar={(rating) => console.log(rating)}
            />
            </View>
          </View>
          </View>
          <View style={style.content}>
            <Text style={style.content_text}>{item.title}{item.title}{item.title}</Text>
            <View style={style.casts}>
              {item.casts.map((item) => <Cast cast={item} />)}
            </View>
          </View>
      </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={style.modalContainer}>
          <View style={style.modalBody}>
              <TouchableOpacity onPress={()=> {
                setModalVisible(false);
                 setPaused(true);}} style={style.modalCloseButton}>
                <FontAwesomeIcon icon={faTimesCircle} size={20} color={'white'} />
              </TouchableOpacity>
              <Video paused={pasued} ref={VideoRef} resizeMode='cover' source={{uri: item.video}} style={style.video} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    header:{

    },
    header_image:{
      width: '100%',
      height: 300,
    },
    overlay:{
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 9,
      width: '100%',
      height: '100%'
    },
    playButtonContainer:{
      position: 'absolute',
      zIndex: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    playButton:{
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: '#DB3069',
      justifyContent: 'center',
      alignItems: 'center'
    },
    controls:{
      position: 'absolute',
      zIndex: 11,
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 20,
      width: '100%',
      paddingHorizontal: 20
    },
    information_image:{
      width: 150,
      height: 200,
      borderRadius: 5
    },
    informationImageContainer:{
      position: 'absolute',
      bottom: -100,
      left: 20,
      zIndex: 11,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    informationNameContainer:{
      position: 'absolute',
      zIndex: 11,
      bottom: 20,
      right: 10,
      width: 200
    },
    informationName:{
      fontSize: 20,
      fontWeight: '700',
      color: 'white'
    },
    top_right:{
      flex: 1.5,
      marginHorizontal: 5,
      paddingVertical: 20,
    },
    content:{
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    top_right_item:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      left:20
    },
    top_right_item_text:{
      left: 10,
      textAlign: 'center'
    },
    content_text:{
      fontSize: 20,
      color: '#66666'
    },
    casts:{
      marginTop: 20,
      flexDirection: 'row', 
    },
    cast_container:{
      flex:1,
      alignItems: 'center'
    },
    cast_image:{
      width: 100,
      height:150,
      borderRadius: 5
    },
    cast_name:{
      fontSize: 20,
      textAlign: 'center',
      marginTop: 5,
      fontWeight: '300'

    },
    modalBody:{
      backgroundColor: 'white',
      height:300,
      width:'100%'
    },
    modalContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'  
    },
    modalCloseButton:{
      position: 'absolute',
      right:-10,
      top: -10,
      zIndex:99999,
      width:25,
      height:25,
      borderRadius: 100,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'   
    },
    video:{
      height:300,
      width:'100%'
    }
});

export default view