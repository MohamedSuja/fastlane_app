import {View, Text, Alert, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import ColorSheet from '../../utils/colorSheet';
import {RFValue} from 'react-native-responsive-fontsize';

const Home = () => {
  const [salesPrice, setSalesPrice] = useState('');
  const [purchasingPrice, setPurchasingPrice] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const mainPrice = 100000;

  const x = mainPrice / parseInt(purchasingPrice);
  const y = parseInt(unitPrice) / x;

  const calculate = () => {
    if (purchasingPrice == '') {
      Alert.alert('Please Enter Purchasing Price');
    } else if (unitPrice == '') {
      Alert.alert('Please Enter Percentage Value');
    } else {
      const value = y + parseInt(purchasingPrice);
      setSalesPrice(value.toFixed(2));
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={ColorSheet.Secondary}
        barStyle={'dark-content'}
      />
      <View style={styles.logoView}>
        <Text style={styles.logoText}>VINLAN TRADERS</Text>
      </View>
      <ScrollView>
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="Sales Price"
            subtitle={salesPrice + (salesPrice && ' RS')}
          />
        </Card>
        <TextInput
          label="Purchasing Price"
          mode="outlined"
          onChangeText={setPurchasingPrice}
          value={purchasingPrice}
          style={styles.textInput}
          keyboardType="numeric"
          theme={{
            colors: {
              primary: ColorSheet.Primary,
            },
          }}
        />
        <TextInput
          label="Percentage Value"
          mode="outlined"
          onChangeText={setUnitPrice}
          value={unitPrice}
          style={styles.textInput}
          keyboardType="numeric"
          theme={{
            colors: {
              primary: ColorSheet.Primary,
            },
          }}
        />

        <Button
          mode="elevated"
          labelStyle={{
            color: ColorSheet.Primary,
            fontWeight: 'bold',
            fontSize: RFValue(15),
          }}
          style={styles.button}
          onPress={calculate}>
          Calculate
        </Button>
      </ScrollView>
    </View>
  );
};

export default Home;
