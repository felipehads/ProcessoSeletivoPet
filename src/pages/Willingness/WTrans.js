import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';



export default ({navigation}) => {
    var res = (navigation.getParam('sus', 0) + navigation.getParam('ben', 0) + navigation.getParam('bar', 0)) / 3
    if(res > 3.67){
        navigation.navigate('Will')
    }

    if(res <= 3.67){
        navigation.navigate('WillNot')
    }
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    }
})