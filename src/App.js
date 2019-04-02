import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from "@react-navigation/web";
import Spinner from './Components/Spinner';
import Footer from './Components/Footer';
import HomeScreen from './Components/Home';
import DetailScreen from './Components/Detail';

const { lazy, Suspense } = React;

// const HomeScreen = lazy(() => import('./Components/Home'));

const MyNavigation = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
})

const App = createBrowserApp(MyNavigation);

// function App() {
//   return (
//       <Suspense fallback={<Spinner />}>
//           <Home />
//           <Footer />
//       </Suspense>
//     );
// }

export default App;
