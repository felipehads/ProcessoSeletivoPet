import React from 'react';
import {View, StyleSheet} from 'react-native';
import NewButton from '../components/NewButton';
import FooterHome from '../components/FooterHome';
import HeaderBack from '../components/HeaderBack';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="ACESSO A INFORMAÇÃO" navigation = {() => navigation.navigate("Homepage")}/>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="Doença" navigation = {() => navigation.navigate("Doenca")}/>
                <NewButton textoPrincipal="Fatores de risco" navigation = {() => navigation.navigate("Risco")}/>
                <NewButton textoPrincipal="Prevenção" navigation = {() => navigation.navigate("Prevencao")}/>
                <NewButton textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Birads")}/>
            </View>

            <View>
                <FooterHome navigation = {() => navigation.navigate("Homepage")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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