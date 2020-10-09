import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Secondary")}/>
            </View>
            <Text style={styles.pinkText}>
                Rastreamento
            </Text>
            <Text style={styles.text}>
                Refere-se a aplicação de
                testes ou exames em uma
                população sem sinais e sintomas
                sugestivos da doença, para
                identificar possíveis alterações
                sugestivas de câncer e,
                posteriormente, encaminhar as
                mulheres com resultados anormais
                para investigação diagnóstica.
                Cabe ressaltar, que as
                recomendações para os exames
                estão associadas a diminuição
                comprovada da morbimortalidade
                do câncer de mama.
            </Text>
            <Text style={styles.bigText}>
                Mamografia
            </Text>
            <Text style={styles.text}>
                É uma radiografia das
                mamas feita por um mamórafo
                (equipamento de raio-X), que
                identifica alterações suspeitas de
                câncer antes do surgimento dos
                sintomas.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev4.png')}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
    },
    pinkText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "pink",
        textAlign: "center",
        marginVertical: 10
    },  
    bigText:{
        fontSize:25,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "justify",
        marginVertical: 10
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600"
    },
    imgContainer:{
        flex:1,
        alignItems: "center",
        marginVertical: 15
    },
    img:{
        width: 200,
        height: 200
    }
})
