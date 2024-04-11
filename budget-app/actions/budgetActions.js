export const ADD_BUDGET_ENTRY = 'ADD_BUDGET_ENTRY';

export const addBudgetEntry = (entry) => ({
  type: ADD_BUDGET_ENTRY,
  payload: entry,
});
