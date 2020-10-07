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
        <View style={styles.textContainer}>
            <Text style={styles.bigText}>
                RESULTADO
            </Text>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama nos próximos 5 anos
            </Text>
            <Text style={styles.text}>
                Risco do paciente: X%{"\n"}Risco médio da população:X%
            </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama ao longo da vida
            </Text>
            <Text style={styles.text}>
                Risco do paciente: X%{"\n"}Risco médio da população:X%
            </Text>
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
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600"
    },
    Boldtext:{
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600",
        fontWeight: "bold"
    },
    textContainer:{
        marginVertical: 10
    }

})