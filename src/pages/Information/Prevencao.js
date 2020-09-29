import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';
import FooterHome from '../../components/FooterHome';

export default ({navigation}) => {
    return(
    <View style={styles.container}>
        <View>
            <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Information")}/>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Primary')}>
                <Text style={styles.buttonText}>
                    PRIMÁRIA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Secondary')}>
                <Text style={styles.buttonText}>
                    SECUNDÁRIA
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
        marginHorizontal:10,
        marginBottom:25
    },
    buttonsContainer:{
        flex:1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    buttonsEach:{
        borderWidth: 3,
        borderColor: "pink",
        borderRadius: 15,
        height: 150,
        width: 250,
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    }
})