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
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../../assets/css/style';
import {connect} from 'react-redux';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';
import { LOGIN_URL } from '../../config/env';
import auth from '@react-native-firebase/auth';


class Login extends React.Component {
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

  async onSubmitForm() {
    if (!this.state.username) {
      alert('Please enter a valid email');
      return;
    }

    if (!this.state.password) {
      alert('Please enter a valid password');
      return;
    }

    this.setState({
      isLoading: true,
    });
    // this.props.navigation.navigate('Home');

    // console.log(LOGIN_URL);

    try {
      var user = await auth().signInWithEmailAndPassword(this.state.username, this.state.password);
      console.log("user logged in");
      this.setState({
        isLoading:false
      });
      console.log(user);
      this.props.navigation.navigate('Home');
    } catch (e) {
      this.setState({
        isLoading: false,
      });
      console.log(e);
    }
    


    
  }

  async onForgotPassword() {
    this.props.navigation.navigate('ForgetPassword');
  }

  componentWillUnmount() {
    this.setState({isLoading: false, isOrderSubmitting: false});
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }

  async _componentWillLoad() {

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
              backgroundColor : global.backGroundColor 
            },
          ]}>
          <StatusBar backgroundColor ={global.backGroundColor } barStyle="light-content" />
          <View
            style={[
              styles.containerbox,
              {
                justifyContent: 'center',
                width: '100%',
              },
            ]}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                width: '100%',
              }}
              style={{flex: 1}}>
              <View
                style={[
                  styles.SignUpwraper,
                  { alignItems: 'center',alignSelf:'center'},
                ]}>
                <View
                  style={[
                    
                    {
                     
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingBottom: 30,
                      paddingTop: 30,
                      alignItems: 'center',
                      borderRadius: 10,
                      alignSelf:'center'
                    },
                  ]}>
                  <Text style={styles.topheader}> Welcome</Text>

                  <Text style={[styles.topSubHeader,{color:global.subHeaderTextColor }]}>
                    {' '}
                    Let's find you a spot.{' '}
                  </Text>

                  <View style={[styles.fromgprow]}>
                    <InputFields
                      placeholder="Email "
                      value={this.state.username}
                      returnKeyType={'next'}
                      ref={input => {
                        this.username = input;
                      }}
                      onChangeText={username => this.setState({username})}
                    />
                  </View>
                  <View style={styles.fromgprow}>
                    <InputFields
                      placeholder="Password"
                      value={this.state.password}
                      returnKeyType={'done'}
                      ref={input => {
                        this.password = input;
                      }}
                      onChangeText={password => this.setState({password})}
                      secureTextEntry={true}
                    />
                  </View>

              
                   
        

                 

                  <View 
                  style={{
                    width: (Dimensions.get('window').width) - 70,
                    flexDirection:'column',
                    justifyContent:'space-between'
                    }}>

                  <View
                    style={{
                      width: (Dimensions.get('window').width) - 70,
                      alignSelf: 'stretch',
                      marginTop: 10,
                    }}>
                {this.state.isLoading? (
                      <ActivityIndicator size="large" color="#2f4270" />
                    ) : (
                      <FlyButton
                        style={{width: '100%'}}
                        onPress={e => {
                          this.onSubmitForm(e);
                        }}
                        title="Sign In"
                      />
                    )}
                 
                  </View>

                  <Text
                        style={{
                          fontFamily: 'OpenSans-Regular',
                          marginTop: 14,
                          color: global.subHeaderTextColor ,
                          marginRight: 10,
                          alignSelf:'center',
                          textDecorationLine: 'underline',
                        }}>or
                      </Text>
                  <View
                    style={{
                      width: (Dimensions.get('window').width) - 70,
                      alignSelf: 'stretch',
                      marginTop: 10,
                    }}>
                       <FlyButton
                        style={{width: '100%'}}
                        onPress={e => {
                          this.props.navigation.navigate("SignUp");
                        }}
                        title="Sign Up"
                      />
                    {/* {this.state.isLoadingFacebook ? (
                      <ActivityIndicator size="large" color="#2f4270" />
                    ) : (
                      <FlyButton
                        style={{width: '100%'}}
                        onPress={e => {
                          this.onSubmitForm(e);
                        }}
                        title="Sign In using facebook"
                      />
                      )} */}
                  </View>
                  </View>
                  <Text
                        style={{
                          fontFamily: 'OpenSans-Regular',
                          marginTop: 14,
                          color: global.subHeaderTextColor ,
                          marginRight: 10,
                          alignSelf:'center',
                        }}>By procceding you also agree to the terms of service 
                      </Text>
        
                 

                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}


export default Login;
