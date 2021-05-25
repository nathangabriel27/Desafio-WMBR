import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors } from '../../Constants/theme';

export default StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#E5E5E5'
  },
  header: {
    marginHorizontal: 20,
    backgroundColor: colors.blue,
    borderRadius: 12,
    height: 373,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerProfilePhoto: {
    flexDirection: 'row',
  },
  headerProfile: {
    width: '100%',
    alignItems: 'center',
  },
  headerProfileName: {
    marginTop: 40,
    fontSize: 27,
    fontFamily: 'Gilroy-ExtraBold',
    color: colors.white,
  },
  headerProfiletag: {
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green1,
    paddingHorizontal: 31,
    borderRadius: 160,
    marginTop: 13,
  },
  headerProfileNameTag: {
    color: colors.blue,
    fontFamily: 'Gilroy-Light',
    fontWeight: '500',
  },
  headerProfileButton: {
    width: '80%',
    height: 48,
    marginHorizontal: 26,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 17,
    marginTop: 33,
    flexDirection: 'row',
  },
  headerProfileText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 14,
    color: colors.blue,
    fontWeight: 'bold'
  },
  headerProfileButtonLogout: {
    width: '80%',
    height: 48,
    marginHorizontal: 26,
    backgroundColor: "rgba(255,255,255,0.2);",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 34,
    flexDirection: 'row',
  },
  headerProfileButtonLogoutText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Gilroy-ExtraBold',
  },
  body: {
    marginTop: 15,
  },
})