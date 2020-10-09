import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q7")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Dados Demográficos
            </Text>
            <Text style={styles.text}>
                8- Quantas parentes de primeiro grau da paciente (mãe, irmãs, filhas) tiveram câncer de mama?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: navigation.getParam('value10', ''),
                    value11: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Desconhecido
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: navigation.getParam('value10', ''),
                    value11: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Nenhum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: navigation.getParam('value10', ''),
                    value11: '1'
                })}>
                    <Text style={styles.buttonText}>
                        Um paciente
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: navigation.getParam('value8', ''),
                    value9: navigation.getParam('value9', ''),
                    value10: navigation.getParam('value10', ''),
                    value11: '2'
                })}>
                    <Text style={styles.buttonText}>
                        Mais do que um paciente
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