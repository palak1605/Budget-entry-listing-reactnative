import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const BudgetListingScreen = () => {
  const budgetEntries = useSelector((state) => state.budgetEntries);
  const navigation = useNavigation();
  
  const addBudget = () => {
    navigation.navigate("BudgetEntry");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.appName}>Budget Listing</Text>
        <TouchableOpacity style={styles.add} onPress={addBudget}>
          <Icon name="plus" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        {budgetEntries.map((entry, index) => (
          <ScrollView key={index} style={styles.budgetEntry}>
            <Text style={styles.entryText}>Name: {entry.itemName}</Text>
            <Text style={styles.entryText}>Planned Amount: {entry.plannedAmount}</Text>
            <Text style={styles.entryText}>Actual Amount: {entry.actualAmount}</Text>
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    alignSelf: "center",
    marginLeft: 100,
    paddingTop: 5,
  },
  appName: {
    fontWeight: "700",
    fontSize: 25,
    marginLeft: 5,
    alignSelf: "center",
    color: "purple",
  },
  budgetEntry: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    top: StatusBar.currentHeight,
  },
  entryText: {
    fontSize: 16,
    marginBottom: 5,
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
    marginLeft: 5,
    marginTop: 2,
  },
  main: {
    backgroundColor: "pink",
    flex: 0.94,
    padding: 10,
  },
});

export default BudgetListingScreen;