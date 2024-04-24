import React from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorSheet from '../../utils/colorSheet';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    marginLeft: wp(4),
    marginRight: wp(4),
    marginTop: hp(10),
  },
  textInput: {
    marginLeft: wp(4),
    marginRight: wp(4),
    margin: hp('2%'),
  },
  button: {
    marginLeft: wp(4),
    marginRight: wp(4),
    margin: hp('2%'),
  },
  logoView: {
    alignItems: 'center',
    backgroundColor: ColorSheet.Secondary,
    height: hp(7),
    justifyContent: 'center',
    borderColor: ColorSheet.Shadow,
    borderBottomWidth: 1,
  },
  logoText: {
    fontSize: RFValue(15),
    color: ColorSheet.Primary,
    fontWeight: '700',
  },
});

export default styles;
