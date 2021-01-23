import React, { useState } from 'react';
import {View,Text, StyleSheet, StatusBar, Modal} from 'react-native';
import NewButton from '../components/NewButton';



const Homepage = ({navigation}) => {
    const[visible, setVisible] = useState(true);
    const[opacity, setOpacity] = useState(0.6);

    return(
        <View style={styles.container}> 
            <StatusBar hidden={true} />
            
            <View style={{position: 'absolute'}}>
                <Modal
                transparent={true}
                visible = {visible}
                >
                    <View style={{flex:0.4,backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center', marginHorizontal: 30, marginTop: 10,borderRadius: 20, paddingHorizontal: 40, paddingVertical: 70}}>
                        <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 16}}>Atenção!{"\n"}{"\n"}
                        Você profissional de saúde também precisa se cuidar!{"\n"}{"\n"}
                        Fique atento as recomendações quanto a presença de sinais e sintomas, fatores de risco e periodicidade dos exames para rastreamento e detecção precoce do câncer de mama.{"\n"}{"\n"}
                        Cuide-se!
                        </Text>
                        <NewButton textoPrincipal="Fechar"
                        navigation = {() => {setVisible(false), setOpacity(1)}} />
                    </View>

                </Modal>
            </View>
            <View style={{opacity: opacity}}>
                <View style={styles.button }>
                    <Text style={styles.text}>Muito bem! Agora selecione a opção desejada para começarmos</Text>
                </View>
                <View style={styles.button }>
                    <NewButton textoPrincipal="Ferramentas de avaliação" navigation = {() => navigation.navigate("Avaliation")}/>
                </View>
                <View style={styles.button }>
                    <NewButton textoPrincipal="Acesso à informação" navigation = {() => navigation.navigate("Information")}/> 
                </View>
                <View style={styles.button }>
                    <NewButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/>
                </View> 
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    text:{
        textAlign:"center",
        fontSize:24,
        color: "#ee88b6",
        fontWeight: "bold",
        marginHorizontal: 30,
        marginBottom: 50,
    },
    button:{
        alignItems: "center"
    }
})

export default Homepage;