import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import {TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{marginHorizontal:30}}>
                <Text style={styles.header}>
                    FERRAMENTA DE AVALIAÇÃO DE RISCO DE CÂNCER DE MAMA
                </Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Esta ferramenta de avaliação de risco de câncer de mama é baseada em um modelo estatístico conhecido como Modelo Gail, que foi traduzido, adaptado culturalmente e validado para o português brasileiro. A ferramenta usa as informações pessoais de uma mulher para estimar o risco de desenvolver câncer de mama invasivo em períodos específicos de tempo, incluindo: a idade atual, a idade de inicio de menstruação, a idade do primeiro nascimento vivo de uma criança, o número de parentes de primeiro grau (mãe, irmãs, filhas) com câncer de mama, o número de biópsias mamárias anteriores (sejam positivas ou negativas) e a presença de hiperplasia atípica em uma biópsia.{"\n"} O cálculo apresentado neste aplicativo é feito externamente, utilizando a calculadora "Breast Cancer Risk Assessment Tool" disponível em: {"\n"}https://bcrisktool.cancer.gov/calculator.html
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Q1')}>
                    <Text style={styles.textButton}>
                        Usar ferramenta
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
        fontWeight: "bold",
        marginTop: 40,
        textAlign: "center",
        color: "#ee88b6"
    },
    text:{
        fontSize: 16,
        textAlign:"center",
        margin: 20,
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 10,
        borderRadius: 5,
        padding: 20,
        marginBottom: 40
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})