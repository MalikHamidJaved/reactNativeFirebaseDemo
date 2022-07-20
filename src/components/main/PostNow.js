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
import { LOGIN_URL } from '../../config/env';
import MenuItem from '../Common/MenuItem';
import SHeader from '../Common/SettingHeader';
import { openDatabase } from 'react-native-sqlite-storage';
import firebaseDatabase from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import * as ImagePicker from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
import auth from '@react-native-firebase/auth';

import * as Progress from 'react-native-progress';

class PostNow extends React.Component {
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
      donationAmount: '',
      image:require("../../../assets/images/ic_history.png"),
      imageSelected:false
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
    if (!this.state.donationAmount) {
      alert('Please enter a valid desrciption');
      return;
    }

    this.setState({
      isLoading:true
    })
    

    this.uploadImage()
 
   
  }

  


  componentWillUnmount() {
    this.setState({isLoading: false, isOrderSubmitting: false});
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('AuthLoading');
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
   selectImage(){
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
        this.setState({
          image:source,
          imageSelected:true
        })
        console.log(source)
      }
    });
  
  }
  
   async uploadImage() {


    if(this.state.imageSelected){
      const { uri } = this.state.image;
      const filename = new Date().getMilliseconds()+"";
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      // setUploading(true);
      // setTransferred(0);
      const task = storage()
        .ref(filename)
        .putFile(uploadUri);
      // set progress state
      task.on('state_changed', snapshot => {
        // setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        // );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
        alert(e)
        this.setState({
          isLoading:false
        })
        
      }

      var navigation = this.props.navigation;
    var amount = this.state.donationAmount;
    var fileref = filename;
    var userId = auth().currentUser.email;
    var postId = new Date().getMilliseconds()+"";
    console.log("file ref = "+fileref)
    
    const ref = firestore().collection('posts'); 

    
    ref.add({
      postId:postId,
      title:amount,
     fileref:fileref,
     userId:userId
  }).then(() => {
      console.log('post added!');
      this.setState({
        isLoading:false
      })
    });
    this.setState({
      isLoading:false
    })

    }else{
      var navigation = this.props.navigation;
    var amount = this.state.donationAmount;
    var fileref = "";
    var userId = auth().currentUser.email;
    var postId = new Date().getMilliseconds()+"";
    console.log("file ref = "+fileref)
    
    const ref = firestore().collection('posts'); 

    
    ref.add({
      postId:postId,
      title:amount,
     fileref:fileref,
     userId:userId
  }).then(() => {
      console.log('post added!');
      this.setState({
        isLoading:false
      })
    });
    this.setState({
      isLoading:false
    })
    }


    

    
    alert('data posted')
    this.props.navigation.navigate("Home")
    // setUploading(false);
    
    // setImage(null);
  }

  render() {


 


    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
      <SHeader title="Details" 
                             onBackPress={() =>this.props.navigation.navigate("Home")}
      showBack={true}/>

        <ImageBackground
          
          style={[
            {
                resizeMode: 'stretch',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
        
                alignContent:'center',
                alignItems:'center',
              height: (Dimensions.get('window').height) - 70,
            },
          ]}>
              <StatusBar backgroundColor ={global.backGroundColor } barStyle="light-content" />
        
           

                    <View style={[styles.fromgprow,{width:'90%'}]}>
                    <InputFields
                      placeholder="Description"
                      value={this.state.donationAmount}
                      returnKeyType={'done'}
                      ref={input => {
                        this.donationAmound = input;
                      }}
                      onChangeText={donationAmount => this.setState({donationAmount})}
                    />

                  </View>
               
               <TouchableOpacity 
               onPress={ e =>{
                 this.selectImage()
               }}>
                 <Image style={{
                   width:200,
                   height:200
                 }}
                 source={this.state.image}/>
                 
                 </TouchableOpacity>
                  

              
     
                  <View
                    style={{
                      width: (Dimensions.get('window').width) ,
                      height:50,
                      alignSelf: 'stretch',
                      marginTop: 10,
                      marginStart:20
                    }}>
                    {this.state.isLoading ? (
                      <ActivityIndicator size="large" color="#2f4270" />
                    ) : (
                      <FlyButton
                        style={{width: (Dimensions.get('window').width)-40 }}
                        onPress={e => {
                          this.onSubmitForm(e);
                        }}
                        title="Post Now "
                      />
                      )}
                  </View>
        </ImageBackground>

        </KeyboardAvoidingView>
    );
  }
}


export default PostNow;
