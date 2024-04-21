import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/home';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
