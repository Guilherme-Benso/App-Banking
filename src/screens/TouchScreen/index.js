import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';

export default  TouchScreen= ({ navigation }) => {
    return (
        <Container>
            <Text style={ styles.title }> MyBank</Text>


            <Touch onLongPress={()=>navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor=" #1e1e1e ">
                    <Circle bgColor=" #5196f405 ">
                        <Circle bgColor=" #5196f410 ">
                            <Circle bgColor=" #5196f430 ">
                                <TouchButton onLongPress={()=>navigation.navigate("Tabs")} delayPressIn={0}>
                                    <MaterialIcons name='fingerprint' size={60} color='#ffffff'/>
                                </TouchButton>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>

            </Touch>
            <Text style={ styles.message01 }> Touch ID sensor for access to{ "\n" } your MyBank account.</Text>
            <Text style={ styles.message02 }> Please very your identify{"\n"}using Touch ID</Text>

            <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
                <Fontisto name='locked' color="#964ff0" size={16}/>
                <Text style={styles.message03}>Enter Access PIN </Text>
            </PinAccess>

            <BarStatus/>
        </Container>


    );
}

const styles = StyleSheet.create({
    title: {
        color: '#964ff0',
        fontWeight: '600',
        fontSize: 30,
        marginTop: 25
    },
    message01:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'600',
  
    },
    message02:{
        color:'#9c9c9c',
        textAlign:'center',
        fontWeight:'600',
        marginTop:16,
        marginBottom:40
    },

    message03:{
        color: '#964ff0',
        fontWeight: '600',
        fontSize: 16,
        marginLeft:8
    }

});

const Container = styled.SafeAreaView`
flex: 1;
background-color: #1e1e1e;
align-items: center;
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.View`
    background-color: ${(props) => props.bgColor};
    padding:30px;
    border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
    background-color: #5196f4;
    padding: 8px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const BarStatus = styled.StatusBar`

`;