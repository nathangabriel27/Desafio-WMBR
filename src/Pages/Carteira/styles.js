import { Dimensions, StyleSheet, } from 'react-native';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    height: 331,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizes.maxSize,
  },
  headerCard: {
    //position:'absolute',
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 224,
    width: '100%',
    marginTop: 91,
  },
  headerCardContainer: {
    //backgroundColor: colors.red,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerCardContainerValue: {
    //backgroundColor: colors.white,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  headerCardContainerItens: {
    //backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',

  },
  headerCardText: {
    fontSize: sizes.text,
  },
  headerCardValue: {
    fontSize: sizes.title,
    fontWeight: 'bold'
  },
  headerCardBotton: {
    // backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCardBottonButtons: {
    //backgroundColor: colors.blue1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

  },
  headerCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    width: '50%',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.blue1,

  },
  headerCardButtonPayment: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',


  },
  headerCardButtonText: {
    fontSize: sizes.subTitle
  },

  headerCardBalance: {
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 85,
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-around',
  },
  headerCardBalanceTitle: {
    flexDirection: 'row',
    flex: 1,
  },
  headerCardBalanceText: {
    //backgroundColor: colors.redGoogle1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  headerCardBalanceTextSubtitle: {
    fontSize: sizes.text,
  },
  headerCardBalanceTextTitle: {
    fontSize: sizes.subTitle,
    fontWeight: 'bold',
  },


  bodyButton: {
    backgroundColor: colors.blue1,
    marginTop: 74,
    marginHorizontal: 19,
    padding: 4,
    flexDirection: 'row',
    borderRadius: 14,

  },
  bodyButtonItem: {
    //backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',

  },
  bodyButtonItemSelected: {
    backgroundColor: colors.white,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
    borderRadius: 12,
  },
  bodyButtonText: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: 'bold',
  },
  bodyButtonTextSelected: {
    fontSize: 13,
    opacity: 0.6,
    color: colors.blue,
  },
  bodyList: {
    //backgroundColor: colors.red,
    height: 381
  },

  tabBar: {
    flexDirection: 'row',
    // height: 24,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundColor: colors.green,
    borderBottomColor: colors.blue,
    borderBottomWidth: 2,
  },
  tabItemtextSelected: {
    color: colors.blue,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  tabItemtext: {
    color: colors.blue1,
  },

})