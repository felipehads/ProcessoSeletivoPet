import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Fatores de risco
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                Fatores de Proteção - Amamentação; - Prática regular de atividade física. Ambientais e Comportamentais - Excesso de peso; - Inatividade física; - Má alimentação; - Ingestão de álcool; - Uso de tabaco; - Exposição frequente a Raio X na região do tórax. História Reprodutiva e Hormonal - Menarca antes dos 12 anos; - Menopausa após os 55 anos; - Nuliparidade; - Primeira gravidez após os 30 anos; - Uso de contraceptivos hormonais (estrogênio-progesterona); - Reposição hormonal na pós-menopausa. Genéticos e Hereditários - História familiar de câncer no ovário; - História familiar de câncer de mama antes dos 50 anos; - História familiar de câncer de mama em homens; - Alteração genética nos genes BRCA1 e BRCA2. OBS.: A mulher que possui um ou mais dos fatores genéticos/hereditários é considerada com risco elevado para desenvolver câncer de mama. O câncer de mama de caráter genético/hereditário corresponde a apenas 5% a 10% do total de casos da doença. ATENÇÃO: A presença de um ou mais desses fatores de risco não significa que a mulher necessariamente terá a doença.
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
        top: 66,
        width:280,
        height: 87,
        left: 48
    },
    headerText:{
        textAlign: "center",
        fontSize: 34
    },
    textContainer:{
        top:50,
        alignItems: "center",
        marginBottom: 70
    },
    text:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41
    }
})