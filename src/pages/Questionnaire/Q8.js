import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.header}>
            CALCULADORA DE RISCO(GAIL)
        </Text>
        <Text style={styles.bigText}>
            DADOS DEMOGRÁFICOS
        </Text>
        <Text style={styles.text}>
            8 - Quantas parentes de primeiro grau da paciente (mãe, irmãs, filhas) tiveram câncer de mama?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: navigation.getParam('value6', ''),
                value7: navigation.getParam('value7', ''),
                value8: navigation.getParam('value8', ''),
                value9: navigation.getParam('value9', ''),
                value10: navigation.getParam('value10', ''),
                value11: '0'
            })}>
                <Text style={styles.buttonText}>
                    Desconhecido
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: navigation.getParam('value6', ''),
                value7: navigation.getParam('value7', ''),
                value8: navigation.getParam('value8', ''),
                value9: navigation.getParam('value9', ''),
                value10: navigation.getParam('value10', ''),
                value11: '0'
            })}>
                <Text style={styles.buttonText}>
                    Nenhum
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: navigation.getParam('value6', ''),
                value7: navigation.getParam('value7', ''),
                value8: navigation.getParam('value8', ''),
                value9: navigation.getParam('value9', ''),
                value10: navigation.getParam('value10', ''),
                value11: '1'
            })}>
                <Text style={styles.buttonText}>
                    Um paciente
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: navigation.getParam('value5', ''),
                value6: navigation.getParam('value6', ''),
                value7: navigation.getParam('value7', ''),
                value8: navigation.getParam('value8', ''),
                value9: navigation.getParam('value9', ''),
                value10: navigation.getParam('value10', ''),
                value11: '2'
            })}>
                <Text style={styles.buttonText}>
                    Mais do que um paciente
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