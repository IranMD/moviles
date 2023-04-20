import { StatusBar } from 'expo-status-bar';
import { Center } from 'native-base';

import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView } from "react-native";
import GradientText from './GradientText';
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"


export default function LoginScreen(){
   

  return(
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      
      <Text style={styles.titulo}>FoodApp</Text>
      <Text style={styles.subTitle}>Sing in to your account</Text>
      <TextInput 
      placeholder='iran@hotmail.com'
      style={styles.textInput}
      />
      <TextInput 
      placeholder='password'
      style={styles.textInput}
      />
      <StatusBar style='auto'></StatusBar>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: '#f1f1f1',
  },container:{
    flex:1,
    backgroundColor: '#1A1A24',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    fontSize:80, 
    color:'#34434D',
    fontWeight: 'bold'
  },
  subTitle:{
    fontSize: 20, 
    color:'gray',
  },
  textInput:{
  
    width: '80%', 
    padding: 10,
    paddingStart: 30, 
    marginTop: 20, 
    borderRadius: 30,
    height: 50, 
    backgroundColor: '#fff',

  }
})