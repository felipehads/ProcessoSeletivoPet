import React from 'react';
import {View, Image,StyleSheet} from 'react-native';
import NewButton from '../components/NewButton';
import HeaderStart from '../components/HeaderStart';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <HeaderStart textoPrincipal="Selecione um dos menus
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
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    headerContainer:{
        width: "100%",
        marginTop: 40
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