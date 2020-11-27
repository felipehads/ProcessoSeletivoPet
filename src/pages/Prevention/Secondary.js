import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NewButton from '../../components/NewButton';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Prevenção{"\n"}Secundária
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                Diz respeito ao diagnóstico precoce e rastreamento, onde são identificadas, por meio de exames, as mulheres que têm risco de desenvolver o câncer de mama, e são tratadas em fase inicial, visando a diminuição da morbimortalidade da doença e a melhora da qualidade de vida das pacientes.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="RASTREAMENTO PARA POPULAÇÃO GERAL" navigation = {() => navigation.navigate("TrackingGeneralPopulation")}/>
                <NewButton textoPrincipal="RASTREAMENTO PARA POPULAÇÃO DE ALTO RISCO" navigation = {() => navigation.navigate("TrackingHighRisk")}/>
                <NewButton textoPrincipal="DIAGNÓSTICO PRECOCE" navigation = {() => navigation.navigate("Diagnostic")}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    headerContainer:{
        top: 77,
        marginBottom: 40,
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        lineHeight: 41
    },
    textContainer:{
        marginTop:50,
        alignItems: "center"
    },
    text:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
        marginBottom: 40
    }
})
