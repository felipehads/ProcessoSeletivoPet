import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import {TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View>
                <Text style={styles.header}>
                    FERRAMENTAS DE AVALIAÇÃO
                </Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Estas ferramentas de avaliação vão auxiliar os profissionais tanto em suas auto avaliações (mulheres), quanto para utilização com suas pacientes no momento da assistência.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={styles.textButton}>
                        Ferramenta de avaliação de risco de câncer de mama
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>
                    OBS.: Esta ferramenta ainda não está calibrada para a população brasileira, porém, Gail recomenda que seja utilizada a etnia “Hispânica/Latina” nascida fora dos EUA, que é a que mais se aproxima.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WillingnessTool')}>
                    <Text style={styles.textButton}>
                        Escala de adesão a mamografia (RCHBMS)
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    header: {
        fontSize:34,
        marginTop: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ee88b6"
    },
    text:{
        fontSize: 16,
        textAlign:"center",
        letterSpacing: -0.43,
        lineHeight: 41,
        margin: 20,
        fontWeight:"600"
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        borderRadius: 5,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})