import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
<<<<<<< HEAD
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    SOBRE O APLICATIVO
=======
            <View>
                <Text style ={styles.header}>
                    SOBRE O{"\n"} APLICATIVO
>>>>>>> d6035882c2eb35dbb00fac713a67c7bf5ad5263c
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Apresentação O câncer de mama é uma doença que vem apresentando alta incidência em todo o mundo. Para o triênio 2020-2022 estima-se mais de 66 mil novos casos da doença no Brasil. Diante disso, o trabalho dos profissionais de saúde é fundamental para redução das taxas de incidência e mortalidade dessa doença. Assim, os profissionais precisam estar aptos para prestarem assistência de qualidade. Neste contexto o aplicativo MAMAprev foi desenvolvido com o intuito de auxiliar os profissionais da saúde que atuam no cuidado das mulheres, por meio de uma ferramenta informativa segura e baseada em evidências científicas, no fortalecimento das ações de prevenção do câncer de mama oportunamente, ou seja, aproveitando a presença da mulher no serviço de saúde independente do motivo, para informá-la sobre a doença e procedimentos de triagem, fatores de risco, rastreamento, favorecendo o diálogo a respeito da realização dos exames para detecção precoce e rastreamento do câncer de mama. Sobre Nós Este aplicativo é produto de uma dissertação de mestrado do Programa de Pós-Graduação em Saúde e Tecnologia (PPGST) da Universidade Federal do Maranhão (UFMA) campus avançado Imperatriz, tendo como pesquisadoras responsáveis a professora doutora Adriana Gomes Nogueira Ferreira e a mestranda Rafaela Cristina Araújo Gomes. A pesquisa faz parte de um projeto financiado pela Fundação de Amparo à Pesquisa e ao Desenvolvimento Científico e Tecnológico do Maranhão (FAPEMA), intitulado “PREVENÇÃO SECUNDÁRIA DO CÂNCER DE MAMA: USO DE APLICATIVO MÓVEL PARA CAPACITAÇÃO DE ENFERMEIROS”. Referências AMERICAN COLLEGE OF RADIOLOGY (ACR). Atlas BI-RADS do ACR: sistema de laudos e registro de dados de imagem da mama - 2 ed. São Paulo: Colégio Brasileiro de Radiologia, 2016. ISBN 978-85-786-8249-1. NATIONAL CANCER INSTITUTE. Breast Cancer Risk Assessment Tool. Disponível em : https://bcrisktool.cancer.gov/calculator.html INSTITUTO NACIONAL DO CÂNCER JOSÉ ALENCAR GOMES DA SILVA (INCA). Diretrizes para a detecção precoce do câncer de mama no Brasil – Rio de Janeiro, 2015. ISBN 978-85-7318-274-3. SOCIEDADE BRASILEIRA DE MASTOLOGIA (SBM). Câncer de Mama: Consenso da Sociedade Brasileira de Mastologia – Regional Piauí. 2017.
                </Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
<<<<<<< HEAD
    headerContainer:{
        top: 66,
        width:280,
        height: 87,
        left: 48
    },
    headerText:{
        textAlign: "right",
        fontSize: 34
    },
    textContainer:{
        top:90,
        alignItems: "center",
        marginBottom: 170
    },
    text:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41
=======
    header:{
        fontSize:34,
        marginTop: 50,
        marginRight: 20,
        fontWeight: "bold",
        textAlign: "right"
    },
    bigText:{
        fontSize:25,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 20,
    },
    text:{
        fontSize:18,
        marginHorizontal:30,
        textAlign: "justify",
        fontWeight: "600",
>>>>>>> d6035882c2eb35dbb00fac713a67c7bf5ad5263c
    }
})
