import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
});

export default styles;
