import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Prevencao")}/>
            </View>
            <Text style={styles.pinkText}>
                Secundária
            </Text>
            <Text style={styles.text}>
                    Diz respeito ao diagnóstico
                    precoce e rastreamento, onde são
                    identificadas, por meio de exames,
                    as mulheres que têm risco de
                    desenvolver o câncer de mama, e
                    são tratadas em fase inicial,
                    visando a diminuição da
                    morbimortalidade da doença e a
                    melhora da qualidade de vida das
                    pacientes.
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Tracking')}>
                    <Text style={styles.bigText}>
                        Rastreamento
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Diagnostic')}>
                    <Text style={styles.bigText}>
                        Diagnóstico precoce
                    </Text>
                </TouchableOpacity>
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
        textAlign: "center",
        marginVertical: 10,
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600",
        marginHorizontal:10
    },
    buttonsContainer:{
        flex:1,
        alignItems: "center"
    },
    buttonsEach: {
        borderWidth: 3,
        borderColor: "pink",
        borderRadius: 15,
        height: 80,
        width: 300,
        marginVertical: 10,
        justifyContent: "center"
    }
})
