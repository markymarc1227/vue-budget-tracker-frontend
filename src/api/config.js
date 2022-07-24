import axios from "axios";

console.log("expensesApi:", process.env.VUE_APP_EXPENSES_API);

axios.defaults.headers.post["Content-Type"] = "application/json";

const expensesApi = axios.create({
  baseURL: process.env.VUE_APP_EXPENSES_API,
});

export { expensesApi };
