export default {
  expenses(state) {
    return state.expenses;
  },
  budget(state) {
    return state.finBudget;
  },
  totalexpenses(state) {
    const summedExpenses = state.listExpenses.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    // state.budget = state.budget - summedExpenses;
    state.accExpenses = summedExpenses;
    return summedExpenses;
  },
};
