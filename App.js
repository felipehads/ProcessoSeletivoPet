import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import Sobre from './src/pages/Sobre';
import Information from './src/pages/Information';
import Doenca from './src/pages/Information/Doenca';
import Risco from './src/pages/Information/Risco';
import Prevencao from './src/pages/Information/Prevencao';
import Birads from './src/pages/Information/Birads';
import Primary from './src/pages/Prevention/Primary';
import Secondary from './src/pages/Prevention/Secondary';
import Diagnostic from './src/pages/Prevention/Secondary/Diagnostic';
import Tracking from './src/pages/Prevention/Secondary/Tracking';
import FirstPage from './src/pages/FirstPage';
import Q1 from './src/pages/Questionnaire/Q1';
import Q2 from './src/pages/Questionnaire/Q2';
import Q3 from './src/pages/Questionnaire/Q3';


const navigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({})
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: ({navigation}) => ({})
  },
  Information: {
    screen: Information,
    navigationOptions: ({navigation}) => ({})
  },
  Doenca: {
    screen: Doenca,
    navigationOptions: ({navigation}) => ({})
  },
  Risco: {
    screen: Risco,
    navigationOptions: ({navigation}) => ({})
  },
  Prevencao: {
    screen: Prevencao,
    navigationOptions: ({navigation}) => ({})
  },
  Birads: {
    screen: Birads,
    navigationOptions: ({navigation}) => ({})
  },
  Primary: {
    screen: Primary,
    navigationOptions: ({navigation}) => ({})
  },
  Secondary: {
    screen: Secondary,
    navigationOptions: ({navigation}) => ({})
  },
  Diagnostic: {
    screen: Diagnostic,
    navigationOptions: ({navigation}) => ({})
  },
  Tracking: {
    screen: Tracking,
    navigationOptions: ({navigation}) => ({})
  },
  FirstPage: {
    screen: FirstPage,
    navigationOptions: ({navigation}) => ({})
  },
  Q1: {
    screen: Q1,
    navigationOptions: ({navigation}) => ({})
  },
  Q2: {
    screen: Q2,
    navigationOptions: ({navigation}) => ({})
  },
  Q3: {
    screen: Q3,
    navigationOptions: ({navigation}) => ({})
  }
},
{
  initialRouteName: 'FirstPage',
  defaultNavigationOptions: {
    title: '',
    headerShown: false
    // headerStyle:{
    //   backgroundColor: "#00b3fe"
    // }
  }
});


export default createAppContainer(navigator)
