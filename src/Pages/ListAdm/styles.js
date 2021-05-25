import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  photoList: {
    backgroundColor: colors.red,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  photoListText: {
    position: 'absolute',
    color: colors.white,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: colors.white,
    height: 140,
    marginHorizontal: 20,
    paddingVertical: 28,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray3,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerDateItens: {
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerDate: {
    flexDirection: 'row',
  },
  headerDateText: {
    color: colors.gray2,
    marginLeft: 5,
  },
  headerDateSubtext: {
    color: colors.blue,
    fontWeight: 'bold',
  },

  friends: {
    height: 176,
    backgroundColor: colors.white,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray3,
  },
  friendsHeader: {
    //backgroundColor: colors.green1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 19,
  },
  friendsHeaderUsers: {
    flexDirection: 'row',
  },
  friendsHeaderUsersNumbers: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  friendsHeaderUsersText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 14,
  },
  friendsHeaderView: {
    color: colors.blue,
    fontSize: 14,
  },


  pricing: {
    height: 172,
    backgroundColor: colors.white,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray3,
  },
  pricingCollected: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 40,
  },
  pricingCollectedText: {
    marginRight: 11,
    marginBottom: 25,
    fontSize: 12,

  },
  pricingCollectedValue: {
    //marginBottom: 18,
    fontSize: 28,
    fontWeight: '900',
    color: colors.green2,
  },
  progress: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
  },

  progressState1: {
    backgroundColor: colors.gray5,
    height: 28,
    marginVertical: 1,
    borderRadius: 28,
    position: 'absolute',
    marginHorizontal: 20,
  },
  progressState2: {
    backgroundColor: colors.green2,
    height: 28,
    marginVertical: 1,
    borderRadius: 28,
    position: 'absolute',
    marginHorizontal: 20,
  },
  progressState3: {
    backgroundColor: colors.blue,
    height: 28,
    marginVertical: 1,
    borderRadius: 28,
    position: 'absolute',
    marginHorizontal: 20,
  },
  progressState4: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    marginVertical: 1,
    borderRadius: 28,
    position: 'absolute',
    marginHorizontal: 20,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },

  pricingTotal: {
    marginTop: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pricingMin: {
    fontSize: 12,
    color: colors.blue,
  },
  pricingTotalView: {
    flexDirection: 'row',
  },
  pricingTotalText: {
    fontSize: 12,
    color: colors.gray1,
  },
  pricingTotalValue: {
    fontSize: 12,
    color: colors.black,
  },

  body: {
    height: 202,
    backgroundColor: colors.white,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray3,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  bodyTitle: {
    marginBottom: 11,
    fontSize: 15,
    fontWeight: 'bold'
  },
  bodyText: {
    paddingRight: 20,
    fontSize: 13,
  },

  video: {
    height: 291,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  videoTitle: {
    paddingBottom: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  videoPlayer: {
    height: 176,
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  footer: {
    backgroundColor: colors.white,
    height: 109,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 13,
    justifyContent: 'center',
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  footerButtonBlue: {
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 8,
    flexDirection: 'row',

  },
  footerText: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
  footerButtonBack: {
    marginLeft: 13,
    backgroundColor: colors.white,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.blue,

  },
})