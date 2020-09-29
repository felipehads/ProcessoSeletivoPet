import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const HeaderBack = ({textoPrincipal, navigation}) => {
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress = {navigation}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>{textoPrincipal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 25,
        marginHorizontal:5
    },
    headerText: {
        fontSize: 30,
        textAlign: "right",
        fontWeight: "bold",
        color: "pink"
    }
});

export default HeaderBack;