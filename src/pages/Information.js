import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import NewButton from '../components/NewButton';


export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Acesso à informação
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="Doença" navigation = {() => navigation.navigate("Doenca")}/>
                <NewButton textoPrincipal="Fatores de risco" navigation = {() => navigation.navigate("Risco")}/>
                <NewButton textoPrincipal="Prevenção" navigation = {() => navigation.navigate("Prevencao")}/>
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
        color: "#000000",
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