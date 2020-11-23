import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <Text style={styles.header}>
            Calculadora de Risco(Gail)
        </Text>
        <Text style={styles.bigText}>
            Dados Demográficos
        </Text>
        <Text style={styles.text}>
            4-Qual a sub-etnia/sub-raça da paciente?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Chinese'
            })}>
                <Text style={styles.buttonText}>
                    Chinesa
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Japanese'
            })}>
                <Text style={styles.buttonText}>
                    Japonesa
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Filipino'
            })}>
                <Text style={styles.buttonText}>
                    Filipina
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Hawaiian'
            })}>
                <Text style={styles.buttonText}>
                    Havaiana
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Islander'
            })}>
                <Text style={styles.buttonText}>
                    Outra ilha do Pacífico
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Asian'
            })}>
                <Text style={styles.buttonText}>
                    Outra etnia asiática
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        backgroundColor: "#ffffff"
    },
    header: {
        fontSize:34,
        fontWeight: "bold",
        textAlign: "center"
    },
    bigText:{
        fontSize:22,
        marginBottom: 40,
        textAlign: "center",
    },
    text:{
        fontSize:18,
        textAlign: "center",
        fontWeight: "600",
        marginHorizontal: 20
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50
    },
    buttonsEach:{
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        height:50,
        width: 300,
        padding: 8,
        justifyContent: "center",
        marginVertical: 2
    },
    buttonText:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"#ffffff"
    }
})