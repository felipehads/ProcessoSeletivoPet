import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    SOBRE{"\n"}O APLICATIVO
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Apresentação</Text>
                <Text style={styles.text}>
                    O câncer de mama é uma doença que vem apresentando alta incidência em todo o mundo. Para o triênio 2020-2022 estima-se mais de 66 mil novos casos da doença no Brasil.
                    {"\n\n"}Diante disso, o trabalho dos profissionais de saúde é fundamental para redução das taxas de incidência e mortalidade dessa doença. Assim, os profissionais precisam estar aptos para prestarem assistência de qualidade.
                    {"\n\n"}Neste contexto o aplicativo MAMAprev foi desenvolvido com o intuito de auxiliar os profissionais da saúde que atuam no cuidado das mulheres, por meio de uma ferramenta informativa segura e baseada em evidências científicas, no fortalecimento das ações de prevenção do câncer de mama oportunamente, ou seja, aproveitando a presença da mulher no serviço de saúde independente do motivo, para informá-la sobre a doença e procedimentos de triagem, fatores de risco, rastreamento, favorecendo o diálogo a respeito da realização dos exames para detecção precoce e rastreamento do câncer de mama.
                </Text>
                <Text style={styles.titleText}>Sobre Nós </Text>
                <Text style={styles.text}>    
                    Este aplicativo é produto de uma dissertação de mestrado do Programa de Pós-Graduação em Saúde e Tecnologia (PPGST) da Universidade Federal do Maranhão (UFMA) campus avançado Imperatriz, tendo como pesquisadoras responsáveis a professora doutora Adriana Gomes Nogueira Ferreira e a mestranda Rafaela Cristina Araújo Gomes. 
                    {"\n\n"}A pesquisa faz parte de um projeto financiado pela Fundação de Amparo à Pesquisa e ao Desenvolvimento Científico e Tecnológico do Maranhão (FAPEMA), intitulado “PREVENÇÃO SECUNDÁRIA DO CÂNCER DE MAMA: USO DE APLICATIVO MÓVEL PARA CAPACITAÇÃO PROFISSIONAL”.
                </Text> 
                <Text style={styles.titleText}>Referências</Text>
                <Text style={styles.text}>
                    AMERICAN COLLEGE OF RADIOLOGY (ACR). Atlas BI-RADS do ACR: sistema de laudos e registro de dados de imagem da mama - 2 ed. São Paulo: Colégio Brasileiro de Radiologia, 2016. ISBN 978-85-786-8249-1. 
                    {"\n\n"}INSTITUTO NACIONAL DO CÂNCER JOSÉ ALENCAR GOMES DA SILVA (INCA). Diretrizes para a detecção precoce do câncer de mama no Brasil – Rio de Janeiro, 2015. ISBN 978-85-7318-274-3.
                    {"\n\n"}MOREIRA, C. B.; DAHINTEN, V. S.; HOWARD, A. F.; FERNANDES, A. F. C. The Revised Champion’s Health Belief Model Scale: Predictive Validity Among Brazilian Women. SAGE Open Nursing, v. 6, p. 1-11, 2020. DOI: 10.1177/2377960820940551
                    {"\n\n"}NATIONAL CANCER INSTITUTE. Breast Cancer Risk Assessment Tool. Disponível em : https://bcrisktool.cancer.gov/calculator.html
                    {"\n\n"}PAIVA, J. L. F. Risco de Câncer de Mama na população brasileira. 2019. 56f. Dissertação (Mestrado Profissional em Ciências Aplicadas à Saúde) – Universidade do Vale do Sapucaí, Pouso Alegre, 2019. Disponível em: http://www.univas.edu.br/mpcas/docs/dissertacoes/89.pdf
                    {"\n\n"}SOCIEDADE BRASILEIRA DE MASTOLOGIA (SBM). Câncer de Mama: Consenso da Sociedade Brasileira de Mastologia – Regional Piauí. 2017.
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
    headerContainer:{
        top: 36,
        marginBottom:20,
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        color: "#ee88b6"
    },
    textContainer:{
        alignItems: "center",
        marginVertical:40
    },
    titleText:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "center",
        opacity: 0.7,
        width: 298,
        lineHeight: 41,
        color: "#ee88b6",
        marginTop: 15
    },
    text:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "center",
        opacity: 0.7,
        width: 298,
        lineHeight: 41
    }
})
