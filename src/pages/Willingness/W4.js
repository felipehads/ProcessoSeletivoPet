import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{marginHorizontal:30, marginTop: 30}}>
            <Text style={styles.header}>
                ESCALA DE ADESÃO À MAMOGRAFIA (RCHBMS)
            </Text> 
        </View>
        <Text style={styles.bigText}>
            Benefícios
        </Text>
        <Text style={styles.text}>
            Realizar a mamografia me ajudará a encontrar mais cedo os tumores na mama.
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('W5', {
                sus: navigation.getParam('sus', 0),
                ben: 1
            })}>
                <Text style={styles.buttonText}>
                    Discordo completamente
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('W5', {
                sus: navigation.getParam('sus', 0),
                ben: 2
            })}>
                <Text style={styles.buttonText}>
                    Discordo em parte
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('W5', {
                sus: navigation.getParam('sus', 0),
                ben: 3
            })}>
                <Text style={styles.buttonText}>
                    Não concordo e nem discordo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('W5', {
               sus: navigation.getParam('sus', 0),
               ben: 4
            })}>
                <Text style={styles.buttonText}>
                    Concordo em parte
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('W5', {
                sus: navigation.getParam('sus', 0),
                ben: 5
            })}>
                <Text style={styles.buttonText}>
                    Concordo completamente
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    header: {
        fontSize:34,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ee88b6"
    },
    bigText:{
        fontSize:22,
        marginBottom: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
        marginHorizontal: 20
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50
    },
    buttonsEach:{
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        height:50,
        width: 300,
        padding: 8,
        justifyContent: "center",
        marginVertical: 2
    },
    buttonText:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"#ffffff"
    }
})