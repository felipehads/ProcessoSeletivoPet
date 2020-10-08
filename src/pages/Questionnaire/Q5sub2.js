import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Q5")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Paciente e Histórico Familiar
            </Text>
            <Text style={styles.text}>
                5 - A paciente teve pelo menos uma biópsia de mama com hiperplasia atípica?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q6', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: '1.82'
                }) }>
                    <Text style={styles.buttonText}>
                        SIM
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q6', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: '.93'
                })}>
                    <Text style={styles.buttonText}>
                        NÃO
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastButtonContainer}>
                <TouchableOpacity style={styles.lastButton} onPress={() => navigation.navigate('Q6', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value2', ''),
                    value3: navigation.getParam('value3', ''),
                    value4: navigation.getParam('value4', ''),
                    value5: navigation.getParam('value5', ''),
                    value6: navigation.getParam('value6', ''),
                    value7: navigation.getParam('value7', ''),
                    value8: '1.0'
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
        marginHorizontal:20,
        marginBottom: 25
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
        fontWeight: "600"
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