import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default ({navigation}) => {
    return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{marginHorizontal:30}}>
            <Text style={styles.header}>
                FERRAMENTA DE AVALIAÇÃO DE RISCO DE CÂNCER DE MAMA
            </Text>
        </View>
        
        <Text style={styles.bigText}>
            DADOS DEMOGRÁFICOS
        </Text>
        <Text style={styles.text}>
            3 - Qual a idade da
            paciente? OBS: Esta ferramenta
            não calcula risco de
            desenvolver câncer de
            mama em mulheres com
            menos de 35 anos, nem
            com mais de 85.
        </Text>
        
        <RNPickerSelect
            onValueChange={(value) => navigation.navigate('Q4', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: value
            })}
            items={[
                { label: '35 anos', value: '35' },
                { label: '36 anos', value: '36' },
                { label: '37 anos', value: '37' },
                { label: '38 anos', value: '38' },
                { label: '39 anos', value: '39' },
                { label: '40 anos', value: '40' },
                { label: '41 anos', value: '41' },
                { label: '42 anos', value: '42' },
                { label: '43 anos', value: '43' },
                { label: '43 anos', value: '43' },
                { label: '44 anos', value: '44' },
                { label: '45 anos', value: '45' },
                { label: '46 anos', value: '46' },
                { label: '47 anos', value: '47' },
                { label: '48 anos', value: '48' },
                { label: '49 anos', value: '49' },
                { label: '50 anos', value: '50' },
                { label: '51 anos', value: '51' },
                { label: '52 anos', value: '52' },
                { label: '53 anos', value: '53' },
                { label: '54 anos', value: '54' },
                { label: '55 anos', value: '55' },
                { label: '56 anos', value: '56' },
                { label: '57 anos', value: '57' },
                { label: '58 anos', value: '58' },
                { label: '59 anos', value: '59' },
                { label: '60 anos', value: '60' },
                { label: '61 anos', value: '61' },
                { label: '62 anos', value: '62' },
                { label: '63 anos', value: '63' },
                { label: '64 anos', value: '64' },
                { label: '65 anos', value: '65' },
                { label: '66 anos', value: '66' },
                { label: '67 anos', value: '67' },
                { label: '68 anos', value: '68' },
                { label: '69 anos', value: '69' },
                { label: '70 anos', value: '70' },
                { label: '71 anos', value: '71' },
                { label: '72 anos', value: '72' },
                { label: '73 anos', value: '73' },
                { label: '74 anos', value: '74' },
                { label: '75 anos', value: '75' },
                { label: '76 anos', value: '76' },
                { label: '77 anos', value: '77' },
                { label: '78 anos', value: '78' },
                { label: '79 anos', value: '79' },
                { label: '80 anos', value: '80' },
                { label: '81 anos', value: '81' },
                { label: '82 anos', value: '82' },
                { label: '83 anos', value: '83' },
                { label: '84 anos', value: '84' },
                { label: '85 anos', value: '85' },

            ]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
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
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 40
    },
});
