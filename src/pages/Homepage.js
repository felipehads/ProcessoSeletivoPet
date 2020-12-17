import React from 'react';
import {View,Text, StyleSheet, StatusBar} from 'react-native';
import NewButton from '../components/NewButton';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}> 
            <StatusBar hidden={true} />
            <View style={styles.button}>
                <Text style={styles.text}>Muito bem! Agora selecione a opção desejada para começarmos</Text>
            </View>
            <View style={styles.button}>
                <NewButton textoPrincipal="Calculadora de risco (Gail)" navigation = {() => navigation.navigate("Calculator")}/>
            </View>
            <View style={styles.button}>
                <NewButton textoPrincipal="Acesso à informação" navigation = {() => navigation.navigate("Information")}/> 
            </View>
            <View style={styles.button}>
                <NewButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    text:{
        textAlign:"center",
        fontSize:20,
        color: "#ee88b6",
        marginHorizontal: 50,
        marginBottom: 50,
    },
    button:{
        alignItems: "center"
    }
})

export default Homepage;