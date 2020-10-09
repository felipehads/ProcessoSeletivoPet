import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const HeaderBack = ({textoPrincipal, navigation}) => {
    return(
        <View style={styles.header}>
            <Image source={require('../../assets/startIcon.png')}/>
            <Text style={styles.headerText}>{textoPrincipal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        marginBottom: 25,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "pink"
    }
});

export default HeaderBack;