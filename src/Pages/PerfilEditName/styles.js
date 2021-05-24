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
    //backgroundColor: colors.gray,
    marginTop: 40,
    marginHorizontal: 20,
    height: 131,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 5,
  },
  mainContainer: {
    backgroundColor: colors.white,
    height: 56,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  mainContainerText: {
    // backgroundColor: colors.red,
    marginLeft: 12,
    fontSize: 14

  },
  mainTextInput: {
    //backgroundColor: colors.gray,
    marginLeft: 17,
    width: '90%',
  },

  footer: {
    backgroundColor: colors.white,
    flex: 1,
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