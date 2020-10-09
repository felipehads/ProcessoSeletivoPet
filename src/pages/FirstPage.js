import React from 'react';
import {View, Image,StyleSheet,TouchableOpacity} from 'react-native';
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
