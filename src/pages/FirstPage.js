import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const FirstPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Bem-vindo(a) ao MAMAPrev.</Text>
            </View>
            <View>
                <Text style={styles.text}>Este é um aplicativo voltado aos profissionais da saúde. Por favor, selecione sua área de atuação.</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/medic.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/nurse.png')}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/nutritionist.png')}/>   
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/dentist.png')}/>  
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/social-worker.png')}/>     
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/psychologist.png')}/>  
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/pharmaceutical.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                    <Image style={styles.buttonsImg} source={require('../../assets/physical-educator.png')}/>               
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#ffffff"
    },
    header: {
        textAlign: "center",
        fontSize: 30,
    },
    text:{
        textAlign:"center",
        fontSize:16,
        color: "#808080",
        marginHorizontal: 50
    },
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonsImg:{
        width: 125,
        height: 125
    },
    buttonsEach:{
        marginHorizontal: 15
    }
})

export default FirstPage;
