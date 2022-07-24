import api from "../../../api";

export default {
  async fetchExpenses(context) {
    const response = await api.expense.fetchAll();
    const expenses = response.data.map((expense) => {
      expense.update = false;
      expense.delete = false;
      return expense;
    });
    context.commit("SET_EXPENSES", expenses);
    context.commit("RESET_EXPENSES");
    context.commit("SET_SUMEXPENSES", expenses);
    return response;
  },
  async findExpense(context, payload) {
    const response = await api.expense.findById(payload);
    context.commit("SET_EXPENSES", response.data);
    return response;
  },
  async saveExpense(context, payload) {
    return await api.expense.save(payload);
  },
  async updateExpense(context, payload) {
    return await api.expense.update(payload);
  },
  async deleteExpense(context, payload) {
    return await api.expense.delete(payload);
  },
  setBudget(context, payload) {
    context.commit("SET_BUDGET", payload);
  },
};
