import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';

export default StyleSheet.create({
  footer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 85,


    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  footerButton: {
    //backgroundColor: colors.green,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 85,
  },

  footerButtonCenter: {
    // backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
  },
  footerButtonSelected: {
    //backgroundColor: colors.green,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 85,
  },
  bottonText: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '700'
  },

})