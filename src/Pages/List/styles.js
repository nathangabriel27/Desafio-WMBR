import { Dimensions, StyleSheet, } from 'react-native';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  imageBackground: {
    width: width,
   // height: 384,
  },
  main: {
    height: 125,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainTextTitleIcon: {
    fontSize: 26,
  },
  mainTextTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold'
  },
  mainTextSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,

  },


  body: {
    backgroundColor: colors.white,
    height: 300,
    marginHorizontal: 30,
    marginTop: 80,
    marginBottom: 65,
    borderRadius: 12,
    alignItems: 'center',
  },
  bodyText: {
    width: '100%',
    marginTop: 19,
  },
  bodyTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 22,
    //backgroundColor: colors.red,
    marginRight: 38,
    paddingBottom: 18,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray4,
  },
  bodyItens: {
    width: '100%',
    height: 119,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bodyItensText: {

  },
  bodyProgress: {

  },
  bodyProgressTitle: {
    fontSize: 12,
  },
  bodyProgressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
  },
  footer: {
    width: '100%',
    //backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginBottom: 58,
    zIndex:99,
  },
  footerButton: {
    width: '100%',
    height: 56,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue
  },






  dataText: {
    // backgroundColor: colors.green,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  dataTextTitle: {
    fontSize: 12,
    color: colors.blue,
  },
  dataTextText: {
    fontSize: 12,
    color: colors.blue,
    fontWeight: 'bold',
  },
})


