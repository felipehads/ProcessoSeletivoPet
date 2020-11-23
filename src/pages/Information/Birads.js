import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.informationText}>
                <Text style={styles.bigText}>
                    Sistema de Laudos e
                    Registro de Dados de
                    Imagem da Mama
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 0 
                </Text>
                <Text style={styles.text}>
                    Incompleta – requer avaliação por
                    imagem adicional e/ou
                    mamografias anteriores para
                    comparação
                </Text>
                <Text style={styles.pinkText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Reconvocação para aquisição de
                    imagens adicionais e/ou para
                    comparação com exames
                    anteriores.
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer
                </Text>
                <Text style={styles.text}>
                    Indeterminado.
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 1
                </Text>
                <Text style={styles.text}>
                    Rastreamento mamográfico de
                    rotina.
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer
                </Text>
                <Text style={styles.text}>
                    Essencialmente 0% de
                    probabilidade maligna.
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 2
                </Text>
                <Text style={styles.text}>
                    Achado(s) benigno(s)
                </Text>
                <Text style={styles.pinkText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Rastreamento mamográfico de
                    rotina              
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Essencialmente 0% de probabilidade maligna.             
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 3
                </Text>
                <Text style={styles.text}>
                    Achado(s) provavelmente benigno(s)
                </Text>
                <Text style={styles.pinkText}>
                    Conduta
                </Text>
                <Text style={styles.text}>
                    Seguimento de curto prazo (6 meses) ou acompanhamento mamográfico periódico.
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Entre 0% e 2% de probabilidade maligna.
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 4
                </Text>
                <Text style={styles.text}>
                    Achado(s) suspeito(s)
                    {"\n"}1.    Baixa suspeita de malignidade
                    {"\n"}2.    Moderada suspeita de malignidade
                    {"\n"}3.    Alta suspeita de malignidade 
                </Text>
                <Text style={styles.pinkText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Diagnóstico tecidual (Biópsia).
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    Entre 2% e 95% de probabilidade maligna.
                    {"\n"}1.    Entre 2% e 10% de probabilidade maligna;
                    {"\n"}2.    Entre 10% e 50% de probabilidade maligna;
                    {"\n"}3.    Entre 50% e 95% de probabilidade maligna;
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 5
                </Text>
                <Text style={styles.text}>
                    Achado altamente sugestivo de malignidade 
                </Text>
                <Text style={styles.pinkText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Diagnóstico tecidual (Biópsia).
                </Text>
                <Text style={styles.pinkText}>
                    Probabilidade de câncer 
                </Text>
                <Text style={styles.text}>
                    ≥95% de probabilidade maligna.
                </Text>
                <Text style={styles.bigText}>
                    {"\n"}CATEGORIA 6
                </Text>
                <Text style={styles.text}>
                    Malignidade comprovada por biópsia 
                </Text>
                <Text style={styles.pinkText}>
                    Conduta 
                </Text>
                <Text style={styles.text}>
                    Excisão cirúrgica quando clinicamente apropriado.
                </Text>
                <Text style={styles.pinkText}>
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
    informationText:{
        marginHorizontal:10,
        marginBottom:25
    },  
    bigText:{
        fontSize:28,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5
    },
    text:{
        fontSize:20,
        textAlign: "justify",
        fontWeight: "600"
    },
    pinkText:{
        color: "pink",
        fontSize: 25,
        textAlign: "left",
        fontWeight: "bold"
    }
})