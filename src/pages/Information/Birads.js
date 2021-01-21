import React from 'react';
import {View, Text,StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>
                    BI-RADS
                </Text>
                <Text style={styles.titleText}>
                    Sistema de Laudos e
                    Registro de Dados de
                    Imagem da Mama
                </Text>
                <Text style={styles.text}>
                    O termo BI-RADS é um acrônimo em inglês para Breast Image Reporting and Data System, é uma forma padronizada de relatar os achados da mamografia, auxiliando na redução do risco de interpretações subjetivas de laudos.
                    A classificação também ajuda a saber quando a investigação de um nódulo suspeito deve ser complementada com outros métodos e quando ela pode ser satisfatoriamente interrompida apenas com o resultado da mamografia. O BI-RADS também auxilia na padronização das condutas médicas frente aos resultados e ainda apresenta uma probabilidade de câncer de mama de acordo com as categorias.
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 0 
                </Text>
                <Text style={styles.text}>
                    Incompleta – requer avaliação por
                    imagem adicional e/ou
                    mamografias anteriores para
                    comparação
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Reconvocação para aquisição de
                    imagens adicionais e/ou para
                    comparação com exames
                    anteriores.
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer
                </Text>
                <Text style={styles.text}>
                    Indeterminado.
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 1
                </Text>
                <Text style={styles.text}>
                    Negativa
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Rastreamento mamográfico de
                    rotina.
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer
                </Text>
                <Text style={styles.text}>
                    Essencialmente 0% de
                    probabilidade maligna.
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 2
                </Text>
                <Text style={styles.text}>
                    Achado(s) benigno(s)
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Rastreamento mamográfico de
                    rotina              
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Essencialmente 0% de probabilidade maligna.             
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 3
                </Text>
                <Text style={styles.text}>
                    Achado(s) provavelmente benigno(s)
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Seguimento de curto prazo (6 meses) ou acompanhamento mamográfico periódico.
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Entre 0% e 2% de probabilidade maligna.
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 4
                </Text>
                <Text style={styles.text}>
                    Achado(s) suspeito(s)
                    {"\n"}a) Baixa suspeita de malignidade
                    {"\n"}b) Moderada suspeita de malignidade
                    {"\n"}c) Alta suspeita de malignidade 
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Diagnóstico tecidual (Biópsia).
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Entre 2% e 95% de probabilidade maligna.
                    {"\n"}a) Entre 2% e 10% de probabilidade maligna;
                    {"\n"}b) Entre 10% e 50% de probabilidade maligna;
                    {"\n"}c) Entre 50% e 95% de probabilidade maligna;
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 5
                </Text>
                <Text style={styles.text}>
                    Achado altamente sugestivo de malignidade 
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Diagnóstico tecidual (Biópsia).
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    ≥95% de probabilidade maligna.
                </Text>
                <Text style={styles.titleText}>
                    {"\n"}CATEGORIA 6
                </Text>
                <Text style={styles.text}>
                    Malignidade comprovada por biópsia 
                </Text>
                <Text style={styles.subTitleText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Excisão cirúrgica quando clinicamente apropriado.
                </Text>
                <Text style={styles.subTitleText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Indeterminado.
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
    textContainer:{
        marginHorizontal:10,
        marginBottom:25,
        alignItems: "center"
    },
    firstText:{
        fontWeight: "bold",
        fontSize:34,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 30,
        textAlign: "center",
        width: 300,
        opacity: 1,
        lineHeight: 41
    }, 
    titleText:{
        fontWeight: "bold",
        fontSize:24,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center",
        width: 300,
        lineHeight: 41
    },
    subTitleText:{
        fontWeight: "bold",
        fontSize:20,
        textAlign: "center",
        color: "#ee88b6",
        marginVertical: 5,
        textAlign: "center",
        width: 300,
        lineHeight: 41
    },
    text:{
        fontSize:20,
        textAlign: "center",
        fontWeight: "600",
        opacity: 0.7,
        lineHeight: 41
    }
})