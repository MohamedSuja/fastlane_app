import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';

const Home = () => {
  const [salesPrice, setSalesPrice] = useState('');
  const [purchasingPrice, setPurchasingPrice] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const mainPrice = 100000;

  const x = mainPrice / parseInt(purchasingPrice);
  const y = 16000 / parseInt(unitPrice);

  const calculate = () => {
    if (purchasingPrice == '') {
      Alert.alert('Please Enter Purchasing Price');
    } else if (unitPrice == '') {
      Alert.alert('Please Enter Unit Price');
    } else {
      const value = y + parseInt(purchasingPrice);
      setSalesPrice(value.toFixed(2));
    }
  };

  return (
    <View style={styles.root}>
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
      />
      <TextInput
        label="Unit Price"
        mode="outlined"
        onChangeText={setUnitPrice}
        value={unitPrice}
        style={styles.textInput}
        keyboardType="numeric"
      />

      <Button mode="elevated" style={styles.button} onPress={calculate}>
        Calculate
      </Button>
    </View>
  );
};

export default Home;
