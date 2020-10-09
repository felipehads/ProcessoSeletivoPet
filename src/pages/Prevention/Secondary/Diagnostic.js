import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../../../components/HeaderBack';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View>
                <HeaderBack textoPrincipal="PREVENÇÃO" navigation = {() => navigation.navigate("Secondary")}/>
            </View>
            <Text style={styles.pinkText}>
                Diagnóstico precoce
            </Text>
            <Text style={styles.text}>
                {"\n\t"}Refere-se as ações de
                diagnóstico para a identificação de
                casos de câncer na fase inicial e
                lesões de indivíduos sintomáticos.
                {"\n\t"}O tripé do diagnóstico
                precoce é: deixar a população
                alerta para os sinais e sintomas
                suspeitos de câncer; profissionais de
                saúde capacitados para avaliação
                dos casos suspeitos; e sistemas e
                serviços de saúde preparados para
                garantir a confirmação diagnóstica
                oportuna, com qualidade e
                garantia da integralidade da
                assistência em toda a linha de
                cuidado.
                {"\n\t"}Além disso, diminuir as
                barreiras de acesso e qualificar a
                demanda e a oferta de serviços, de
                forma a possibilitar a confirmação
                diagnóstica do câncer de mama o
                mais precocemente possível, bem
                como garantir a integralidade e a
                continuidade do cuidado na rede
                de serviços.
            </Text>
            <Text style={styles.bigText}>
                Estratégias de conscientização
            </Text>
            <Text style={styles.text}>
                {"\n\t"}Podem ser realizadas
                através de ações de educação
                para mudar conhecimentos e
                atitudes sobre o câncer de mama e 
                desconstruir mitos sobre a doença.
                {"\n\t"}Essas estratégias podem 
                ocorrer por meio de medidas de 
                comunicação de massa (campanhas) 
                e melhoria do conhecimento e das 
                atitudes sobre câncer em geral, com 
                intervenções educativas individuais, 
                capacitação dos médicos generalistas e 
                demais profissionais de saúde da atenção 
                primária que participem do atendimento 
                ou das atividades educativas para essa 
                população.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev11.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA recomenda a 
                implementação de estratégias 
                de conscientização para o 
                diagnóstico precoce do câncer 
                de mama. 
            </Text>
                      
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:10,
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
        alignItems: "center",
        marginVertical: 15
    },
    img:{
        width: 200,
        height: 200
    }
})
