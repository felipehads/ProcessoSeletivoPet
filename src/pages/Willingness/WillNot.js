import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{marginHorizontal:30, marginTop: 30}}>
                <Text style={styles.header}>
                    ESCALA DE ADESÃO À MAMOGRAFIA (RCHBMS)
                </Text>
            </View>  
            <Text style={styles.bigText}>
                Resultado
            </Text>

            <Text style={styles.Boldtext}>
                “PROVÁVEL NÃO ADESÃO”
            </Text>
            <Text style={styles.text}>
                Caro profissional, a mulher avaliada PROVAVELMENTE NÃO REALIZARÁ a mamografia.
                Você poderá enfatizar a importância deste exame no rastreamento do câncer de mama, esclarecer as dúvidas e encorajá-la a realizar o exame.
                Lembrar de enfatizar as recomendações de acordo com a idade e periodicidade.
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Avaliation')}>
                    <Text style={styles.textButton}>
                        Voltar às ferramentas
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff",
    },
    headerContainer:{
        top: 36,
        marginBottom:40
    },
    header: {
        fontSize:34,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ee88b6"
    },
    bigText:{
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    text:{
        fontSize:20,
        textAlign: "center",
        marginHorizontal: 10,
        letterSpacing: -0.43,
        lineHeight: 41
    },
    Boldtext:{
        fontSize:24,
        marginHorizontal:10,
        marginBottom: 20,
        textAlign: "center",
    },
    textContainer:{
        marginVertical: 10,
        marginHorizontal:10
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 40,
        borderRadius: 5,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})