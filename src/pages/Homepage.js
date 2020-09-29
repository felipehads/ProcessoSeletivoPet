import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import NewButton from '../components/NewButton';
import HeaderStart from '../components/HeaderStart';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <HeaderStart textoPrincipal="Olá, profissional da saúde!
                    Selecione um dos menus
                    para começarmos" navigation = {() => navigation.navigate("")}/>
                </View>
            </View> 
            <View style={styles.buttonsContainer}>
                 <NewButton textoPrincipal="Calculadora de risco(Gail)" navigation = {() => navigation.navigate("Q1")}/>
                <NewButton textoPrincipal="Acesso a informação" navigation = {() => navigation.navigate("Information")}/> 
                <NewButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/> 
             </View>
        
        </View>
    )
}

        
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginHorizontal:10,
        marginBottom:25
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 25,
        marginHorizontal:5
    },
    text: {
        textAlign: "right",
        fontSize: 25,
        color: "black"
    },
    BigText:{
        fontWeight: "bold"
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Homepage;