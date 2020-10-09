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
                <Image style={styles.img1} source={require('../../../../assets/Prev11.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA recomenda a 
                implementação de estratégias 
                de conscientização para o 
                diagnóstico precoce do câncer 
                de mama. 
            </Text>
            <Text style={styles.bigText}>
                Identificação de sinais e sintomas
            </Text>
            <Text style={styles.text}>
                {"\n\t"}Está relacionado a informar a 
                população feminina sobre as mudanças 
                habituais das mamas em diferentes 
                momentos do ciclo de vida e a divulgação 
                dos principais sinais e sintomas do câncer 
                de mama.
                {"\n\t"}Além disso, estimular também as 
                mulheres a procurarem esclarecimento 
                médico sempre que houver qualquer dúvida 
                em relação a alguma alteração suspeita nas 
                mamas.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img2} source={require('../../../../assets/Prev12.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n"}1.    Qualquer nódulo mamário 
                em mulheres com mais de 50 anos; 
                Nódulo mamário em mulheres com mais 
                de 30 anos, que persistem por mais de um 
                ciclo menstrual; Nódulo mamário de 
                consistência endurecida e fixo ou que 
                vem aumentando de tamanho, em mulheres 
                adultas de qualquer idade.
                {"\n"}2.    Descarga papilar sanguinolenta 
                unilateral.
                {"\n"}3.    Lesão eczematosa da pele que 
                não responde a tratamentos tópicos.
                {"\n"}4.    Homens com mais de 50 anos 
                com tumoração palpável unilateral.
                {"\n"}5.    Presença de linfadenopatia 
                axilar.
                {"\n"}6.    Aumento progressivo do tamanho da mama 
                com a presença de sinais de edema, como pele com 
                aspecto de casca de laranja.
                {"\n"}7.    Retração na pele da mama.
                {"\n"}8.    Mudança no formato do mamilo.
                {"\n\n\t"}O INCA recomenda que os sinais e sintomas 
                apresentados sejam considerados como de referência 
                urgente para serviços de diagnóstico mamário.
            </Text>
            <Text style={styles.bigText}>
                Confirmação diagnóstica em um único serviço
            </Text>
            <Text style={styles.text}>
                {"\n\t"}A organização da rede de 
                atenção à saúde é fundamental para o 
                sucesso das ações de diagnóstico precoce 
                e deve contemplar alguns aspectos centrais, 
                tais como: facilidade de acesso; agilidade 
                no tempo até o atendimento e a resolução 
                das necessidades de saúde; qualidade do 
                processo de confirmação diagnóstica; 
                garantia da integralidade e continuidade do cuidado.
                {"\n\t"}Toda a investigação diagnóstica deve 
                ser feita em um único centro de referência 
                e em apenas um dia, incluindo exames de 
                imagem, citologia e biópsia. 
                {"\n\t"}Além da possibilidade de diminuir 
                o tempo até a confirmação diagnóstica, 
                essa conduta concentraria a expertise 
                assistencial, tanto em exame clínico 
                quanto em métodos de imagem, citologia 
                e biópsia mamária, o que poderia diminuir 
                os casos falso-negativos no processo de investigação.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img1} source={require('../../../../assets/Prev13.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA recomenda que toda 
                a avaliação diagnóstica do câncer 
                de mama, após a identificação de 
                sinais e sintomas suspeitos na atenção 
                primária, seja feita em um mesmo centro 
                de referência. 
            </Text>
                      
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
        fontWeight: "600",
        marginHorizontal:10
    },
    imgContainer:{
        flex:1,
        alignItems: "center",
        marginVertical: 15
    },
    img1:{
        width: 240,
        height: 240
    },
    img2:{
        width: 240,
        height: 280
    }
})
