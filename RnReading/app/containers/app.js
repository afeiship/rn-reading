import {StackNavigator, TabNavigator} from 'react-navigation';
import Splash from '../pages/splash/index';
import CategoryContainer from '../containers/category';
import MainContainer from '../containers/main';
import WebViewPage from '../pages/detail/index';
import Feedback from '../pages/feedback/index';
import About from '../pages/about/index';
import Gallery from '../pages/gallery/index';
import Login from '../pages/login/index';
import Customize from '../pages/customize/index';
import TabAdd from 'components/tab-add';

const TabContainer = TabNavigator(
  {
    Main: {screen: MainContainer},
    Category: {screen: CategoryContainer},
    Customize: {screen: Customize},
    Feedback: {screen: Feedback},
    About: {screen: About}
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarComponent: TabAdd,
    headerMode: 'screen',
    tabBarOptions: {
      activeTintColor: '#122432',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: {screen: Splash},
    Category: {
      screen: CategoryContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Web: {screen: WebViewPage},
    gallery: {screen: Gallery},
    login: {screen: Login}
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#122432'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;
