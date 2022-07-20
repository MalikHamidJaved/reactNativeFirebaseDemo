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
  FlatList,
} from 'react-native';
import styles from '../../../assets/css/style';
import SHeader from '../Common/SettingHeader';
import { openDatabase } from 'react-native-sqlite-storage';
import { GiftedChat } from 'react-native-gifted-chat';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

class Chat extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
     
      messages: [],
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
   
    console.log("props ",global.selectedPost)

    firebase
  .app()
  .database('https://reactnativesample-d1514-default-rtdb.asia-southeast1.firebasedatabase.app/')
  .ref("chats/"+global.selectedPost.postId)
  .on('child_added', snapshot => {
    console.log('A new node has been added', snapshot.val());
    console.log('A new node has been added', snapshot.val()._id);
    
    // GiftedChat.append(previousMessages, messages)

    const oldMessages = this.state.messages
    oldMessages.push(snapshot.val())

    this.setState({
        messages: oldMessages
    })
  });
  }

 
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }


   onSend(messages ) {
   
    console.log("messages = "+JSON.stringify(messages))
    // setMessages(previousMessages => {
    //   GiftedChat.append(this.state.messages? messages)
    // })


    var { _id, createdAt, text, user } = messages[0];

    _id = new Date().getMilliseconds()
    const reference = firebase
    .app()
    .database('https://reactnativesample-d1514-default-rtdb.asia-southeast1.firebasedatabase.app/')
    .ref("chats/"+global.selectedPost.postId)
    .push({
      
        _id,
        createdAt,
        text,
        user
      
    })


  };

  render() {
   
    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
        <SHeader title="Chat" 
        onBackPress={() =>global.navigation.navigate("Home")}
showBack={true}/>

<GiftedChat
messages={this.state.messages}
onSend={messages => this.onSend(messages)}
showAvatarForEveryMessage={true}
extraData={this.state}
inverted={false}
user={{
_id: auth().currentUser.email,
}}
/>
 </KeyboardAvoidingView>
    );
  }
}


export default Chat;
