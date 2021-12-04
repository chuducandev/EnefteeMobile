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
import { SearchBar } from './components';

const Search = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ECECEC'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ECECEC" />
      <ScrollView style={{height: '100%', backgroundColor: '#ECECEC'}}>
        <Text style={styles.header}>Search</Text>
        <SearchBar />
        <Text style={styles.content}>This screen was only added so that the menu bar has 5 elements with the “Create” button lying in the middle for the sake of symmetry :) (Can the devs make the search function?)</Text>
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
  content: {
    fontFamily: 'Work Sans Regular',
    fontSize: 10,
    color: '#000000',
    marginHorizontal: 24,
    marginTop: 20,
  }
})

export default Search;
