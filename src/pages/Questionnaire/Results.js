import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default ({navigation}) => {
    var bodyFormData = new FormData();
    bodyFormData.append('cancerAndRadiationHistory', navigation.getParam('value1', ''))
    bodyFormData.append('geneticMakeup', navigation.getParam('value2', ''))
    bodyFormData.append('age', navigation.getParam('value3', ''))
    bodyFormData.append('race', navigation.getParam('value4', ''))
    bodyFormData.append('sub_race', navigation.getParam('value5', ''))
    bodyFormData.append('biopsy', navigation.getParam('value6', ''))
    bodyFormData.append('biopsy_result', navigation.getParam('value7', ''))
    bodyFormData.append('biopsy_ah', navigation.getParam('value8', ''))
    bodyFormData.append('age_period', navigation.getParam('value9', ''))
    bodyFormData.append('childbirth_age', navigation.getParam('value10', ''))
    bodyFormData.append('relatives', navigation.getParam('value11', ''))

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://bcrisktool.cancer.gov/calculate',
        bodyFormData,
        {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }    
    )
        .then(function(response){
            setData(JSON.parse(response.data.message))
        })
        
        .catch((error) => console.error(error))
    }, []);

    return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.header}>
            CALCULADORA DE RISCO(GAIL)
        </Text>
        <Text style={styles.bigText}>
            RESULTADO
        </Text>
        <View style={styles.textContainer}>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama nos próximos 5 anos
            </Text>
            <Text style={styles.text}>
                Risco do paciente: {data.risk}%
                {"\n"}Risco médio da população:{data.averageFiveRisk}%
            </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama ao longo da vida
            </Text>
            <Text style={styles.text}>
                Risco do paciente: {data.lifetime_patient_risk}%
                {"\n"}Risco médio da população:{data.lifetime_average_risk}%
            </Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResultsChart', {
                risk: data.risk,
                averageFiveRisk: data.averageFiveRisk,
                lifetime_patient_risk: data.lifetime_patient_risk,
                lifetime_average_risk: data.lifetime_average_risk
            })}>
                <Text style={styles.textButton}>
                    Gráficos
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
        fontSize:28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    text:{
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600",
        marginHorizontal: 10
    },
    Boldtext:{
        fontSize:24,
        marginHorizontal:10,
        textAlign: "justify",
        fontWeight: "600",
        fontWeight: "bold"
    },
    textContainer:{
        marginVertical: 10,
        marginHorizontal:10
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 40,
        borderRadius: 5,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})