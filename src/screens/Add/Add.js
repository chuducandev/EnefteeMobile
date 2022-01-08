import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';

const TextField = ({
  width = "100%",
  height,
  placeholder = "",
  style,
  multiline
}) => {
  return (
    <View
      style={[{
        width: width,
        height: multiline ? 104 : 28,
        backgroundColor: "#FFFFFF",
        justifyContent: multiline ? "flex-start" : "center",
        paddingHorizontal: 11,
        borderRadius: 5,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#acacac",
      },
        style,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        style={{
          fontFamily: 'Work Sans Regular',
          fontSize: 11,
          marginBottom: -3,
          height: 35,
          borderRadius: 5,
        }}
      />
    </View>
  )
}

const Add = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#ECECEC' }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ECECEC" />
      <ScrollView style={{ height: '100%', backgroundColor: '#ECECEC' }}>
        <Text style={styles.header}>Create new item</Text>
        <View style={styles.content}>
          <Text style={styles.h1}>Choose picture</Text>
          <TouchableOpacity
            style={{
              width: 108,
              height: 22,
              backgroundColor: "#acacac",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: 'Work Sans Regular',
                fontSize: 10,
                color: '#fff',
              }}
            >Choose file</Text>
          </TouchableOpacity>
          <Text style={styles.h1}>Asset name</Text>
          <TextField placeholder="Item name" />
          <Text style={styles.h1}>Description</Text>
          <TextField placeholder="Type here..." multiline />
          <Text style={styles.h1}>Price</Text>
          <View style={{
            flexDirection: "row",
          }}>
            <TextField placeholder="Amount" width={105} />
            <Text
              style={{
                fontFamily: 'Work Sans Bold',
                fontSize: 18,
                color: '#000000',
                marginLeft: 13,
              }}
            >ETH</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 40,
              backgroundColor: "#FF822D",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 80,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontFamily: 'Work Sans Bold',
                fontSize: 18,
                color: '#fff',
              }}
            >CREATE</Text>
          </TouchableOpacity>
        </View>
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
  h1: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 18,
    color: '#000000',
    marginVertical: 7,
  },
  content: {
    paddingHorizontal: 23,
  }
})

export default Add;
