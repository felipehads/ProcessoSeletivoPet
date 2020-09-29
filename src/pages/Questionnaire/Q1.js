import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="CALCULADORA DE RISCO (GAIL)" navigation = {() => navigation.navigate("Homepage")}/>
        </View>
        <View>
            <Text style={styles.bigText}>
                Elegibilidade da
                Paciente
            </Text>
            <Text style={styles.text}>
                1- A paciente tem alguma
                história médica de qualquer
                câncer de mama ou de
                carcinoma ductal in situ
                (CDIS) ou carcinoma lobular
                in situ (CLIS) ou recebeu
                anteriormente radioterapia
                na região do tórax para
                tratamento de linfoma de
                Hodgkin?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q2')}>
                    <Text style={styles.buttonText}>
                        SIM
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q2')}>
                    <Text style={styles.buttonText}>
                        NÃO
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
        justifyContent: "center"
    },
    buttonText:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold"
    }
})