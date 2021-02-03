import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{marginHorizontal:30, marginTop: 30}}>
            <Text style={styles.header}>
                FERRAMENTA DE AVALIAÇÃO DE RISCO DE CÂNCER DE MAMA
            </Text> 
        </View>
        <Text style={styles.bigText}>
            DADOS DEMOGRÁFICOS
        </Text>
        <Text style={styles.text}>
            4 - Qual a etnia/raça da paciente?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: 'Other'
            })}>
                <Text style={styles.buttonText}>
                    Desconhecido
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: 'White'
            })}>
                <Text style={styles.buttonText}>
                    Branca
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'Black'
                })}>
                <Text style={styles.buttonText}>
                    Afro-americana
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q4sub1', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: 'Hispanic'
            })}>
                <Text style={styles.buttonText}>
                    Hispânica/Latina
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: 'Other'
            })}>
                <Text style={styles.buttonText}>
                    Nativo-americano ou nativo do Alasca
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q4sub2', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: 'Asian'
            })}>
                <Text style={styles.buttonText}>
                    Asiática
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
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
        fontWeight: "bold",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
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