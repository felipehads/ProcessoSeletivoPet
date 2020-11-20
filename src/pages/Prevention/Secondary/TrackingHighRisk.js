import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Rastreamento para população de alto risco
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    As pacientes que apresentam um risco aumentado para o surgimento do câncer de mama devem receber uma abordagem diferente para o diagnóstico precoce quando comparadas à população geral. De acordo com a SBM, as seguintes condições estão associadas a um maior risco de desenvolvimento de câncer de mama e devem receber uma atenção diferenciada para o diagnóstico precoce : História prévia de câncer de mama - Exame físico a cada seis meses nos primeiros 2 anos e depois anualmente; - Mamografia anual ou seis meses após o término do tratamento conservador (unilateral na mama operada); - Ultrassonografia das mamas deve ser utilizado se a mamografia for classe BIRADS 0; - Ressonância magnética das mamas na suspeita de recidiva após tratamento conservador ou esclarecer dúvidas após Mamografia ou Ultrassonografia das mamas. Pacientes com risco de Gail maior ou igual a 1.7% de desenvolver câncer de mama em 5 anos (a partir dos 35 anos de idade) - Exame clínico a cada 6-12 meses (iniciar na idade em que o risco de Gail seja maior ou igual a 1.7%); - Mamografia anual. Mulheres com risco maior que 20% de desenvolver câncer de mama ao longo da vida (“lifetime risk”) com antecedentes de carcinoma lobular in situ (CLIS) ou hiperplasia ductal atípica (HDA) ou hiperplasia lobular atípica (HLA) - Exame clínico a cada 6-12 meses após o diagnóstico de CLIS, HDA ou HLA; - Mamografia anual, iniciar após o diagnóstico (não iniciar antes dos 30 anos de idade); - Se disponível considerar Ressonância Magnética das Mamas (não antes dos 25 anos de idade). Mulheres com risco maior que 20% ao longo da vida (“lifetime risk”) baseado em modelos que utilizam variáveis da história familiar (modelos de CLAUS, BOADICEA, BRCAPRO, Tyrer-Cuzik) - Exame físico a cada 6-12 meses; - Se disponível geneticista, encaminhar para aconselhamento genético; - Mamografia anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 30 anos de idade); - Ressonância Magnética das Mamas anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 25 anos de idade). Mulheres que receberam previamente irradiação em manto no tórax com menos de 30 anos de idade - Idade atual menor que 25 anos: exame físico anual (iniciar 8-10 anos após a irradiação); autoexame (como autoconhecimento e orientar para reportar alterações ao médico); - Idade atual maior ou igual a 25 anos: exame clínico a cada 6-12 meses (iniciar 8-10 anos após a irradiação); Mamografia anual (não antes dos 30 anos, iniciar 8-10 anos após a irradiação); Ressonância Magnética das Mamas anual (não antes dos 25 anos, iniciar 8-10 anos após a radioterapia). Pacientes com mutação conhecida que aumentam risco de câncer de mama ou com história familiar sugestiva - Se disponível geneticista, encaminhar para aconselhamento genético; - Ressonância Magnética das Mamas iniciar aos 25 anos de idade, anualmente; - Mamografia anual a partir dos 30 anos de idade.
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
        top: 77,
        width:288,
        left:43,
        alignItems: "center"
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        letterSpacing: -0.82,
        lineHeight: 41,
        fontWeight: "600"
    },
    textContainer:{
        alignItems: "center",
        top:80,
        marginBottom: 100
    },
    text:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 300,
        lineHeight: 41
    }
})
