import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
	StyleSheet,
  View,
  Image,
  Animated,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();


  useEffect(() => {
    Animated.timing(progress, {
      toValue: width * 0.5,
      duration: 1500,
    }).start(() => {
      navigation.replace('Main'), 500;
    });
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#ECECEC'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ECECEC" />
      <View style={styles.container}>
				<Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressBarFill, {
            width: progress,
          }]} />
        </View>
			</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		height: '100%', 
		backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
	},
  logo: {
    width: width * 0.5,
    height: width * 0.5 / 344 * 86,
    marginBottom: 35,
  },
  progressBar: {
    width: width * 0.5,
    height: 6,
    backgroundColor: '#c4c4c4',
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#FF822D',
  },
});

export default Welcome;
