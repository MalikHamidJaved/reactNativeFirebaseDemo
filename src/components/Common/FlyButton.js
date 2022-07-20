import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../../../assets/css/style';

class FlyButton extends Component {

    
    render() {
        color = (!this.props.color)?'#2f4270':this.props.color;
        isHolo = (!this.props.isHolo)?false:true;
        onPress = this.props.onPress;
        textColor =  this.props.textColor?this.props.textColor:'#ffffff'

        if(isHolo){
            color = '#ffffff';
            textColor='#000000'
        }

        

        if(this.props.isInActive){
            color = '##2f4270';
            onPress = null;
        }
        
        return (
        <TouchableOpacity  style={[{
            backgroundColor : color,
            width: "100%",
            height:40,
            flex:1,
            borderRadius:20,
            justifyContent: 'center',
            elevation:15,
            borderColor:'#EEC6C6',
            borderWidth:1,
            
        },this.props.style]}
            onPress={onPress}>
            <Text
                style={{
                    fontFamily: 'Lato-Regular',
                    color: textColor,
                    width: "100%",
                    textAlign: 'center',
                    fontSize:16,
                }}>
                {this.props.title}
            </Text>
        </TouchableOpacity>
        );
    }
}


export default FlyButton;