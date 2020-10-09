import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Prevencao")}/>
            </View>
            <View>
                <Text style={styles.pinkText}>
                    Primária
                </Text>
                <Text style={styles.text}>
                    {"\n\t"}Relaciona-se com o controle
                    dos fatores de risco modificáveis e
                    incentivo a adoção de
                    comportamentos protetores, visto
                    que estes aspectos podem ajudar a
                    reduzir cerca de 30% o risco de
                    desenvolver a doença.
                    {"\n\t"}Para mulheres com alto risco
                    de ter a doença pelos fatores
                    genéticos e hereditários, existem
                    também a mastectomia profilática
                    com reconstrução mamária e a
                    quimioprevenção.
                </Text>
                <Text style={styles.bigText}>
                    Fatores de risco
                    modificáveis e
                    comportamentos protetores
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img2} source={require("../../../assets/Prev1.png")}/>
                </View>
                <Text style={styles.text}>
                    •   Controlar o peso (IMC menor
                    que 30kg/m²) principalmente
                    na pós-menopausa{"\n"}
                    •   Alimentar-se de forma
                    balanceada e saudável
                    (ingestão de frutas, legumes,
                    azeite e alimentos ricos em 
                    ômega 3);{"\n"}
                    •   Praticar atividade física 
                    (de preferência movimentar-se todos 
                    os dias);{"\n"}
                    •   Amamentar
                </Text>
                <Text style={styles.bigText}>
                    Mastectomia profilática com reconstrução 
                    mamária para mulheres com alto risco 
                    de desenvolver o câncer de mama
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img1} source={require("../../../assets/Prev2.png")}/>
                </View>
                <Text style={styles.text}>
                    {"\n\t"}A redução absoluta do risco de 
                    câncer de mama varia de 2-7%, dependendo 
                    da idade de realização da cirurgia, 
                    geralmente até 40 anos. 
                    {"\n\t"}A decisão na indicação da 
                    cirurgia profilática bilateral deve ser 
                    discutida com a paciente levando-se em consideração 
                    todos os riscos e benefícios envolvidos.
                </Text>
                <Text style={styles.bigText}>
                    Quimioprevenção para mulheres 
                    com alto risco de desenvolver o 
                    câncer de mama
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img2} source={require("../../../assets/Prev3.png")}/>
                </View>
                <Text style={styles.text}>
                    {"\n\t"}De acordo com o INCA, o SUS não utiliza 
                    medicamentos quimiopreventivos
                    {"\n\t"}De acordo com a SBM: Pacientes com risco de Gail ≥ 1.7, 
                    mais de 35 anos de idade (pré ou pós-menopausa), 
                    expectativa de vida superior a 10 anos ou com carcinoma 
                    lobular in situ  tamoxifeno 20mgdia por 5 anos. 
                    Pacientes com risco de Gail ≥ 1.7, mais de 35 anos de idade (pós-menopausa), 
                    expectativa de vida superior a 10 anos ou com carcinoma 
                    lobular in situ: raloxifeno 60mg/dia ou tamoxifeno 20mg/dia ou 
                    anastrozol 1mg ou examestane 25mg/dia por 5 anos.
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
    pinkText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "pink",
        textAlign: "center",
        marginVertical: 10
    },  
    bigText:{
        fontSize:25,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "justify",
        marginVertical: 10
    },
    text:{
        fontSize:18,
        textAlign: "justify",
        fontWeight: "600"
    },
    imgContainer:{
        flex:1,
        alignItems: "center"
    }, 
    img1:{
        height:200,
        width:200
    },
    img2:{
        height:160,
        width:300
    }
})
