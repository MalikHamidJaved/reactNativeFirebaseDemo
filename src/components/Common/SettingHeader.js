import React, {Component} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInputLayout} from 'rn-textinputlayout';
import styles from '../../../assets/css/style';
const {width, height} = Dimensions.get('window');

class SHeader extends Component {
  render() {
    return (
    
      <View
        style={{
          width: '100%',
          height: 50,
          // borderBottomColor: global.useDark ?'#ffffff':'#764943',
          // borderBottomWidth: 1,
          marginBottom: 10,
          backgroundColor : global.useDark?'#36393E':'#2f4270',
      
          paddingTop: 5,
        }}>
        <View
          style={{
            width: width - 20,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            {
              this.props.showBack?
            <TouchableOpacity style={{padding:5,marginBottom:5}} onPress={this.props.onBackPress}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 7,
                tintColor: '#ffffff',
              }}
              source={require('../../../assets/images/ic_back.png')}
            />
          </TouchableOpacity>
              :<View />
            }
        

          <Text
            style={{
              fontFamily: 'Lato-SemiBold',
              textAlign: 'center',
              fontSize: 22,
              color: '#ffffff',
              flex: 1,
              marginTop:5
            }}>
            {this.props.title}
          </Text>
          
          
        </View>
      </View>
    );
  }
}

export default SHeader;
