// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListScreen from './itemListScreen';
import AddItemScreen from './addItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ItemList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="ItemList" component={ItemListScreen} options={{ title: 'Item List' }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Add Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
