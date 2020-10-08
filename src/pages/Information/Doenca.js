import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="DOENÇA" navigation = {() => navigation.navigate("Information")}/>
            </View>
            <View style={styles.bodyText}>
                <Text style={styles.bigText}>
                    O que é câncer de mama?
                </Text>
                <Image style={styles.img} source={require('../../../assets/D1.png')}/>
                <Text style={styles.text}>
                    O câncer de mama é uma
                    doença causada pela multiplicação
                    desordenada de células da mama. Esse
                    processo gera células anormais que se
                    multiplicam, formando um tumor
                </Text>
                <Text style={styles.bigText}>
                    Como ele se manifesta?
                </Text>
                <Text style={styles.text}>
                    Na maioria se manifesta com um
                    caroço na mama, mas também pode se
                    apresentar de outras formas:
                </Text>

                <View style={styles.bottomImageContainer}>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D2.png')}/>
                        <Text style={styles.bottomText}>
                            Alteração no tamanho{"\n"}
                            ou na forma da mama
                        </Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D3.png')}/>
                        <Text style={styles.bottomText}>
                            Vermelhidão ou{"\n"}
                            coceira na mama e/ou{"\n"}
                            ao redor do mamilo
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomImageContainer}>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D4.png')}/>
                        <Text style={styles.bottomText}>
                            Liberação de líquido pelo {"\n"}
                            mamilo, sem apertar
 
                        </Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D5.png')}/>
                        <Text style={styles.bottomText}>
                            Nódulo ou caroço na{"\n"} 
                            mama, que está sempre{"\n"} 
                            presente e não diminui{"\n"} 
                            de tamanho
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomImageContainer}>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D6.png')}/>
                        <Text style={styles.bottomText}>
                            Inchaço na axila ou{"\n"} 
                            ao redor da clavícula
                        </Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Image style={styles.bottomImage}source={require('../../../assets/D7.png')}/>
                        <Text style={styles.bottomText}>
                            Afundamento da{"\n"} 
                            mama, endurecimento{"\n"} 
                            ou enrugamento da{"\n"} 
                            pele (casca de laranja)
                        </Text>
                    </View>
                </View>

                <Text style={styles.bigText}>
                    Quais os tipos mais comuns?
                </Text>
                <Text style={styles.text}>
                    O tipo histológico mais comum para o câncer de 
                    mama feminina é o carcinoma de células epiteliais, 
                    que se divide em lesões in situ e invasoras. 
                    Os carcinomas mais frequentes são os ductais ou lobulares.
                </Text>
                <Image style={styles.img} source={require('../../../assets/D8.png')}/>
                <Image style={styles.img} source={require('../../../assets/D9.png')}/>
            </View>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
        marginBottom:25
    },
    bigText:{
        fontSize:25,
        fontWeight: "bold"
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600",
        margin: 10
    },
    img: {
        height:200,
        width:200,
        margin: 15
    },
    bodyText: {
        flex:1,
        alignItems: "center"
    },
    bottomImageContainer:{
        flex:1,
        flexDirection:"row",
    },
    bottomBox:{
        margin: 10
    },  
    bottomImage:{
        width:120,
        height:120,
        margin:15
    },
    bottomText: {
        textAlign: "center",
        fontSize: 16
    }
})