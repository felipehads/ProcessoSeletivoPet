import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Prevencao")}/>
            </View>
            <View>
                <Text style={styles.pinkText}>
                    Primária
                </Text>
                <Text style={styles.text}>
                    Relaciona-se com o controle
                    dos fatores de risco modificáveis e
                    incentivo a adoção de
                    comportamentos protetores, visto
                    que estes aspectos podem ajudar a
                    reduzir cerca de 30% o risco de
                    desenvolver a doença.
                    Para mulheres com alto risco
                    de ter a doença pelos fatores
                    genéticos e hereditários, existem
                    também a mastectomia profilática
                    com reconstrução mamária e a
                    quimioprevenção.
                </Text>
                <Text style={styles.bigText}>
                    Fatores de risco
                    modificáveis e
                    comportamentos protetores
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require("../../../assets/favicon.png")}/>
                </View>
                <Text style={styles.text}>
                    •   Controlar o peso (IMC menor
                    que 30kg/m²) principalmente
                    na pós-menopausa{'\n'}•   Alimentar-se de forma
                    balanceada e saudável
                    (ingestão de frutas, legumes,
                    azeite e alimentos risco em  
                </Text>
            </View>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
    },
    pinkText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "pink",
        textAlign: "center",
        marginVertical: 10
    },  
    bigText:{
        fontSize:25,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "justify",
        marginVertical: 10
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600"
    },
    imgContainer:{
        flex:1,
        alignItems: "center"
    }, 
    img:{
        height:200,
        width:200
    }
})
