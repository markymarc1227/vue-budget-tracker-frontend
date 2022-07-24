export default {
  SET_EXPENSES(state, payload) {
    state.expenses = payload;
  },
  SET_EXPENSE(state, payload) {
    state.expense = payload;
  },
  SET_BUDGET(state, payload) {
    state.budget = payload.amount;
    console.log("The current budget is:", state.budget);
  },
  SET_EXPENSES_LOADED(state, payload) {
    state.isExpensesLoaded = payload;
  },
  SET_SUMEXPENSES(state, payload) {
    payload.forEach((item) => {
      state.listExpenses.push(Number(item.price));
    });
    const summedExpenses = state.listExpenses.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    // state.budget = state.budget - summedExpenses;
    state.accExpenses = summedExpenses;
  },
  RESET_EXPENSES(state) {
    state.listExpenses = [];
  },
};
