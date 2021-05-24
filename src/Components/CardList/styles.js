import { Dimensions, StyleSheet, } from 'react-native';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  containerIconItem: {
    borderRadius: 12,
    backgroundColor: colors.green,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,

  },
  containerImage: {

  },
  body: {
    paddingVertical: 18,
    flex: 1,
  },
  bodyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray2,

  },
  bodyDescription: {
    fontSize: 13,
color: colors.gray1,
  },
  bodyValue: {
    marginRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    //backgroundColor: colors.gray4
  },
  bodyValueTitlePositive: {
    fontSize: 14,
    color: colors.green

  },
  bodyValueTitleNegative: {
    fontSize: 14,
    color: colors.red
  },
  bodyValueSubText: {
    fontSize: 14,
color: colors.gray,
  },


})