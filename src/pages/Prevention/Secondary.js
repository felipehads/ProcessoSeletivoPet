import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NewButton from '../../components/NewButton';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    PREVENÇÃO{"\n"}SECUNDÁRIA
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                Diz respeito ao diagnóstico precoce e rastreamento, onde são identificadas, por meio de exames, as mulheres que têm risco de desenvolver o câncer de mama, e são tratadas em fase inicial, visando a diminuição da morbimortalidade da doença e a melhora da qualidade de vida das pacientes.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="Rastreamento para população geral" navigation = {() => navigation.navigate("TrackingGeneralPopulation")}/>
                <NewButton textoPrincipal="Rastreamento para poupulação de alto risco" navigation = {() => navigation.navigate("TrackingHighRisk")}/>
                <NewButton textoPrincipal="Diagnóstico precoce" navigation = {() => navigation.navigate("Diagnostic")}/>
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
        marginTop: 40,
        marginBottom: 40,
    },
    headerText:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 34,
        lineHeight: 41,
        color: "#ee88b6"
    },
    textContainer:{
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
        marginTop: 30,
        marginBottom: 40
    }
})
