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
                <NewButton textoPrincipal="Doença" navigation = {() => navigation.navigate("Doenca")}/>
                <NewButton textoPrincipal="Fatores de Risco" navigation = {() => navigation.navigate("Risco")}/>
                <NewButton textoPrincipal="Prevenção" navigation = {() => navigation.navigate("Prevencao")}/>
                <NewButton textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Birads")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: "center",
        marginBottom: 40,
        marginHorizontal: 20
    },
    headerText: {
        fontSize: 34,
        textAlign: "center",
        letterSpacing: -0.82,
        color: "#ee88b6",
        opacity: 1,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    buttonsContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})