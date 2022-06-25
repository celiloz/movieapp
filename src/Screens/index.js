import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native';
import Data from '../Data/Movies.json';
import notification from '../Data/Notification.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Film from '../Components/Film';
import Notification from '../Components/Notification';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const index = () => {

  useEffect(()=>{
    console.log(Data);
  }, []);

const renderItem = ({item}) => {
  return (
   <Film item={item} />
  )
};

const renderNotification = ({item}) => {
  return(
    <Notification item={item} />
  )
};

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={style.header}>
        <Text style={style.header_title}>MOVIES</Text>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.body}>
        <View style={{paddingHorizontal: 10, marginBottom:20}}>
          <FlatList
          data={notification}
          renderItem={renderNotification}
          horizontal={true}
          showsHorizontalScrollIndicator={false}  
            />
            </View>
        <View style={{paddingHorizontal: 20}}>
        <Text style={style.body_title}>FILMS</Text>
        </View>
        <View style={{paddingHorizontal:10, flex:1}}>
        <FlatList style={{flex:1}}
          numColumns={2}
          data={Data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}  
            />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center'
  },
  header_title:{
    fontSize: 20,
    fontWeight: '700'
  },
  body:{
    flex:1
  },
  body_title:{
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15
  }
});

export default index