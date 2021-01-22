import React from 'react';
import {View, Text,StyleSheet, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    DOENÇA
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>
                    O que é câncer de mama?{"\n"}
                </Text>
             </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/doenca.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    O câncer de mama é uma doença causada pela multiplicação desordenada de células da mama. Esse processo gera células anormais que se multiplicam, formando um tumor.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Como ele se manifesta?</Text>
                </View>
                <Text style={styles.text}>
                    Na maioria se manifesta com um nódulo na mama, mas também pode se apresentar de outras formas:
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/alteracaoDoTamanho.png')}/>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Alteração no tamanho ou na forma da mama. O tumor deforma os tecidos mamários e com isso pode alterar o formato da mama, que pode apresentar inchaço ou diminuição da mama, por conta da retração dos tecidos.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/abaulamentoDaMama.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Vermelhidão ou coceira na mama e/ou ao redor do mamilo. Quando o câncer ainda não conseguiu penetrar nos tecidos, se manifesta externamente dessa maneira.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/descargaMamilar.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Descarga mamilar (eliminação de secreção), sem apertar. Nesses casos o tumor deve estar no início e alojado nos dutos mamários.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/vermelhidao.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> 
                    Nódulo na mama, que está sempre presente e não diminui de tamanho.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/noduloAxila.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> 
                    Edema na axila ou ao redor da clavícula. Isso demonstra que o câncer está avançando pelos gânglios linfáticos.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/nodulo.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> 
                    Abaulamento da mama, endurecimento ou retração da pele (casca de laranja), devido a degeneração das glândulas mamárias. Também são indicativos de um processo inflamatório nos vasos que irrigam a região.{"\n"}{"\n"}OBS.: A paciente pode sentir dor ou não junto a esse sinais e sintomas.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Quais os tipos mais comuns?
                    </Text>
                </View >
                <Text style={styles.text}>
                    O tipo histológico mais comum para o câncer de mama feminina é o carcinoma de células epiteliais, que se divide em lesões in situ e invasoras. Os carcinomas mais frequentes são os ductais ou lobulares.
                </Text>
            </View>
            <View style={styles.lastImgContainer}>
                <Image style={styles.lastImg} source={require('../../../assets/carcinomaDuctal.png')}/>
                <Text style={styles.refText}>Referência: Cancer Research UK/ Wikimedia Commons</Text>
                <Image style={styles.lastImg} source={require('../../../assets/carcinomaLobular.png')}/>
                <Text style={styles.refText}>Referência: Cancer Research UK/ Wikimedia Commons</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    headerContainer:{
        top: 36,
        marginBottom:40
    },
    headerText:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 34,
        color: "#ee88b6"
    },
    textContainer:{
        alignItems: "center",
        marginTop: 15
    },
    titleText:{
        fontWeight: "bold",
        fontSize:24,
        textAlign: "center",
        letterSpacing: 0,
        opacity: 1,
        width: 300,
        lineHeight: 27,
        color: "#ee88b6"
    },
    text:{
        marginTop:25,
        fontSize:20,
        textAlign: "center",
        letterSpacing: 0,
        opacity: 0.7,
        width: 300,
        lineHeight: 27,
    },
    img:{
        width:206,
        height:206,
    },
    imgContainer:{
        alignItems: "center"
    },
    lastImgContainer:{
        alignItems: "center",
        marginBottom: 20
        
    },
    lastImg:{
        marginTop: 25,
        width: 326,
        height: 384
    },
    refText:{
        fontSize: 10
    }
})