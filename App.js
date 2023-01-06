import React from 'react';
import TouchScreen from './src/screens/TouchScreen';
import { StyleSheet, View } from 'react-native';


export default function AppBanking() {
  

 return (
    <View style={styles.container}>
      <TouchScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})

