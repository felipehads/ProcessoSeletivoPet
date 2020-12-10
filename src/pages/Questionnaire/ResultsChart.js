import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PieChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

export default ({navigation}) => {
    const screenWidth = Dimensions.get("window").width;

    if(navigation.getParam('risk', 0) <= navigation.getParam('averageFiveRisk', 0)){
        var color_risk = "#00ff00"
    }else{
        var color_risk = "#ff0000"
    }

    if(navigation.getParam('lifetime_patient_risk', 0) <= navigation.getParam('lifetime_average_risk', 0)){
        var color_lifetimerisk = "#00ff00"
    }else{
        var color_lifetimerisk = "#ff0000"
    }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        barPercentage: 0.5,
      };


      const data_risk = [
        {
          name: "%",
          percentage: navigation.getParam('risk', 0),
          color: color_risk,
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('risk', 0),
          color: "#d3d3d3",
        },
      ];

      const data_averagerisk = [
        {
          name: "%",
          percentage: navigation.getParam('averageFiveRisk', 0),
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('averageFiveRisk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

      const data_lifetimerisk = [
        {
          name: "%",
          percentage: navigation.getParam('lifetime_patient_risk', 0),
          color: color_lifetimerisk,
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('lifetime_patient_risk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

      const data_avglifetimerisk = [
        {
          name: "%",
          percentage: navigation.getParam('lifetime_average_risk', 0),
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('lifetime_average_risk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden={true}/>
            <Text style={styles.header}>
                CALCULADORA DE RISCO(GAIL)
            </Text>
            <Text style={styles.bigText}>
                GRÁFICOS
            </Text>
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama nos próximos 5 anos
            </Text>
            <Text style={styles.text}>
                Risco do Paciente:
            </Text>
            <PieChart
                data={data_risk}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"percentage"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[20, 20]}
                absolute
            />
            <Text style={styles.text}>
                Risco médio da população:
            </Text>
            <PieChart
                data={data_averagerisk}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"percentage"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[20, 20]}
                absolute
            />
            <Text style={styles.Boldtext}>
                Risco de desenvolver câncer de mama ao longo da vida
            </Text>
            <Text style={styles.text}>
                Risco do Paciente:
            </Text>
            <PieChart
                data={data_lifetimerisk}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"percentage"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[20, 20]}
                absolute
            />
            <Text style={styles.text}>
                Risco médio da população:
            </Text>
            <PieChart
                data={data_avglifetimerisk}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"percentage"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[20, 20]}
                absolute
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={styles.textButton}>
                        Voltar ao Menu
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    header: {
        fontSize:34,
        marginTop: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ee88b6"
    },
    bigText:{
        fontSize:28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    Boldtext:{
        fontSize:24,
        marginTop:10,
        marginHorizontal:10,
        textAlign: "justify",
        fontWeight: "bold"
    },
    text:{
        fontSize:20,
        marginHorizontal:15,
        textAlign: "justify",
        fontWeight: "bold"
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 40,
        borderRadius: 5,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})