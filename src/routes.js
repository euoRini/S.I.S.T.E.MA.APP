import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from './pages/Login'
import Main from './pages/Main';
import Pagar from './pages/Pagar';
import Scan from './pages/Scan';
import Produto from './pages/Produto';
import Produtos from './pages/Produtos';
import Info from './pages/Info';

const Routes = createAppContainer(
  createBottomTabNavigator({
      Login:{
        screen: Login,
        navigationOptions: {
          tabBarVisible:false,
        },
      },
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Menu',
        },
      },
      Pagar: {
        screen: Pagar,
        navigationOptions: {
          title: 'Pagar',
        },
      },
      Produto: {
        screen: Produto,
        navigationOptions: {
          title: 'Produto',
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
    },  {
          tabBarOptions: {
            activeTintColor: '#202020',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              borderTopColor:'#383838',
              borderTopWidth:2,
              backgroundColor: '#ededed',
            },
          }
        }
    , {
      defaultNavigationOptions: {
        header: false,
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#57A5AF',
        },
      },
    }),
    
);

export default Routes;
