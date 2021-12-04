import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { ItemCard, ItemList } from '../../components';

const Creator = () => {
  const [tabSelected, setTabSelected] = React.useState('sold'); // sold, created

  const data = [{
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
  }, {
    title: 'Pink pink pink',
    username: 'Rebel3801',
    detail: 'A really pink 3D artwork, because, pink!',
    price: '0.003 ETH',
    image: {
      uri: 'https://live.staticflickr.com/65535/51724184645_95bcf90102_o_d.jpg',
      width: 564,
      height: 705,
    },
  }]

  return (
    <SafeAreaView style={{backgroundColor: '#ECECEC'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ECECEC" />
      <ScrollView style={{height: '100%', backgroundColor: '#ECECEC'}}>
        <Text style={styles.header}>Creator Dashboard</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, {borderBottomColor: tabSelected == 'sold' ? '#FF822D' : '#000'}]} onPress={() => setTabSelected('sold')}>
            <Text style={[styles.tabText, {color: tabSelected == 'sold' ? '#FF822D' : '#000'}]}>Items sold</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, {borderBottomColor: tabSelected == 'created' ? '#FF822D' : '#000'}]} onPress={() => setTabSelected('created')}>
            <Text style={[styles.tabText, {color: tabSelected == 'created' ? '#FF822D' : '#000'}]}>Items created</Text>
          </TouchableOpacity>
        </View>
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
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  tabText: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 18,
    height: 34,
  },
})

export default Creator;
