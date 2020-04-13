import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from './pages/Login'
import Main from './pages/Main';
import Pagar from './pages/Pagar';
import Scan from './pages/Scan';
import Produto from './pages/Produto';
import Configs from './pages/Configs';
import Info from './pages/Info';

const Routes = createAppContainer(

  createMaterialBottomTabNavigator({
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Menu',
          tabBarBadge:true,
          /*tabBarIcon: ({ tintColor }) => (
            <View>
             <Icon style={[{color:tintColor}]} Size={25} name={'ios-home'}/> 
            </View>
          ),*/
        },
      },
      Pagar: {
        screen: Pagar,
        navigationOptions: {
          title: 'Pagar',
        },
      },
      Configs: {
        screen: Configs,
        navigationOptions: {
          title: 'Configs',
        },
      },
      Scan: {
        screen: Scan,
        navigationOptions: {
          title: 'Scan',
        },
      },
      Info: {
        screen: Info,
        navigationOptions: {
          title: 'Info',
        },
      },
      Login:{
        screen: Login,
        navigationOptions: {
          tabBarVisible:false,
          title:''
        },
      },
    },  {
          labeled :true,
          shifting : false,
          initialRouteName: 'Login',
          activeColor: '#202020',
          inactiveColor: '#383838',

          barStyle: {
            borderTopColor:'#383838',
            borderTopWidth:2,
            backgroundColor: '#ededed',
          },
        }    
    ),
);

export default Routes;
