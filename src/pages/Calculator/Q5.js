import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.header}>
            CALCULADORA DE RISCO (GAIL)
        </Text>
        <Text style={styles.bigText}>
            PACIENTE E HISTÓRICO FAMILIAR
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
                    Sim
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
                    Não
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
                    Desconhecido
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
        textAlign: "center",
        color: "#ee88b6"
    },
    bigText:{
        fontSize:22,
        marginBottom: 40,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
        marginHorizontal: 20
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 50
    },
    buttonsEach:{
        borderRadius: 5,
        backgroundColor: "#ee88b6",
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
        backgroundColor: "#ee88b6",
        height: 70,
        width: 250,
        justifyContent: "center"
    }
})