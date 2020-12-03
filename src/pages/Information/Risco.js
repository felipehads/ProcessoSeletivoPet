import React from 'react';
import {View, Text,StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    FATORES DE RISCO
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Fatores de Proteção</Text>
                <Text style={styles.text}>
                    - Amamentação;{"\n"}- Prática regular de atividade física.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}> Ambientais e Comportamentais</Text>
                <Text style={styles.text}>
                    - Excesso de peso;{"\n"}- Inatividade física;{"\n"}- Má alimentação;{"\n"}- Ingestão de álcool;{"\n"}- Uso de tabaco;{"\n"}- Exposição frequente a Raio X na região do tórax.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>História Reprodutiva e Hormonal</Text>
                <Text style={styles.text}>
                    - Menarca antes dos 12 anos; - Menopausa após os 55 anos; - Nuliparidade; - Primeira gravidez após os 30 anos; - Uso de contraceptivos hormonais (estrogênio-progesterona); - Reposição hormonal na pós-menopausa. 
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Genéticos e Hereditários</Text>
                <Text style={styles.text}>
                    - História familiar de câncer no ovário;{"\n"}- História familiar de câncer de mama antes dos 50 anos;{"\n"}- História familiar de câncer de mama em homens;{"\n"}- Alteração genética nos genes BRCA1 e BRCA2.{"\n"}{"\n"}OBS.: A mulher que possui um ou mais dos fatores genéticos/hereditários é considerada com risco elevado para desenvolver câncer de mama. O câncer de mama de caráter genético/hereditário corresponde a apenas 5% a 10% do total de casos da doença.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>ATENÇÃO:</Text>
                <Text style={styles.text}>
                    A presença de um ou mais desses fatores de risco não significa que a mulher necessariamente terá a doença.
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
        marginTop: 50,
        marginBottom:30
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        color: "#ee88b6"
    },
    textContainer:{
        alignItems: "center",
        marginBottom: 15
    },
    text:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "left",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41
    },
    titleText:{
        fontSize:18,
        marginHorizontal:10,
        textAlign: "left",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 298,
        lineHeight: 41,
        color: "#ee88b6"
    }
})