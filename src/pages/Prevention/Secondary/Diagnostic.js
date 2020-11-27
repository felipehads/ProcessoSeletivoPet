import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Diagnóstico{"\n"}Precoce
                </Text>
            </View>
            <View style={styles.firstText}>
                <Text style={styles.text}>
                    Refere-se as ações de diagnóstico para a identificação de casos de câncer na fase inicial e lesões de indivíduos sintomáticos.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img1} source={require('../../../../assets/tripe.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    O tripé do diagnóstico precoce é: deixar a população alerta para os sinais e sintomas suspeitos de câncer; profissionais de saúde capacitados para avaliação dos casos suspeitos; e sistemas e serviços de saúde preparados para garantir a confirmação diagnóstica oportuna, com qualidade e garantia da integralidade da assistência em toda a linha de cuidado. Além disso, diminuir as barreiras de acesso e qualificar a demanda e a oferta de serviços, de forma a possibilitar a confirmação diagnóstica do câncer de mama o mais precocemente possível, bem como garantir a integralidade e a continuidade do cuidado na rede de serviços.{"\n"}{"\n"} Estratégias de conscientização{"\n"}{"\n"} Podem ser realizadas através de ações de educação para mudar conhecimentos e atitudes sobre o câncer de mama, além de desconstruir mitos sobre a doença. Essas estratégias podem ocorrer por meio de medidas de comunicação em massa (campanhas), com melhoria do conhecimento e das atitudes sobre câncer em geral, através de intervenções educativas individuais, capacitação dos médicos generalistas e demais profissionais de saúde da atenção primária que participem do atendimento ou das atividades educativas para essa população.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img2} source={require('../../../../assets/prevencaao.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                     O INCA recomenda a implementação de estratégias de conscientização para o diagnóstico precoce do câncer de mama. {"\n"}{"\n"}Identificação de sinais e sintomas{"\n"}{"\n"} Se caracteriza por informar a população feminina sobre as mudanças habituais das mamas em diferentes momentos do ciclo de vida e a divulgação dos principais sinais e sintomas do câncer de mama. Além de estimular às mulheres a procurarem os profissionais de saúde sempre que apresentarem dúvidas relacionadas as alterações suspeitas na mama.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img3} source={require('../../../../assets/sinais_sintomas.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.lastText}>
                1- Qualquer nódulo mamário em mulheres com mais de 50 anos; Nódulo mamário em mulheres com mais de 30 anos, que persistem por mais de um ciclo menstrual; Nódulo mamário de consistência endurecida e fixo ou que vem aumentando de tamanho, em mulheres adultas de qualquer idade. {"\n"}2- Descarga papilar sanguinolenta unilateral. {"\n"}3- Lesão eczematosa da pele que não responde a tratamentos tópicos. {"\n"}4- Homens com mais de 50 anos com tumoração palpável unilateral. {"\n"}5- Presença de linfadenopatia axilar. {"\n"}6- Aumento progressivo do tamanho da mama com a presença de sinais de edema, como pele com aspecto de casca de laranja. {"\n"}7- Retração na pele da mama. {"\n"}8- Mudança no formato do mamilo. {"\n"}{"\n"}O INCA recomenda que os sinais e sintomas apresentados sejam considerados como de referência urgente para serviços de diagnóstico mamário. {"\n"}{"\n"}Confirmação diagnóstica em um único serviço{"\n"}{"\n"} A organização da rede de atenção à saúde é fundamental para o sucesso das ações de diagnóstico precoce e deve contemplar alguns aspectos centrais, tais como: facilidade de acesso; agilidade no tempo até o atendimento e a resolução das necessidades de saúde; qualidade do processo de confirmação diagnóstica; garantia da integralidade e continuidade do cuidado.{"\n"} Toda a investigação diagnóstica deve ser feita em um único centro de referência e em apenas um dia, incluindo exames de imagem, citologia e biópsia. Além da possibilidade de diminuir o tempo até a confirmação diagnóstica, essa conduta concentraria a expertise assistencial, tanto em exame clínico quanto em métodos de imagem, citologia e biópsia mamária, o que poderia diminuir os casos falso-negativos no processo de investigação.{"\n"}{"\n"} O INCA recomenda que toda a avaliação diagnóstica do câncer de mama, após a identificação de sinais e sintomas suspeitos na atenção primária, seja feita em um mesmo centro de referência.
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
        top: 77,
        marginBottom:20
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        letterSpacing: -0.82,
        lineHeight: 41,
        fontWeight: "600"
    },
    firstText:{
        top: 110,
        alignItems: "center",
    },
    textContainer:{
        alignItems: "center",
        top:30
    },
    text:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 300,
        lineHeight: 41
    },
    lastText:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 300,
        lineHeight: 41,
        marginBottom: 69
    },
    imgContainer:{
        alignItems: "center",
        marginTop: 60
    },
    img1:{
        width:478,
        height:478
    },
    img2:{
        width:411,
        height:311
    },
    img3:{
        width:292,
        height:292
    }
})
