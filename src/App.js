import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from "@react-navigation/web";
import HomeScreen from './Components/Home';
import DetailScreen from './Components/Detail';

const MyNavigation = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
})

const App = createBrowserApp(MyNavigation);

export default App;
