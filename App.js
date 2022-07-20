/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 import Login from './src/components/auth/Login';
 import Splash from './src/components/auth/Splash';
 
 import {  createSwitchNavigator, createAppContainer } from 'react-navigation';
 import SignUp from './src/components/auth/SignUp';
 import Home from './src/components/main/Home';
//  import ServiceDetail from './src/components/main/ServiceDetail';
 import PostNow from './src/components/main/PostNow';
import Chat from './src/components/main/Chat';
//  import History from './src/components/main/History';
 
 const AppContainer = createAppContainer(createSwitchNavigator(
   {
     AuthLoading: Splash,
     Login: Login,
     SignUp: SignUp,
     Home: Home,
     PostNow: PostNow,
     Chat: Chat,
   },
   {
     initialRouteName: 'AuthLoading',
   }
 ));
 

 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     flex:2
   };
 
   return (
     <SafeAreaView style={[backgroundStyle]}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <AppContainer />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 