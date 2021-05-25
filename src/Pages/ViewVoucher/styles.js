import { Dimensions, StyleSheet, } from 'react-native';
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
    height: 384,
  },
  header: {
    height: 72,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  headerClose: {
    height: 72,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Gilroy-ExtraBold',
  },

  bodyQRCode: {
    paddingTop: 72,
    paddingBottom: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dataText: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataTextTitle: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Inter-Regular',
  },
  dataTextText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Inter-Bold',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 67,
    marginBottom: 13,
  },
  footerCode: {
    backgroundColor: "rgba(255,255,255,0.2);",
    height: 60,
    width: 238,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    borderBottomColor: colors.green2,
    borderBottomWidth: 2,
    marginVertical: 13,
  },
  footerCodeText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Gilroy-Light',
    fontWeight: '600',
  },
})