import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput
} from 'react-native';

import styles from '../../../assets/css/style';


class InputFields extends Component {


    render() {
        keyboardType = this.props.keyboardType?this.props.keyboardType:'text';
        multiline = this.props.multiline?this.props.multiline:false;
        return (
            <View style={{width:'100%'}}>

         
                    <TextInput
                        style={[styles.inputboxLogin,{color:global.useDark?'#ffffff':'#000000'}]}

                        placeholder={this.props.placeholder}
                        placeholderTextColor={global.authInputTextColor }
                        underlineColorAndroid="transparent"
                        value={this.props.value}
                        returnKeyType={'next'}
                        ref={this.props.ref}
                        keyboardType={keyboardType}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        multiline={multiline}
                    />
            


            </View>);

    }
}


export default InputFields;