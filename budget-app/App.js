import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './screens/BudgetListingScreen';
import store from './store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BudgetEntryListing">
          <Stack.Screen
            name="BudgetEntry"
            component={BudgetEntryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BudgetEntryListing"
            component={BudgetEntryListingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
