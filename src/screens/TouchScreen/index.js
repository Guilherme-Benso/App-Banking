import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

export default function TouchScreen() {
 return (
    <View style={styles.container}>
        <Text style={styles.teste}> MyBank</Text>

        <View>
            <Touch>

                <Circle bgColor='#5196f40'>

                </Circle>

            </Touch>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    marginTop:40,
    backgroundColor:'lelele',
    alignItems:'center',
    
    },
    teste:{
        color:'#000',
        fontSize:30,
        color:'#964ff0',
        fontWeight:'600',

    }
})

const Touch = styled.TouchableOpacity``;

const Circle =  styled.View`
    background-color: ${(props) => props.bgColor};
    padding:32px;
    border-radius:999px;
`;