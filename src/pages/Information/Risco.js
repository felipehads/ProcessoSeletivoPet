import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="FATORES DE RISCO" navigation = {() => navigation.navigate("Information")}/>
            </View>
            <View style={styles.informationText}>
                <Text style={styles.bigText}>
                    Ambientais e
                    Comportamentais
                </Text>
                <Text style={styles.text}>
                     Excesso de peso;{"\n"}
                     Inatividade física;{"\n"}
                     Má alimentação;{"\n"}
                     Ingestão de álcool;{"\n"}
                     Uso de tabaco;{"\n"}
                     Exposição frequente a Raio X na
                    região do tórax.{"\n"}
                </Text>

                <Text style={styles.bigText}>
                    História Reprodutiva e
                    Hormonal    
                </Text>
                <Text style={styles.text}>
                     Menarca antes dos 12 anos;{"\n"}
                     Menopausa após os 55 anos;{"\n"}
                     Nuliparidade;{"\n"}
                     Primeira gravidez após os 30
                    anos;{"\n"}
                     Uso de contraceptivos
                    hormonais (estrogênioprogesterona);{"\n"}
                     Reposição hormonal na pósmenopausa.{"\n"}
                </Text>

                <Text style={styles.bigText}>
                    Genéticos e Hereditários
                </Text>
                <Text style={styles.text}>
                     História familiar de câncer no
                    ovário;{"\n"}
                     História familiar de câncer de
                    mama antes dos 50 anos;{"\n"}
                     História familiar de câncer de
                    mama em homens;{"\n"}
                     Alteração genética nos genes{"\n"}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
        marginBottom:25
    },
    informationText:{
        marginHorizontal:10,
        marginBottom:25
    },  
    bigText:{
        fontSize:28,
        fontWeight: "bold"
    },
    text:{
        fontSize:20,
        textAlign: "justify",
        fontWeight: "600"
    }
})