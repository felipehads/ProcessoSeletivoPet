import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    RASTREAMENTO PARA POPULAÇÃO GERAL
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Refere-se a aplicação de testes ou exames em uma população sem sinais e sintomas sugestivos da doença, para identificar possíveis alterações sugestivas de câncer e, posteriormente, encaminhar as mulheres com resultados anormais para investigação diagnóstica.{"\n"} Cabe ressaltar, que as recomendações para os exames estão associadas a diminuição comprovada da morbimortalidade.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Mamografia</Text>
                </View>
                <Text style={styles.text}>
                    É uma radiografia das mamas feita por um mamórafo (equipamento de raio-X), que identifica alterações suspeitas de câncer antes do surgimento dos sintomas. 
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img1} source={require('../../../../assets/mamografia.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    O INCA recomenda a realização desse exame de 50 à 69 anos a cada dois anos. Além disso, mulheres com risco aumentado de desenvolver câncer de mama, relacionados aos fatores genéticos e hereditários, devem iniciar o acompanhamento com exme clínico das mamas e mamografia aos 35 anos. A SBM recomenda de 40 à 69 anos anualmente. A mulher com casos de câncer de mama e/ou ovário na família (mãe, irmã ou filha), ou mutações genéticas, deverá começar fazer a mamografia mais cedo, conforme orientação do seu mastologista.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Autoexame das mamas</Text>
                </View>
                <Text style={styles.text}>
                    É o procedimento em que a mulher observa e palpa as próprias mamas e as estruturas anatômicas acessórias, visando detectar mudanças ou anormalidades que possam indicar a presença de um câncer.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img2} source={require('../../../../assets/autoexame.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Entretanto, não é mais recomendado, o que o INCA e a SBM indicam é o autoconhecimento das mamas, que consiste nas medidas de palpação das mamas para familiarização dos aspectos normais e identificação precoce de eventuais alterações, sem necessidade de que seja utilizada uma técnica de autoexame ou de seguir uma periodicidade regular e fixa, valorizando a descoberta casual de pequenas alterações mamárias suspeitas.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}> Exame clínico das mamas</Text>
                </View>
                <Text style={styles.text}>
                    É semelhante ao autoexame, porém é realizado pelo profissional médico ou enfermeiro, e é mais especifico pois inclui uma avaliação mais criteriosa, iniciando com a inspeção estática e dinâmica, a palpação e finalizando com a expressão mamária (ordenha firme e delicada).
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img3} source={require('../../../../assets/exameClinico.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    O INCA apresenta ausência para recomendação desse exame, pois o balanço entre possíveis danos e benefícios é incerto. A SBM preconiza que este deve ser efetuado por profissional qualificado e com frequência anual a partir dos 35 anos de idade.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Ressonância nuclear magnética</Text>
                </View>
                <Text style={styles.text}>
                    É um exame que mostra imagens em alta definição, através de campos magnéticos e pulsos de radiofrequência. Apresenta alta sensibilidade e pode detectar canceres de mama que a mamografia e a ultrassonografia não conseguem. Além disso, ao contrário da mamografia, a ressonância magnética não utiliza radiação ionizante.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img4} source={require('../../../../assets/ressonanciaMagnetica.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Apesar disso, O INCA e a SBM recomendam ‘contra’ a realização deste tipo de procedimento para rastreamento para a população geral, pois tem alto custo e baixa disponibilidade e, por isso, apenas em casos específicos, pode ser realizada em mulheres com alto risco de desenvolver a doença.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Ultrassonografia
                    </Text>
                </View>
                <Text style={styles.text}>
                    É um exame de imagem realizado pelo aparelho transdutor que emite ondas sonoras de alta frequência causando vibração nos tecidos. Porém essas imagens possuem menos definição que a emitida pela ressonância. O objetivo desse exame é também de identificar possíveis alterações nas mamas. Muitas vezes, o uso da ultrassonografia como teste de rastreamento é feito com a intenção de complementar a mamografia realizada em mulheres jovens com mamas densas e resultado negativo, visando aumentar a sensibilidade do rastreamento.
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img5} source={require('../../../../assets/ultrassom.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    O INCA e a SBM recomendam ‘contra’ a realização deste tipo de procedimento para rastreamento.
                </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Termografia
                    </Text>
                </View>
                <Text style={styles.text}>                    
                    É um exame de imagem que registra a variação da temperatura cutânea. Por se tratar de um procedimento não invasivo, não expõe a pessoa à radiação, nem requer a compressão do tecido da mama.
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img6} source={require('../../../../assets/termografia.jpg')}/>
                </View>
                <View style={styles.refTextContainer}>
                    <Text style={styles.refText}>Referência: The Centre for Vibrant Health and wellness - Breast Thermal Imaging. Disponível em: https://www.drsalter.com/breast-thermal-imaging/ </Text>
                </View>
                
                <Text style={styles.text}>
                    O INCA recomenda 'contra' a realização deste procedimento para rastreamento e a SBM não o menciona.
                </Text>
                <Text style={styles.titleText}>
                    Tomossíntese
                </Text>
                <Text style={styles.text}> 
                    É um exame 3D que permite uma melhor identificação de nódulos e lesões em mamas mais densas, pois apresenta múltiplas e finas imagens da mama obtidas a partir de diferentes ângulos, enquanto a mama permanece estática e ligeiramente comprimida, permitindo cortes finos, passíveis de serem reconstruídos pelo computador em imagens tridimensionais. Este tipo de exame aumenta a dose total de radiação ionizante recebida pelas mulheres.
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img7} source={require('../../../../assets/tomo.jpg')}/>
                </View>
                <View style={styles.refTextContainer}>
                    <Text style={styles.refText}>Referência: SMITH, A. Fundamentals of Breast Tomosynthesis: Improving the Performance of Mammography. Figura 5: Reconstructed Tomosynthesis Slices. 2008. Disponível em: http://www.hologic.ca/sites/default/files/Fundamentals%20of%20Breast%20Tomosynthesis_WP-00007.pdf </Text>
                </View>
                
                <Text style={styles.lastText}>
                    O INCA recomenda 'contra' a realização deste procedimento para rastreamento e a SBM não o menciona.
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
        marginTop: 40,
        alignItems: "center",
        
    },
    headerText:{
        textAlign: "center",
        fontSize: 34,
        letterSpacing: -0.82,
        lineHeight: 41,
        fontWeight: "600",
        color: "#ee88b6"
    },
    textContainer:{
        alignItems: "center",
        marginTop: 30
    },
    titleText:{
        fontSize:18,
        textAlign: "center",
        letterSpacing: -0.43,
        opacity: 0.7,
        width: 300,
        lineHeight: 41,
        color: "#ee88b6",
        marginBottom: 10
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
    img1:{
        width:441,
        height:404,
    },
    img2:{
        width:346,
        height:368,
    },
    img3:{
        width:360,
        height:383,
    },
    img4:{
        width:335,
        height:320,
    },
    img5:{
        width:335,
        height:244,
        marginTop: 10
    },
    img6:{
        width:246,
        height:205,
        marginVertical: 5
    },
    img7: {
        width:198,
        height: 126,
        marginVertical: 5
    },
    imgContainer:{
        alignItems: "center",
    },
    refTextContainer:{
        alignItems: "center",
        marginVertical: 5
    },
    refText:{
        fontSize: 10,
        textAlign: "center"
    }
})
