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
// import axios from 'axios';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';
import { SIGN_UP_URL } from '../../config/env';
import auth from '@react-native-firebase/auth';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:
        process.env.NODE_ENV === 'production' ? '' : 'hamidjaved1995@gmail.com',
      password: process.env.NODE_ENV === 'production' ? '' : 'mmmmmm',
      cPassword: process.env.NODE_ENV === 'production' ? '' : 'mmmmmm',
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
    if (!this.state.email) {
      alert('Please enter a valid email');
      return;
    }

    if (!this.state.password) {
      alert('Please enter a valid password');
      return;
    }

    if (this.state.password != this.state.cPassword) {
      alert('Password mismatched');
      return;
    }

    this.setState({
      isLoading: true,
    });

    try {
      var user = await auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        isLoading:false
      });
      console.log(user);
      alert("User created please loggin now");
    } catch (e) {
      this.setState({
        isLoading: false,
      });
      alert(e);

      console.log(e);
    }

    // fetch(SIGN_UP_URL, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({user:{
    //     email: this.state.email,
    //     password: this.state.password,
    //     password_confirmation: this.state.password,
    //   }})
    // })
    // .then((response) => response.json())
    // .then( async (json) => {
    //   console.log(json);
    //   this.setState({isLoading: false});
    //   if(json.success){
    //     Alert.alert("Alert","User created please go back and login.",[
    //       { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
    //     ]
    //     )
    //         }else{
    //           Alert.alert("Alert",json.error?json.error:json.message,[
    //       { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
    //     ]
    //     );
    //   }
    // });

    
    // this.props.navigation.navigate('Home');
    
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
    let storageData = await AsyncStorage.getItem('submitdata');

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

<Text style={styles.topheader}> Sign Up</Text>

<Text style={[styles.topSubHeader,{color:global.subHeaderTextColor }]}>
  {' '}
  Let's register you to serve.{' '}
</Text>



                  <View style={[styles.fromgprow]}>
                    <InputFields
                      placeholder="Email "
                      value={this.state.email}
                      returnKeyType={'next'}
                      ref={input => {
                        this.email = input;
                      }}
                      onChangeText={email => this.setState({email})}
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



                  <View style={[styles.fromgprow]}>
                    <InputFields
                      placeholder="Confirm Password  "
                      value={this.state.cPassword}
                      returnKeyType={'next'}
                      ref={input => {
                        this.cPassword = input;
                      }}
                      secureTextEntry={true}
                      onChangeText={cPassword => this.setState({cPassword})}
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
                        title="Sign Up"
                      />
                    )}
                 
               
                      <FlyButton
                        style={{width: '100%',marginTop:20 }}
                        onPress={e => {
                          this.props.navigation.navigate('Login');
                        }}
                        title="Sign In"
                      />
                 
                 
               
                  </View>

                
                 
                  </View>
                
                 

                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}


export default SignUp;
