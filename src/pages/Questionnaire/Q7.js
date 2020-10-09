import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q6")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Dados Demográficos
            </Text>
            <Text style={styles.text}>
                7- Qual era a idade da paciente na sua primeira gestação a termo?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '98'
                })}>
                    <Text style={styles.buttonText}>
                        Nulípara
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Desconhecido
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Menos de 20 anos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '1'
                })}>
                    <Text style={styles.buttonText}>
                        Entre 20 e 24 anos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '2'
                })}>
                    <Text style={styles.buttonText}>
                        Entre 25 e 29 anos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q8', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: '3'
                })}>
                    <Text style={styles.buttonText}>
                        Maior ou igual a 30 anos
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
        padding: 6,
        justifyContent: "center",
        marginVertical: 1
    },
    buttonText:{
        textAlign: "left",
        fontSize: 22,
        fontWeight: "bold"
    }
})