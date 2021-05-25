import { Dimensions, StyleSheet, } from 'react-native';
const { width } = Dimensions.get('window');
import { colors } from '../../Constants/theme';


export default StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: '100%',
    width: '100%',
  },
  imageBackground: {
    width: width,
  },
  containerHeader: {
    height: 170,
  },
  main: {
    height: 125,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainTextTitleIcon: {
    fontSize: 26,
    fontFamily: 'Gilroy-Light',
    fontWeight: '500',
  },
  mainTextTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Gilroy-ExtraBold',
  },
  mainTextSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Inter-Regular',
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
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 15,
    marginLeft: 22,
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
    fontFamily: 'Inter-Regular',
  },
  bodyProgressText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: colors.blue,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginBottom: 58,
    zIndex: 99,
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
    fontFamily: 'Gilroy-ExtraBold',
    color: colors.blue
  },

  dataText: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataTextTitle: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Gilroy-Light',
    fontWeight: '500',
  },
  dataTextText: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Gilroy-ExtraBold',

  },
})


