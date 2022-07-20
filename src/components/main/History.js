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


class History extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
     
      donations: [],
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
   
    var db = openDatabase({ name: 'UserDatabase.db' });
    console.log('db open');

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_donation',
        [],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {

            var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
            this.setState({donations:
                temp});
                console.log('Results fetch', temp);

            // updateAllStates(
            //   res.donation,
            //   res.donation_date
                        //   );
          } else {
            alert('No donation found');
            // updateAllStates('', '', '');
          }
        }
      );
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
          <View
            key={item.id}
            style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Id: {item.id}</Text>
            <Text>Name: {item.donation}</Text>
            
          </View>
        );
      };
    return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
      <SHeader title="Donation History"     onBackPress={() =>this.props.navigation.navigate("Home")}
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
              
            },
          ]}>
              <StatusBar backgroundColor ={global.backGroundColor } barStyle="light-content" />
      
           
         
            
              <FlatList
            data={this.state.donations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
         
              
     
      
        </ImageBackground>

        </KeyboardAvoidingView>
    );
  }
}


export default History;
