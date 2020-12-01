import React from 'react';
import {View,Text, StyleSheet,StatusBar} from 'react-native';
import NewButton from '../components/NewButton';


export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    ACESSO À INFORMAÇÃO
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="DOENÇA" navigation = {() => navigation.navigate("Doenca")}/>
                <NewButton textoPrincipal="FATORES DE RISCO" navigation = {() => navigation.navigate("Risco")}/>
                <NewButton textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Prevencao")}/>
                <NewButton textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Birads")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: "center"
    },
    headerText: {
        top: 94,
        fontSize: 34,
        width: 280,
        height: 87,
        textAlign: "center",
        letterSpacing: -0.82,
        color: "#ee88b6",
        opacity: 1
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})