import React, { Component } from 'react';

import {
    View,
    Dimensions,
    Text,Image,TouchableOpacity
} from 'react-native';
import styles from '../../../assets/css/style';

import storage from '@react-native-firebase/storage';
import FlyButton from './FlyButton';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
          image:require("../../../assets/images/ic_history.png"),
          imageUrlFetched:false
        };
    }
    
    render(){
    const item = this.props.item;
        if(item.fileref && !this.state.imageUrlFetched){
            storage()
            .ref('/' + item.fileref) //name in storage in firebase console
            .getDownloadURL()
            .then((url) => {
            //   setImageUrl(url);
              console.log("item url = "+url)
              this.setState({
                  
                  image:url,
                  imageUrlFetched:true
              })

              console.log("item uri = "+JSON.stringify(this.state.image))

            })
            .catch((e) => console.log('Errors while downloading => ', e));

        }
        return (
            <View
            key={item.id}
            style={{ borderRadius:20,padding:10,alignContent:'center',elevation:1 }}>

            <Text style={{
              margin:20,
              fontWeight:'bold'
            }}>{item.title}</Text>
            {
              item.fileref?
                <Image  
                source={this.state.image}
                style={{
                  height:250,
                  with:'90%',
                  alignSelf:'center'
                }}/>:
                <View />
              }
              
              <View
                    style={{
                      width: (Dimensions.get('window').width-20) ,height:50,
                      alignSelf: 'stretch',
                      marginTop: 10,
                    }}>

<TouchableOpacity  style={[{
            height:40,
            borderRadius:20,
            justifyContent: 'center',
            borderColor:'black',
            borderTopWidth:1,
            
        }]}
            onPress={e=>{
              console.log('chat button clicked')
              global.selectedPost = item
              global.navigation = this.props.navigation
                          this.props.navigation.navigate('Chat',{ postItem:item });
            }}>
            <Text
                style={{
                    fontFamily: 'Lato-Regular',
                    color: "black",
                    textAlign: 'center',
                    fontSize:16,
                }}>
                Comment post
            </Text>
        </TouchableOpacity>
     
            
          </View>
          </View>
        );
    }
}


export default MenuItem;