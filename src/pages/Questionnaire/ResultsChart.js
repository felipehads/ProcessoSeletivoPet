import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {navigation.getParam('risk', '')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        backgroundColor: "#ffffff"
    },
    text:{
        fontSize:24,
        textAlign: "justify",
        fontWeight: "600",
        marginHorizontal: 10
    },
})