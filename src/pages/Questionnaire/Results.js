import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

function teste(x){
    
    const promise = axios.post('https://bcrisktool.cancer.gov/calculate', 
        x,
        {
        headers: {
            'Content-Type':'multipart/form-data',
            }
        }
    )
    const dataPromise = promise.then((response) => response.data)
    return dataPromise
}

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


    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q8")}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.bigText}>
                RESULTADO
            </Text>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama nos próximos 5 anos
            </Text>
            <Text style={styles.text}>
                Risco do paciente: %
                {"\n"}Risco médio da população:X%
            </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama ao longo da vida
            </Text>
            <Text style={styles.text}>
                Risco do paciente: X%{"\n"}Risco médio da população:X%
            </Text>
        </View>
        <View>
            <FooterHome navigation = {() => navigation.navigate("Homepage")}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:20,
        marginBottom: 25
    },
    bigText:{
        fontSize:28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        marginVertical: 10,
    },
    text:{
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600"
    },
    Boldtext:{
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600",
        fontWeight: "bold"
    },
    textContainer:{
        marginVertical: 10
    }

})