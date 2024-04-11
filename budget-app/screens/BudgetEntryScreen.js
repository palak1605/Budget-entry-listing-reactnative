import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../actions/budgetActions';
import { useNavigation } from '@react-navigation/native';

const BudgetEntryScreen = () => {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSave = () => {
    if (!itemName) {
      Alert.alert('Missing Field', 'Item Name is required.');
      return;
    }
    if (!plannedAmount) {
      Alert.alert('Missing Field', 'Planned Amount is required.');
      return;
    }
    if (!actualAmount) {
      Alert.alert('Missing Field', 'Actual Amount is required.');
      return;
    }
    const plannedAmountNumber = parseFloat(plannedAmount);
    const actualAmountNumber = parseFloat(actualAmount);

    if (isNaN(plannedAmountNumber) || plannedAmountNumber < actualAmountNumber) {
      Alert.alert('Invalid Planned Amount', 'Planned amount must be greater than or equal to the actual amount.');
      return;
    }
    dispatch(addBudgetEntry({ itemName, plannedAmount, actualAmount }));
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
    navigation.navigate('BudgetEntryListing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <Text style={styles.appName}>Budget Entry</Text>
       
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={(text) => setItemName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Planned Amount"
          value={plannedAmount}
          onChangeText={(text) => setPlannedAmount(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Actual Amount"
          value={actualAmount}
          onChangeText={(text) => setActualAmount(text)}
          keyboardType="numeric"
        />
       <Button title="Save" onPress={handleSave} color="green" />
       <View style={{ height: 20 }} />  
      <Button title="Show items" onPress={() => navigation.navigate('BudgetEntryListing')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    color: 'purple'
  },
  
  button:{ fontWeight: 'bold',
  fontSize: 20,
  marginTop: 10,
  color: 'black'},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  main: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'pink',
    borderRadius: 10,
    fontSize: 16,
  },
});

export default BudgetEntryScreen;