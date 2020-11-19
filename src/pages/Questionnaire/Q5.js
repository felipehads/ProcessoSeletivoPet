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
            Paciente e Histórico Familiar
        </Text>
        <Text style={styles.text}>
            5 - A paciente já fez biópsia de mama?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5sub1', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: '1'
            }) }>
                <Text style={styles.buttonText}>
                    SIM
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q6', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: '0'
            })}>
                <Text style={styles.buttonText}>
                    NÃO
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.lastButtonContainer}>
            <TouchableOpacity style={styles.lastButton} onPress={() => navigation.navigate('Q6', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: '99'
            })}>
                <Text style={styles.buttonText}>
                    DESCONHECIDO
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
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 50
    },
    buttonsEach:{
        borderRadius: 5,
        backgroundColor: "#ecb0cb",
        height: 70,
        width: 150,
        justifyContent: "center",
    },
    buttonText:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"#ffffff"
    },
    lastButtonContainer:{
        alignItems: "center",
        marginTop: 20,
    },
    lastButton:{
        borderRadius: 5,
        backgroundColor: "#ecb0cb",
        height: 70,
        width: 250,
        justifyContent: "center"
    }
})