import { Platform, StyleSheet, Dimensions } from 'react-native';
const helpchat = Dimensions.get('window').height - 120
const { width, height } = Dimensions.get('window');
var subHeadingTextColor = global.subHeaderTextColor;
module.exports = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },
  defultcolor: {
    color: '#000',
  },
  containerbox: {
    flex: 1,
    color: '#000',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  containerboxLogin: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin0_0: {
    marginTop: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 2,
    marginHorizontal: 0,
    padding: 0,
    alignItems: 'center',
    flexDirection: 'column',
    color: '#000',
  },
  borderWidth0: {
    borderWidth: 0,
  },
  fontFamilyregular: {
    fontFamily: 'OpenSans-regular',
  },
  fontFamilysemiBold: {
    fontFamily: 'OpenSans-semiBold',
  },
  fontFamilyBold: {
    fontFamily: 'OpenSans-Bold',
  },
  gpcountery: {
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 0,
    borderColor: '#ccc',
    color: '#D8D8D8',
    alignItems: 'center',
    marginBottom: 10,
  },
  googlefromGp: {
    marginBottom: 10,
    width: '100%',
  },
  datepiker: {
    marginBottom: 10,
    width: '100%',

    height: 50,
    alignContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  datepikerradius: {
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  
  popupContainer: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        marginTop: 70,
      },
      android: {
        marginTop: 40,
      },
    }),
  },
  containerchat: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 10,
  },
  orderitemcard: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    width: '94%',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  cardnotpadding: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 10,
  },
  sm_user_fit: {
    height: 55,
    width: 55,
    // borderColor: '#660165',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        borderRadius: 28,
        borderWidth: 1,
      },
      android: {
        borderRadius: 55,
        borderWidth: 1,
      },
    }),
  },
  sm_user_fit_40: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  fontbold: {
    fontFamily: 'OpenSans-Bold',
  },
  ticket_del_box: {
    width: '100%',
  },
  help_main: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sendinputbox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#efefef',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    color: '#2d2d2d',
  },
  user_help_chat_box: {
    flex: 1,
    width: '98%',
    // height:650,
  },
  chatinfo_help: {
    flex: 3,
    position: 'relative',
    height: helpchat,
    paddingBottom: 40,
  },
  help_user: {
    width: '100%',
    flexDirection: 'column',
    marginVertical: 10,
  },
  linkcolor: {
    color: '#0a3bef',
  },
  shadow: {
    borderColor: '#201B1B',
    borderWidth: 2,
    ...Platform.select({
      ios: {},
      android: {
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 5, height: 4 },
      },
    }),
  },
  shadowNew: {
    borderColor: '#fff',
    borderWidth: 0.1,
    ...Platform.select({
      ios: {},
      android: {
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 1,
        elevation: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 3, height: 3 },
      },
    }),
  },
  allheading: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 15,
    color: '#000000',
    fontFamily: 'OpenSans-Bold',
  },
  prodectname: {
    fontSize: 18,
    color: '#660165',
    marginBottom: 5,
    fontFamily: 'OpenSans-semiBold',
  },
  allparegraph: {
    fontSize: 14,
    color: '#2d2d2d',
    lineHeight: 23,
    marginVertical: 5,
    fontFamily: 'OpenSans-regular',
  },
  box: {
    flexDirection: 'column',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  fromgroup: {
    flexDirection: 'column',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  country_phone: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputlabel: {
    marginBottom: 3,
    fontSize: 12,
    color: '#A8A8A8',
    fontFamily: 'OpenSans-SemiBold',
  },
  borderRightleft: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#ccc',
  },
  marright10: {
    marginRight: 10,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  strong: {
    fontWeight: '700',
  },

  // all color //

  colorwhite: {
    color: '#fff',
  },

  colorBlack: {
    color: '#2D3A49',
  },
  colorpurple: {
    color: '#660165',
  },
  colorblack: {
    color: '#000',
  },
  colorred: {
    color: 'rgb(151, 16, 16)',
  },
  colorgreen: {
    color: '#00c50f',
  },
  coloryellow: {
    color: 'rgba(211, 166, 9, 0.75)',
  },

  // all bg color //

  bgpurple: {
    backgroundColor: '#660165',
  },
  bgred: {
    backgroundColor: 'rgb(151, 16, 16)',
  },
  bgyellow: {
    backgroundColor: 'rgba(211, 166, 9, 0.75)',
  },
  bggreen: {
    backgroundColor: '#00c50f',
  },

  // top header //
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width,

    backgroundColor : global.sheetBackgroundColor ,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  slidingPanelLayoutStyle: {
    width,
    height: "100%",
    backgroundColor : global.sheetBackgroundColor ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
  topheader: {
    fontFamily: 'Lato-Bold',
    color: '#2f4270',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:5,
    textAlign:'center',
    width:'100%',
    letterSpacing:1.2,
  },

  topSubHeader: {
    fontFamily: 'Lato-Light',
    color: subHeadingTextColor ,
    letterSpacing:1.2,
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },


  loginlogo: {
    width: '100%',
    backgroundColor : 'red',
    //  height:loginlogoheight,
    fontSize: 25,
    color: '#660165',
    justifyContent: 'center',
    fontWeight: '600',
  },

  singuplogo: {
    // height:singuplogoheight,
    width: 200,
    fontSize: 25,
    color: '#660165',
    justifyContent: 'center',
    fontWeight: '600',
  },
  inputbox: {
    backgroundColor : '#fff',
    color: '#000',
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 6,
    fontFamily: 'OpenSans-Regular',
  },

  inputdescription: {
    backgroundColor : '#fff',
    color: '#A8A8A8',
    fontWeight: '500',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D8D8D8',
    paddingHorizontal: 15,
    height: 100,
    fontFamily: 'OpenSans-Regular',
    borderRadius: 6,
  },



  descrcontainer: {
    flexDirection: 'row',
    paddingTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },


  descrcontainer: {
    flexDirection: 'row',
    paddingTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemtitel: {
    paddingHorizontal: 15,
    flex: 1,
  },


  // sing up//

  SignUpwraper: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    height: '100%',
    // alignItems:'center',
    paddingHorizontal: 25,
  },
  iconall: {
    height: 44,
    backgroundColor : '#fff',
    width: '12%',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderWidth: 0,
    borderColor: '#ccc',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },
  inputboxsingup: {
    color: global.authInputTextColor ,
    borderWidth: 0,
    borderColor: '#ccc',
    fontFamily: 'OpenSans-Regular',
    borderRadius: 6,
    fontSize: 14,
    height: 40,
    width: "100%"

  },
  loginbtn: {
    backgroundColor : '#660165',
    width: '100%',
    paddingVertical: 10,
    color: '#fff',
    marginVertical: 1,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderRadius: 20,
        overflow: 'hidden',
      },
      android: {
        borderRadius: 25,
      },
    }),
  },

  fromgprow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  termsconditison: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // login  css  //

  inputboxLogin: {
    color: global.authInputTextColor ,
    width: '100%',
    fontFamily: 'Lato-Light',
    borderRadius: 5,
    fontSize: 16,
    height: 50,
    paddingTop: 15,
    borderBottomWidth:.5,
    borderBottomColor:global.authInputTextColor 

  },

  inputBoxEdit: {
    color: global.authInputTextColor ,
    width: '100%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    height: 45,
    paddingLeft: 10,
  },

  inputBoxEditNoHeight: {
    color: '#000000',
    width: '100%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    overflow:'hidden',
    paddingLeft: 10,
  },


  borderStyleHighLighted: {
    borderColor: global.authInputTextColor ,
  },
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color:global.authInputTextColor 
  },
 
  underlineStyleHighLighted: {
    borderColor: global.authInputTextColor ,
    color:global.authInputTextColor ,
    textAlign:'center'
  }

});
