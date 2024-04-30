// ItemListScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ItemListScreen = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // Logic to add new item
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Item List</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add Item" onPress={addItem} />
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ItemListScreen;
