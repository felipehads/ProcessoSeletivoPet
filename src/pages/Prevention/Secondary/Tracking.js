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
                Rastreamento
            </Text>
            <Text style={styles.text}>
                {"\n\t"}Refere-se a aplicação de
                testes ou exames em uma
                população sem sinais e sintomas
                sugestivos da doença, para
                identificar possíveis alterações
                sugestivas de câncer e,
                posteriormente, encaminhar as
                mulheres com resultados anormais
                para investigação diagnóstica.
                {"\n\t"}Cabe ressaltar, que as
                recomendações para os exames
                estão associadas a diminuição
                comprovada da morbimortalidade
                do câncer de mama.
            </Text>
            <Text style={styles.bigText}>
                Mamografia
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É uma radiografia das
                mamas feita por um mamórafo
                (equipamento de raio-X), que
                identifica alterações suspeitas de
                câncer antes do surgimento dos
                sintomas.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev4.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA recomenda a 
                realização desse exame de 50 
                à 69 anos a cada dois anos. 
                Além disso, mulheres com risco 
                aumentado de desenvolver câncer 
                de mama  devem iniciar o acompanhamento 
                aos 35 anos.
                {"\n\t"}A SBM recomenda de 40 à 69 anos 
                anualmente.
                {"\n\t"}A mulher com casos de câncer 
                de mama e/ou ovário na família 
                (mãe, irmã ou filha), ou mutações 
                genéticas,  deverá começar fazer a 
                mamografia mais cedo, conforme 
                orientação do seu mastologista.
            </Text>
            <Text style={styles.bigText}>
                Autoexame das mamas
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É o procedimento em que a 
                mulher observa e palpa as próprias 
                mamas e as estruturas anatômicas 
                acessórias, visando a detectar 
                mudanças ou anormalidades que 
                possam indicar a presença de um câncer.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev5.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}Entretanto, não é mais 
                recomendado, o que o INCA e a 
                SBM indicam é o autoconhecimento 
                das mamas, que consiste nas medidas 
                de palpação das mamas para 
                familiarização dos aspectos 
                normais e identificação precoce 
                de eventuais alterações, sem 
                necessidade de que seja utilizada 
                uma técnica de autoexame ou de 
                seguir uma periodicidade regular 
                e fixa, valorizando a descoberta 
                casual de pequenas alterações 
                mamárias suspeitas.
            </Text>
            <Text style={styles.bigText}>
                Exame clínico das mamas
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É semelhante ao autoexame, 
                porém é realizado pelo profissional 
                médico ou enfermeiro, e é mais 
                especifico pois inclui uma avaliação 
                mais criteriosa, iniciando com a inspeção 
                estática e dinâmica, a palpação e 
                finalizando com a expressão mamária 
                (ordenha firme e delicada).
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev6.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA apresenta ausência 
                para recomendação desse exame, 
                pois o balanço entre possíveis 
                danos e benefícios é incerto. 
                {"\n\t"}A SBM preconiza que 
                este deve ser efetuado por 
                profissional qualificado e 
                com frequência anual a partir 
                dos 35 anos de idade.
            </Text>
            <Text style={styles.bigText}>
                Ressonância nuclear magnética
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É um exame que mostra 
                imagens em alta definição, 
                através de campos  magnéticos 
                e pulsos de radiofrequência. 
                Apresenta alta sensibilidade e 
                pode detectar canceres de mama 
                que a mamografia e a ultrassonografia 
                não conseguem. Além disso, ao 
                contrário da mamografia, a 
                ressonância magnética não utiliza 
                radiação ionizante.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev7.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}Apesar disso, o INCA e a 
                SBM são contra esse tipo de 
                rastreamento para a população 
                geral, pois tem alto custo e 
                baixa disponibilidade e, por 
                isso, apenas em casos específicos, 
                pode ser realizada em mulheres com 
                alto risco de desenvolver a doença.
            </Text>
            <Text style={styles.bigText}>
                Ultrassonografia
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É um exame de imagem realizado 
                pelo aparelho transdutor que emite 
                ondas sonoras de alta frequência 
                causando vibração nos tecidos. 
                Porém essas imagens possuem 
                menos definição que a emitida 
                pela ressonância. O objetivo desse 
                exame é também de identificar 
                possíveis alterações nas mamas. 
                Muitas vezes, o uso da ultrassonografia 
                como teste de rastreamento é feito 
                com a intenção de complementar a 
                mamografia realizada em mulheres 
                jovens com mamas densas e resultado 
                negativo, visando a aumentar a 
                sensibilidade do rastreamento.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev8.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA e a SBM são contra 
                esse tipo de rastreamento.
            </Text>
            <Text style={styles.bigText}>
                Termografia
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É um exame de imagem que 
                registra a variação da temperatura 
                cutânea. Por se tratar de um 
                procedimento não invasivo, 
                não expõe a pessoa à radiação, 
                nem requer a compressão do tecido 
                da mama.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev9.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA é contra esse 
                tipo de rastreamento. A SBM 
                não  cita este tipo de exame 
                para rastreamento.
            </Text>
            <Text style={styles.bigText}>
                Tomossíntese
            </Text>
            <Text style={styles.text}>
                {"\n\t"}É um exame 3D que permite 
                melhor identificar nódulos e 
                lesões mamárias em mamas mais 
                densas, pois apresenta múltiplas 
                e finas imagens da mama obtidas a 
                partir de diferentes ângulos, 
                enquanto a mama permanece estática 
                e ligeiramente comprimida, permitindo 
                cortes finos, passíveis de serem 
                reconstruídos pelo computador em 
                imagens tridimensionais. Este tipo 
                de exame aumenta  a dose total de 
                radiação ionizante recebida pelas mulheres.
            </Text>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../../../assets/Prev10.png')}/>
            </View>
            <Text style={styles.text}>
                {"\n\t"}O INCA é contra esse tipo 
                de rastreamento. A SBM não  cita este 
                tipo de exame para rastreamento.
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
