/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useEffect } from 'react';
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
import styles from '../../../assets/css/style';

import SHeader from '../Common/SettingHeader';
import { GiftedChat } from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

function Chat(props)  {
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    console.log("props ",global.selectedPost)

    const reference = firebase
  .app()
  .database('https://reactnativesample-d1514-default-rtdb.asia-southeast1.firebasedatabase.app/')
  .ref("chats/"+global.selectedPost.postId)
  .on('child_added', snapshot => {
    console.log('A new node has been added', snapshot.val());
    console.log('A new node has been added', snapshot.val()._id);
    
    GiftedChat.append(previousMessages, messages)
  });

   
  }, [])

  const onSend = useCallback((messages = []) => {
   
    setMessages(previousMessages => {
      GiftedChat.append(previousMessages, messages)
    })

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


  }, []);

 
    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
      <SHeader title="Chat" 
                             onBackPress={() =>global.navigation.navigate("Home")}
      showBack={true}/>

<GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      showAvatarForEveryMessage={true}
      user={{
        _id: auth().currentUser.email,
      }}
    />
        </KeyboardAvoidingView>
    );
  
}


export default Chat;
