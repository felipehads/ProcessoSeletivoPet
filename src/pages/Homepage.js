import React from 'react';
import {View, Image,StyleSheet} from 'react-native';
import NewButton from '../components/NewButton';
import HeaderStart from '../components/HeaderStart';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <HeaderStart textoPrincipal="Olá, profissional da saúde! Selecione um dos menus
                    para começarmos" navigation = {() => navigation.navigate("")}/>
                </View>
            </View> 
            <View style={styles.buttonsContainer}>
                <View>
                    <NewButton textoPrincipal="Calculadora de risco(Gail)" navigation = {() => navigation.navigate("Q1")}/>
                </View>
                <View>
                    <NewButton textoPrincipal="Acesso a informação" navigation = {() => navigation.navigate("Information")}/> 
                </View>
                <View>
                    <Image></Image>
                    <NewButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/>
                </View> 
             </View>
        
        </View>
    )
}

        
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 25,
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