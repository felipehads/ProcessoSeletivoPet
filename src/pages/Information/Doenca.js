import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Doença
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>
                    O que é câncer de mama?{"\n"}
                </Text>
             </View>
            <View style={styles.imgContainer}>
                <Image style={styles.firstImg} source={require('../../../assets/D1.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"}O câncer de mama é uma doença causada pela multiplicação desordenada de células da mama. Esse processo gera células anormais que se multiplicam, formando um tumor.{"\n"}{"\n"}
                    Como ele se manifesta? {"\n"}{"\t"}{"\t"}{"\t"}{"\t"}Na maioria se manifesta com um nódulo na mama, mas também pode se apresentar de outras formas:
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
                <Image style={styles.img} source={require('../../../assets/vermelhidao.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"}Vermelhidão ou coceira na mama e/ou ao redor do mamilo. Quando o câncer ainda não conseguiu penetrar nos tecidos, se manifesta externamente dessa maneira.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/descargaMamilar.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"} Descarga mamilar (eliminação de secreção), sem apertar. Nesses casos o tumor deve estar no início e alojado nos dutos mamários.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/nodulo.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"} 
                    Nódulo na mama, que está sempre presente e não diminui de tamanho.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/noduloAxila.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"} 
                    Edema na axila ou ao redor da clavícula. Isso demonstra que o câncer está avançando pelos gânglios linfáticos.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../assets/abaulamentoDaMama.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"\t"}{"\t"}{"\t"}{"\t"} 
                    Abaulamento da mama, endurecimento ou retração da pele (casca de laranja), devido a degeneração das glândulas mamárias. Também são indicativos de um processo inflamatório nos vasos que irrigam a região.{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}  OBS.: A paciente pode sentir dor ou não junto a esse sinais e sintomas.{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"} Quais os tipos mais comuns? O tipo histológico mais comum para o câncer de mama feminina é o carcinoma de células epiteliais, que se divide em lesões in situ e invasoras. Os carcinomas mais frequentes são os ductais ou lobulares.
                </Text>
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
        top: 66,
        width:280,
        height: 87,
        left: 48
    },
    headerText:{
        textAlign: "right",
        fontSize: 34
    },
    textContainer:{
        alignItems: "center",
        marginTop: 15
    },
    firstText:{
        top:40,
        fontSize:20,
        textAlign: "left",
        letterSpacing: 0,
        opacity: 1,
        width: 300,
        lineHeight: 27,
        color: "#707070"
    },
    text:{
        marginTop:25,
        fontSize:20,
        textAlign: "left",
        letterSpacing: 0,
        opacity: 1,
        width: 300,
        lineHeight: 27,
        color: "#707070"
    },
    firstImg:{
        width:206,
        height:206,
        marginTop: 80
    },
    img:{
        width:206,
        height:206,
    },
    imgContainer:{
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