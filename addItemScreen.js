// AddItemScreen.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddItemScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter item name" />
      <Button title="Add Item" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddItemScreen;
