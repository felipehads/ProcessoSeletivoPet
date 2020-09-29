import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NewButton = ({ textoPrincipal, navigation}) => {
    return(
        <TouchableOpacity style = {styles.buttonsEach} onPress = {navigation}>
                <Text style = {styles.textButton}>{textoPrincipal}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonsEach: {
        borderWidth: 2,
        borderColor: "pink",
        width: "70%",
        alignItems: "center",
        padding: 10,
        marginBottom: 10
    },
    textButton: {
        fontSize: 30,
        textAlign: "center"
    }
});

export default NewButton;