import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatorContainer from './src/Router/AppNavigationContainer';

const App = () => {
  return( 
  <NavigationContainer>
    <AppNavigatorContainer />
  </NavigationContainer>
  );
  }

export default App;
