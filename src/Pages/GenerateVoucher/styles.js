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
    // backgroundColor: colors.red,
    width: '100%',
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 23,
  },
  headerBack: {
    position: 'absolute',
    //backgroundColor: colors.gray,
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
    fontWeight: 'bold',
  },

  main: {
    //marginTop: 32,
    //width: '100%',
    flex: 1,
   // backgroundColor: colors.gray,

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mainContainerText: {
    fontSize: 14,
    //fontWeight: 'bold',
  },
  mainInput: {
    flexDirection: 'row',
  },
  mainInputText: {
    fontSize: 36,
    color: colors.blue,

  },
  mainTextInput: {
    fontSize: 36,
    color: colors.blue,
  },

  mainBottonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBottonContainerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainBottonContainerText: {
    fontSize: 16,
    //fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: colors.white,
  },

})