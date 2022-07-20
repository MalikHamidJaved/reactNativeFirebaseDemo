/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,

  KeyboardAvoidingView,
  Image,
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
import { TouchableOpacity } from 'react-native-gesture-handler';

import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:
        process.env.NODE_ENV === 'production' ? '' : 'hamidjaved1995@gmail.com',
      password: process.env.NODE_ENV === 'production' ? '' : 'mmmmmm',
      isLoading: true,
      isForgetPass: false,
      isSentEmail: false,
      isShowResetPassword: false,
      isShowEnterCode: false,
      storageData: null,
      isOrderSubmitting: false,
      isChecked: true,
      donations:[
      ]
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

    firestore()
    .collection('posts')
    .get()
    .then(querySnapshot => {
     
      var output = querySnapshot.docs.map(doc => ({
        
        title: doc.data().title,
        fileref: doc.data().fileref,
        postId: doc.data().postId,
        userId: doc.data().userId,
      }))
            this.setState({donations:output,
            isLoading:false});

    });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }
  

  render() {

    let listItemView = (item) => {
      console.log("item ",item);
      return (
  

        <MenuItem item={item} navigation={this.props.navigation}/>
      );
    };
    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
      <SHeader title="Home"/>

      {this.state.isLoading ? (
                      <ActivityIndicator size="large" color="#2f4270" />
                    ) : (
                      <View style={styles.containerbox}>  

                      
<FlatList
      style={{
        flex:1,
        width:'100%'
      }}
            data={this.state.donations}
            extraData={this.state.donations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
          <View
                    style={{
                      width: (Dimensions.get('window').width) ,height:50,
                      alignSelf: 'stretch',
                      marginTop: 10,
                    }}>
         <FlyButton
                        style={{width: '100%',height:50}}
                        onPress={e => {
                           console.log('add button clicked')
                          this.props.navigation.navigate('PostNow');
                        }}
                        title="Add post"
                      />
                      </View>
                      </View>
                    )
                    }
      


        </KeyboardAvoidingView>
    );
  }
}


export default Home;
