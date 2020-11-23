import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Prevenção Primária
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Relaciona-se com o controle dos fatores de risco modificáveis e incentivo a adoção de comportamentos protetores, visto que estes aspectos podem ajudar a reduzir cerca de 30% o risco de desenvolver a doença. Para mulheres com alto risco de ter a doença pelos fatores genéticos e hereditários, existem também a mastectomia profilática com reconstrução mamária e a quimioprevenção. Fatores de risco modificáveis e comportamentos protetores - Controlar o peso (IMC menor que 30kg/m²) principalmente na pós-menopausa; - Alimentar-se de forma balanceada e saudável (ingestão de frutas, legumes, azeite e alimentos risco em ômega 3); -Praticar atividade física (de preferência movimentar-se todos os dias); - Amamentar. Mastectomia profilática com reconstrução mamária para mulheres com alto risco de desenvolver o câncer de mama A redução absoluta do risco de câncer de mama varia de 2-7%, dependendo da idade de realização da cirurgia , geralmente até 40 anos. A decisão na indicação da cirurgia profilática bilateral deve ser discutida com a paciente levando-se em consideração todos os riscos e benefícios envolvidos. Quimioprevenção para mulheres com alto risco de desenvolver o câncer de mama De acordo com o INCA, o SUS não utiliza medicamentos quimiopreventivos. De acordo com a SBM: Pacientes com risco de Gail ≥ 1.7, mais de 35 anos de idade, expectativa de vida superior a 10 anos ou com carcinoma lobular in situ devem usar um desses medicamentos por 5 anos:
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
        top: 81,
        width:280,
        height: 46,
        left: 48
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        letterSpacing: -0.82,
        lineHeight: 41
    },
    textContainer:{
        top:134,
        alignItems: "center",
        marginBottom: 170,
        marginHorizontal: 38
    },
    text:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41
    }
})
