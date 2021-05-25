import { Dimensions, StyleSheet, } from 'react-native';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    height: 80,
  },
  containerIconItem: {
    borderRadius: 12,
    backgroundColor: "rgba(9,77,254,0.1);",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  body: {
    paddingVertical: 18,
    flex: 1,
  },
  bodyName: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: colors.gray2,
  },
  bodyDescription: {
    fontSize: 13,
    color: colors.gray1,
    fontFamily: 'Inter-Regular',
  },
})