/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  BackHandler,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../../assets/css/style';
import {connect} from 'react-redux';
// import axios from 'axios';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';
import { LOGIN_URL } from '../../config/env';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:
        process.env.NODE_ENV === 'production' ? '' : 'hamidjaved1995@gmail.com',
      password: process.env.NODE_ENV === 'production' ? '' : 'mmmmmm',
      isLoading: false,
      isForgetPass: false,
      isSentEmail: false,
      isShowResetPassword: false,
      isShowEnterCode: false,
      storageData: null,
      isOrderSubmitting: false,
      isChecked: true,
    };

    this._componentWillLoad();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor : '#660165',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  componentWillUnmount() {
    this.setState({isLoading: false, isOrderSubmitting: false});
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('AuthLoading');
      return true;
    });
  }

  async _componentWillLoad() {
    let storageData = await AsyncStorage.getItem('user');

    if( storageData != "" &&  storageData != null && !storageData){
      this.props.navigation.navigate('Home');
  }
    this.setState({storageData});
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }

  render() {
    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>

        <ImageBackground
          
          style={[
            {
                resizeMode: 'stretch',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
            
              height: (Dimensions.get('window').height) - 70,
            },
          ]}>
          <StatusBar backgroundColor ={global.backGroundColor } barStyle="light-content" />
        
           
              <View style={[styles.fromgprow,{
              }]}>
                       <Image style={{
                           height:200,
                           width:200
                       }} source={require('../../../assets/images/charity.png')} />
                  </View>

              <View
                style={[
                 
                  { alignItems: 'center'},
                ]}>
               

                  <View 
                  style={{
                    width: (Dimensions.get('window').width) - 70,
                    flexDirection:'column',
               height:100
                    }}>

               
                
                      <FlyButton
                        style={{width: '100%'}}
                        onPress={e => {
                          this.props.navigation.navigate('SignUp');
                        }}
                        title="Sign Up"
                      />
                 

                
                      <FlyButton
                        style={{width: '100%',marginTop:20 }}
                        onPress={e => {
                          this.props.navigation.navigate('Login');
                        }}
                        title="Sign In"
                      />
                 
                  </View>
               

              
              </View>
      
        </ImageBackground>

        </KeyboardAvoidingView>
    );
  }
}


export default Splash;
