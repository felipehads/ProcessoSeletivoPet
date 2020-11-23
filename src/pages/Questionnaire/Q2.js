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
            2)- A paciente tem alguma
            mutação nos genes BRCA1
            e/ou BRCA2, ou diagnóstico
            de alguma síndrome
            genética que possa ser
            associada a elevado risco de
            câncer de mama?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => Alert.alert("Atenção!",
            "Outras ferramentas podem ser mais apropriadas para cálculo de risco em pacientes portadoras de mutações genéticas ou outras síndromes relacionadas com o aumento de risco para desenvolver câncer de mama.")}>
                <Text style={styles.buttonText}>
                    SIM
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q3', {
                value1: navigation.getParam('value1', 'default'),
                value2: '1'
            }
            )}>
                <Text style={styles.buttonText}>
                    NÃO
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.lastButtonContainer}>
            <TouchableOpacity style={styles.lastButton} onPress={() => navigation.navigate('Q3', {
                    value1: navigation.getParam('value1', ''),
                    value2: '2'
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
