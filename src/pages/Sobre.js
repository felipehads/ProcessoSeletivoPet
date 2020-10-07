import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import HeaderBack from '../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderBack textoPrincipal="SOBRE O APLICATIVO" navigation = {() => navigation.navigate("Homepage")}/>
            </View>
            <View>
                <Text style={styles.bigText}>
                    Apresentação
                </Text>
            </View>
            <Text style={styles.text}>
                O câncer de mama é uma
                doença que vem apresentando alta
                incidência em todo o mundo. Para o
                triênio 2020-2022 estima-se mais de 66
                mil novos casos da doença no Brasil.
                Diante disso, o trabalho dos
                profissionais de saúde é fundamental
                para redução das taxas de incidência e
                mortalidade dessa doença. Assim, os
                profissionais precisam estar aptos para
                prestarem assistência de qualidade.
                Neste contexto o aplicativo
                MAMAprev foi desenvolvido com o
                intuito de auxiliar os profissionais da
                saúde que atuam no cuidado das
                mulheres, por meio de uma ferramenta
                informativa segura e baseada em
                evidências científicas, no fortalecimento
                das ações de prevenção do câncer de
                mama oportunamente, ou seja,
                aproveitando a presença da mulher no
                serviço de saúde independente do
                motivo, para informá-la sobre a doença
                e procedimentos de triagem, fatores de
                risco, rastreamento, favorecendo o
                diálogo a respeito da realização dos
                exames para detecção precoce e rastreamento do câncer de mama.
            </Text>
            <Text style = {styles.bigText}>
                {"\n"}Sobre Nós
            </Text>
            <Text style={styles.text}>
                Este aplicativo é produto de uma
                dissertação de mestrado do Programa
                de Pós-Graduação em Saúde e
                Tecnologia (PPGST) da Universidade
                Federal do Maranhão (UFMA) campus
                avançado Imperatriz.
            </Text>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
    },
    headerContainer:{
        backgroundColor: "#ffffff",
    },
    bigText:{
        fontSize:25,
        fontWeight: "bold",
        marginBottom: 10
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600"
    }
})
