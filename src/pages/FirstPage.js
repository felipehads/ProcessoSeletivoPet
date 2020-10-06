import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import HeaderStart from '../components/HeaderStart';

const FirstPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderStart textoPrincipal="Bem vindo, selecione sua
                área de atuação:" navigation = {() => navigation.navigate("")}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>   
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>  
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>     
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>  
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../../assets/favicon.png')}/>               
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    headerContainer:{
        width: "100%",
        flexDirection: "row",
    },
    buttonsContainer:{
        flexDirection: "row",
        marginVertical: 15
    },
    buttonsEach: {
        marginHorizontal: 50,
        borderWidth: 3,
        borderColor: "black",
        padding: 15,
        borderRadius: 50
    }
})

export default FirstPage;
