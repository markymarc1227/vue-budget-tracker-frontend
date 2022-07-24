import { expensesApi } from "./config";

const expense = {
  fetchAll() {
    return expensesApi.get(`/api/v1/expenses`);
  },
  findById(payload) {
    return expensesApi.get(`/api/v1/expense/${payload.id}`);
  },
  save(payload) {
    return expensesApi.post(`/api/v1/expense`, payload.expense);
  },
  update(payload) {
    return expensesApi.put(`/api/v1/expense/${payload.id}`, payload.expense);
  },
  delete(payload) {
    return expensesApi.delete(`/api/v1/expense/${payload.id}`);
  },
};

export default { expense };
