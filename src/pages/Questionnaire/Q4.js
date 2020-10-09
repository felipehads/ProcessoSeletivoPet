import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q3")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Dados Demográficos
            </Text>
            <Text style={styles.text}>
                4-Qual a etnia/raça da paciente?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('Q5', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'Other'
                })}>
                    <Text style={styles.buttonText}>
                        Desconhecido
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'White'
                })}>
                    <Text style={styles.buttonText}>
                        Branca
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                        value1: navigation.getParam('value1', ''),
                        value2: navigation.getParam('value2', ''),
                        value3: navigation.getParam('value3', ''),
                        value4: 'Black'
                    })}>
                    <Text style={styles.buttonText}>
                        Afro-americana
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q4sub1', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'Hispanic'
                })}>
                    <Text style={styles.buttonText}>
                        Hispânica/Latina
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'Other'
                })}>
                    <Text style={styles.buttonText}>
                        Nativo-americano ou nativo do Alasca
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q4sub2', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: 'Asian'
                })}>
                    <Text style={styles.buttonText}>
                        Asiática
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
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    buttonsEach:{
        borderWidth:3,
        borderColor: "pink",
        borderRadius: 10,
        width: 300,
        padding: 8,
        justifyContent: "center",
        marginVertical: 2
    },
    buttonText:{
        textAlign: "left",
        fontSize: 22,
        fontWeight: "bold"
    }
})