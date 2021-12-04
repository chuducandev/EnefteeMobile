import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { ItemCard, ItemList } from '../../components';

const Archive = () => {
  const data = [{
    title: 'Pink pink pink',
    username: 'Rebel3801',
    detail: 'A really pink 3D artwork, because, pink!',
    price: '0.003 ETH',
    image: {
      uri: 'https://live.staticflickr.com/65535/51724184645_95bcf90102_o_d.jpg',
      width: 564,
      height: 705,
    },
  }, {
    title: 'Pink pink pink',
    username: 'Rebel3801',
    detail: 'A really pink 3D artwork, because, pink!',
    price: '0.003 ETH',
    image: {
      uri: 'https://live.staticflickr.com/65535/51723959859_405a5fa6e5_o_d.jpg',
      width: 256,
      height: 256,
    },
  }, {
    title: 'Pink pink pink',
    username: 'Rebel3801',
    detail: 'A really pink 3D artwork, because, pink!',
    price: '0.003 ETH',
    image: {
      uri: 'https://live.staticflickr.com/65535/51722496412_ac2673cf3e_o_d.jpg',
      width: 400,
      height: 400,
    },
  }]

  return (
    <SafeAreaView style={{backgroundColor: '#ECECEC'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ECECEC" />
      <ScrollView style={{height: '100%', backgroundColor: '#ECECEC'}}>
        <Text style={styles.header}>Archive</Text>
        <ItemList data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 24,
    marginLeft: 23,
    marginVertical: 16,
    color: '#000000',
  }
})

export default Archive;
