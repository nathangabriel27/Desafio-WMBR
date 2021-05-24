import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({

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
  containerPhoto: {
    //backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    height: 236,
  },
  containerPhotoIcon: {
    backgroundColor: colors.white,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginRight: -105,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },



  buttonEdit: {
    //backgroundColor: colors.red1,
    flexDirection: 'row',
    paddingVertical: 36,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue1,
  },
  buttonEditTitle: {
    fontSize: 14,
  },
  buttonEditText: {
    flex: 1,
    textAlign: 'right',
    marginHorizontal: 26,
    fontSize: 14

  },
})