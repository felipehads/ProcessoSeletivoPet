import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const FooterHome = ({navigation}) => {
    return(
        <TouchableOpacity style={styles.buttonTop}  onPress = {navigation}>
                <Image source={require('../../assets/home.png')}/>
                <Text style={styles.text}>
                    Início
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    buttonTop:{
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        padding:5,
        alignItems: "center"
    },
    text:{
        fontWeight: "bold",
        fontSize: 30
    }
});

export default FooterHome;