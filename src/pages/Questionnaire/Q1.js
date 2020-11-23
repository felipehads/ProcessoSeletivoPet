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
            Elegibilidade da
            Paciente
        </Text>
        <Text style={styles.text}>
            1)- A paciente tem alguma
            história médica de qualquer
            câncer de mama ou de
            carcinoma ductal in situ
            (CDIS) ou carcinoma lobular
            in situ (CLIS) ou recebeu
            anteriormente radioterapia
            na região do tórax para
            tratamento de linfoma de
            Hodgkin?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => Alert.alert("Atenção!",
            "Este modelo de cálculo de risco não calcula com precisão risco para pacientes com história pregressa de câncer de mama ou de CDIS ou CLIS.Procure seu médico.")}>
                <Text style={styles.buttonText}>
                    SIM
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q2', {
                value1 : '1'
            })}>
                <Text style={styles.buttonText}>
                    NÃO
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
        backgroundColor: "#ee88b6",
        height: 70,
        width: 150,
        justifyContent: "center"
    },
    buttonText:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"#ffffff"
    }
})
