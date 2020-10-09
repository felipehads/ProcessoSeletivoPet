import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const FooterHome = ({navigation}) => {
    return(
        <TouchableOpacity style={styles.buttonTop}  onPress = {navigation}>
                <Image source={require('../../assets/home.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    buttonTop:{
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        padding:5,
        width: '100%' ,
        alignItems: "center"
    }
});

export default FooterHome;