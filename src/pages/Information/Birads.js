import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Information")}/>
            </View>
            <View style={styles.informationText}>
                <Text style={styles.bigText}>
                    Sistema de Laudos e
                    Registro de Dados de
                    Imagem da Mama
                </Text>
                <Text style={styles.bigText}>
                    CATEGORIA 0 
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
                    CATEGORIA 1
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
                    CATEGORIA 2
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