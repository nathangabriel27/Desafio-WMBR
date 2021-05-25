import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
  header: {
      width: '100%',
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 23,
  },
  headerBack: {
    position: 'absolute',
       width: '100%',
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 23,
    paddingLeft: 21,
  },
  headerBackButton: {
    height: 130,
    width: '25%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Gilroy-ExtraBold',
  },



  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerTitle: {
    fontSize: 14,
    fontFamily:'Inter-Regular',
    fontWeight:'700',
  },
  mainContainerText: {
    fontSize: 14,
    fontFamily:'Inter-Regular',
  },
  mainInput: {
    flexDirection: 'row',
  },
  mainInputText: {
    fontSize: 36,
    color: colors.blue,
    fontFamily:'Gilroy-Light',
    fontWeight:'500',
  },
  mainTextInput: {
    fontSize: 36,
    color: colors.blue,
    fontFamily:'Gilroy-Light',
    fontWeight:'500',
     marginRight: 5,
  },
  mainBottonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBottonContainerTitle: {
    fontSize: 18,
    fontFamily:'Gilroy-ExtraBold',
  },
  mainBottonContainerText: {
    fontSize: 16,
    fontFamily:'Gilroy-Light',
    fontWeight:'500',
  },


  footer: {
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: colors.blue,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40,
    width: width - 40,
    borderRadius: 8,
  },
  footerButtonText: {
    fontSize: 16,
    fontFamily:'Gilroy-ExtraBold',
    color: colors.white,
  },

})