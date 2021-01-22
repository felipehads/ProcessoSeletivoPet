import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    RASTREAMENTO PARA POPULAÇÃO DE ALTO RISCO
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    As pacientes que apresentam um risco aumentado para o surgimento do câncer de mama devem receber uma abordagem diferente para o diagnóstico precoce quando comparadas à população geral.{"\n"}{"\n"}De acordo com a SBM, as seguintes condições estão associadas a um maior risco de desenvolvimento de câncer de mama e devem receber uma atenção diferenciada para o diagnóstico precoce : 
                </Text>
                <Text style={styles.titleText}>
                    História prévia de câncer de mama
                </Text>
                <Text style={styles.text}>
                    - Exame físico a cada seis meses nos primeiros 2 anos e depois anualmente;{"\n"}{"\n"}- Mamografia anual ou seis meses após o término do tratamento conservador (unilateral na mama operada);{"\n"}{"\n"}- Ultrassonografia das mamas deve ser utilizado se a mamografia for classe BIRADS 0;{"\n"}{"\n"}- Ressonância magnética das mamas na suspeita de recidiva após tratamento conservador ou esclarecer dúvidas após Mamografia ou Ultrassonografia das mamas.
                </Text>
                <Text style={styles.titleText}> 
                    Pacientes com risco de Gail maior ou igual a 1.7% de desenvolver câncer de mama em 5 anos (a partir dos 35 anos de idade)
                </Text>
                <Text style={styles.text}>
                    - Exame clínico a cada 6-12 meses (iniciar na idade em que o risco de Gail seja maior ou igual a 1.7%);{"\n"}{"\n"}- Mamografia anual.
                </Text>
                <Text style={styles.titleText}>
                    Mulheres com risco maior que 20% de desenvolver câncer de mama ao longo da vida (“lifetime risk”) com antecedentes de carcinoma lobular in situ (CLIS) ou hiperplasia ductal atípica (HDA) ou hiperplasia lobular atípica (HLA)
                </Text>
                <Text style={styles.text}>
                    - Exame clínico a cada 6-12 meses após o diagnóstico de CLIS, HDA ou HLA;{"\n"}{"\n"}- Mamografia anual, iniciar após o diagnóstico (não iniciar antes dos 30 anos de idade);{"\n"}- Se disponível considerar Ressonância Magnética das Mamas (não antes dos 25 anos de idade).
                </Text>
                <Text style={styles.titleText}>
                    Mulheres com risco maior que 20% ao longo da vida (“lifetime risk”) baseado em modelos que utilizam variáveis da história familiar (modelos de CLAUS, BOADICEA, BRCAPRO, Tyrer-Cuzik)
                </Text>
                <Text style={styles.text}>
                    - Exame físico a cada 6-12 meses; - Se disponível geneticista, encaminhar para aconselhamento genético;{"\n"}{"\n"}- Mamografia anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 30 anos de idade);{"\n"}{"\n"}- Ressonância Magnética das Mamas anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 25 anos de idade).
                </Text>
                <Text style={styles.titleText}> 
                    Mulheres que receberam previamente irradiação em manto no tórax com menos de 30 anos de idade
                </Text>
                <Text style={styles.text}>
                    - Idade atual menor que 25 anos: exame físico anual (iniciar 8-10 anos após a irradiação); autoexame (como autoconhecimento e orientar para reportar alterações ao médico);{"\n"}{"\n"}- Idade atual maior ou igual a 25 anos: exame clínico a cada 6-12 meses (iniciar 8-10 anos após a irradiação); Mamografia anual (não antes dos 30 anos, iniciar 8-10 anos após a irradiação); Ressonância Magnética das Mamas anual (não antes dos 25 anos, iniciar 8-10 anos após a radioterapia). 
                </Text>
                <Text style={styles.titleText}>
                    Pacientes com mutação conhecida que aumentam risco de câncer de mama ou com história familiar sugestiva
                </Text>
                <Text style={styles.text}>
                    - Se disponível geneticista, encaminhar para aconselhamento genético;{"\n"}{"\n"}- Ressonância Magnética das Mamas iniciar aos 25 anos de idade, anualmente;{"\n"}{"\n"}- Mamografia anual a partir dos 30 anos de idade.
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
        marginTop: 40,
        marginBottom: 30
    },
    headerText:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 34,
        letterSpacing: -0.82,
        lineHeight: 41,
        color: "#ee88b6"
    },
    textContainer:{
        alignItems: "center",
        marginBottom: 30
    },
    text:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 300,
        lineHeight: 41
    },
    titleText:{
        fontSize:24,
        textAlign: "center",
        letterSpacing: -0.43,
        fontWeight: "bold",
        width: 300,
        lineHeight: 41,
        color: "#ee88b6",
        marginTop:30,
        marginBottom: 10
    }
})
