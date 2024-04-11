import { ADD_BUDGET_ENTRY } from '../actions/budgetActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  budgetEntries: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET_ENTRY:
      const newBudgetEntries = [...state.budgetEntries, action.payload];
      AsyncStorage.setItem('budgetEntries', JSON.stringify(newBudgetEntries));
      return {
        ...state,
        budgetEntries: newBudgetEntries,
      };
    default:
      return state;
  }
};

export default budgetReducer;