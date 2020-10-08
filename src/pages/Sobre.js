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
                {"\t"} O câncer de mama é uma
                doença que vem apresentando alta
                incidência em todo o mundo. Para o
                triênio 2020-2022 estima-se mais de 66
                mil novos casos da doença no Brasil.
                {"\n\t"} Diante disso, o trabalho dos
                profissionais de saúde é fundamental
                para redução das taxas de incidência e
                mortalidade dessa doença. Assim, os
                profissionais precisam estar aptos para
                prestarem assistência de qualidade.
                {"\n\t"} Neste contexto o aplicativo
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
                {"\t"}Este aplicativo é produto de uma
                dissertação de mestrado do Programa
                de Pós-Graduação em Saúde e
                Tecnologia (PPGST) da Universidade
                Federal do Maranhão (UFMA) campus
                avançado Imperatriz.
                {"\n\t"}A pesquisa faz parte de um projeto financiado 
                pela Fundação de Amparo à Pesquisa e ao Desenvolvimento 
                Científico e Tecnológico do Maranhão (FAPEMA), intitulado 
                “PREVENÇÃO SECUNDÁRIA DO CÂNCER DE MAMA: USO DE APLICATIVO MÓVEL 
                PARA CAPACITAÇÃO DE ENFERMEIROS”.
            </Text>
            <Text style = {styles.bigText}>
                {"\n"}Referências
            </Text>
            <Text style={styles.text}>
            AMERICAN COLLEGE OF RADIOLOGY (ACR). 
            Atlas BI-RADS do ACR: sistema de laudos e 
            registro de dados de imagem da mama - 2 ed. 
            São Paulo: Colégio Brasileiro de Radiologia, 
            2016. ISBN 978-85-786-8249-1.
            {"\n\n"}GAIL, M. H.; COSTANTINO, J. P.; PEE, D.; 
            BONDY, M.; NEWMAN, L.; SELVAN, M. et al. 
            Projetando individualizada absoluto risco invasivo de 
            câncer de mama em mulheres afro-americanas. JNCI, v.99, 
            n. 23, p. 1782-1792, 2007. DOI: 10.1093 / jnci / djm223.
            {"\n\n"}INSTITUTO NACIONAL DO CÂNCER JOSÉ ALENCAR 
            GOMES DA SILVA (INCA). Diretrizes para a detecção 
            precoce do câncer de mama no Brasil – Rio de Janeiro, 
            2015. ISBN 978-85-7318-274-3.
            {"\n\n"}SOCIEDADE BRASILEIRA DE MASTOLOGIA (SBM). 
            Câncer de Mama: Consenso da Sociedade Brasileira de Mastologia – 
            Regional Piauí. 2017. 
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
        width: "100%",
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
