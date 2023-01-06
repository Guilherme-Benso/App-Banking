import React from 'react';
import TouchScreen from './src/screens/TouchScreen';
import { StyleSheet, View } from 'react-native';
import PinScreen from './src/screens/PinScreen';
import { NavigationContainer } from '@react-navigation/native';




export default  App = () =>{
  const AppStack = createStackNavigator();

 return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name="Pin" component={PinScreen}/>
        <AppStack.Screen name="Touch" component={TouchScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})

