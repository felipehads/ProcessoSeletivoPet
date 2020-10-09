import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q1")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Elegibilidade da
                Paciente
            </Text>
            <Text style={styles.text}>
                2- A paciente tem alguma
                mutação nos genes BRCA1
                e/ou BRCA2, ou diagnóstico
                de alguma síndrome
                genética que possa ser
                associada a elevado risco de
                câncer de mama?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => Alert.alert("Atenção!",
                "Outras ferramentas podem ser mais apropriadas para cálculo de risco em pacientes portadoras de mutações genéticas ou outras síndromes relacionadas com o aumento de risco para desenvolver câncer de mama.")}>
                    <Text style={styles.buttonText}>
                        SIM
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q3', {
                    value1: navigation.getParam('value1', 'default'),
                    value2: '1'
                }
                )}>
                    <Text style={styles.buttonText}>
                        NÃO
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastButtonContainer}>
                <TouchableOpacity style={styles.lastButton} onPress={() => navigation.navigate('Q3', {
                     value1: navigation.getParam('value1', ''),
                     value2: '2'
                })}>
                    <Text style={styles.buttonText}>
                        DESCONHECIDO
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View>
            <FooterHome navigation = {() => navigation.navigate("Homepage")}/>
        </View>

        
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    bigText:{
        fontSize:28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        marginVertical: 10,
    },
    text:{
        fontSize:22,
        textAlign: "justify",
        fontWeight: "600",
        marginHorizontal: 10
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        marginVertical: 25
    },
    buttonsEach:{
        borderWidth:3,
        borderColor: "pink",
        borderRadius: 10,
        height: 70,
        width: 150,
        justifyContent: "center",
    },
    buttonText:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold"
    },
    lastButtonContainer:{
        alignItems: "center",
        marginBottom: 15,
    },
    lastButton:{
        borderWidth:3,
        borderColor: "pink",
        borderRadius: 10,
        height: 70,
        width: 250,
        justifyContent: "center"
    }
})
