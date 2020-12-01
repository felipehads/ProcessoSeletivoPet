import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';


const FirstPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View>
                <Text style={styles.welcomeText}>BEM-VINDO(A) AO MAMAPREV.</Text>
            </View>
            <View>
                <Text style={styles.headerText}>Este é um aplicativo voltado aos profissionais da saúde. Por favor, selecione sua área de atuação.</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/social-worker.png')}/>
                    </TouchableOpacity>
                    <Text>Assistente Social</Text>
                </View>

                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/dentist.png')}/> 
                    </TouchableOpacity>
                    <Text>Dentista</Text>
                </View>
                
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/nurse.png')}/>   
                    </TouchableOpacity>
                    <Text>Enfermeiro(a)</Text>
                </View>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/pharmaceutical.png')}/>  
                    </TouchableOpacity>
                    <Text>Farmacêutico(a)</Text>
                </View>
                
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/medic.png')}/>     
                    </TouchableOpacity>
                    <Text>Médico(a)</Text>
                </View>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/nutritionist.png')}/>  
                    </TouchableOpacity>
                    <Text>Nutricionista</Text>
                </View>
                
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/physical-educator.png')}/> 
                    </TouchableOpacity>
                    <Text style={{textAlign:"center"}}>Profissional de{"\n"}Educação Física</Text>
                </View>
                <View style={styles.buttonsEach}>
                    <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Homepage')}>
                        <Image style={styles.buttonsImg} source={require('../../assets/psychologist.png')}/>               
                    </TouchableOpacity>
                    <Text>Psicólogo(a)</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#ffffff"
    },
    welcomeText: {
        textAlign: "center",
        fontSize: 28,
        fontWeight:"bold",
        color:"#ee88b6"
    },
    headerText:{
        textAlign:"center",
        fontSize:16,
        color: "#808080",
        marginHorizontal: 50,
        marginVertical: 20
    },
    buttonsContainer:{
        flexDirection: "row"
    },
    buttonsImg:{
        width: 125,
        height: 90,
        
        marginHorizontal: 15
    },
    buttonsEach:{
        flexDirection: "column",
        alignItems: "center",
    }
})

export default FirstPage;
