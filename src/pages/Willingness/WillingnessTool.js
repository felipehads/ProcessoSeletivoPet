import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import {TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{marginHorizontal:30}}>
                <Text style={styles.header}>
                    ESCALA DE ADESÃO À MAMOGRAFIA (RCHBMS)
                </Text>
            </View>
            <View>
                <Text style={styles.text}>
                    A escala Revised Champion's Health Belief Model (RCHBMS) auxilia na identificação de mulheres com alto risco de não adesão às diretrizes nacionais de mamografia no Brasil.
                    Para cada uma das afirmativas que serão apresentadas a seguir, é necessário selecionar a resposta que melhor descreve a opinião da avaliada em relação ao seu comportamento frente ao rastreamento para o câncer de mama. 
                    Não há respostas corretas ou incorretas para as afirmativas.
                    Para cada resposta é empregado um valor em escala Likert, variando de Discordo completamente a Concordo completamente.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.textButton}>
                        Usar escala
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