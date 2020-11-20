import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NewButton from '../../components/NewButton';


export default ({navigation}) => {
    return(
    <View style={styles.container}>
       <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Prevenção
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="PRIMÁRIA" navigation = {() => navigation.navigate("Primary")}/>
                <NewButton textoPrincipal="SECUNDÁRIA" navigation = {() => navigation.navigate("Secondary")}/>
            </View>
    </View>

    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: "center"
    },
    headerText: {
        top: 193,
        fontSize: 34,
        width: 280,
        height: 46,
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