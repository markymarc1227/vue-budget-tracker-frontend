<template>
  <v-container>
    <v-row class="justify-end"> <Datecomponent /> </v-row>
    <v-row>
      <v-col cols="6" class="d-flex justify-center align-center">
        <budgetVue />
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        <TotalVue />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-btn
          color="white"
          elevation="3"
          rounded
          :loading="loadingExpenses"
          @click="expenseAddDialogOpen = true"
          >Add an Expense</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-container class="mt-1">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="10">
            <v-card>
              <v-container class="seafoamgreen white--text pa-0">
                <v-row no-gutters>
                  <v-col>
                    <v-card-title> Expenses </v-card-title>
                  </v-col>
                  <v-col
                    cols="auto"
                    class="d-flex justify-center align-center px-5"
                  >
                    <v-btn
                      fab
                      text
                      dark
                      :loading="loadingExpenses"
                      @click="fetchExpenses"
                    >
                      <v-icon>mdi-reload</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-text class="pb-0">
                <v-container>
                  <v-row>
                    <v-col cols="1" class="d-flex justify-left align-center">
                      <label class="body-1"> ID No. </label>
                    </v-col>
                    <v-col cols="4" class="d-flex justify-center align-center">
                      <label> Expense Name</label>
                    </v-col>
                    <v-col cols="4" class="d-flex justify-center align-center">
                      <label> Price</label>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-center align-center">
                      <label> Actions</label>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-text class="pt-0">
                <v-hover
                  v-slot="{ hover }"
                  v-for="expense in expenses"
                  :key="expense.id"
                >
                  <v-sheet
                    :class="`${hover ? 'grey lighten-4' : ''} px-4 rounded-lg`"
                  >
                    <v-container>
                      <v-row>
                        <v-col
                          cols="1"
                          class="d-flex justify-left align-center"
                        >
                          <label class="body-1"> {{ expense.id }} </label>
                        </v-col>
                        <v-col
                          cols="4"
                          class="d-flex justify-center align-center"
                        >
                          <label
                            :class="`${
                              expense.enable
                                ? 'text-decoration-line-through'
                                : ''
                            } body-1`"
                          >
                            {{ expense.expense }}</label
                          >
                        </v-col>
                        <v-col
                          cols="4"
                          class="d-flex justify-center align-center"
                        >
                          <label
                            :class="`${
                              expense.enable
                                ? 'text-decoration-line-through'
                                : ''
                            } body-1`"
                          >
                            {{ expense.price }}</label
                          >
                        </v-col>

                        <v-col
                          cols="3"
                          class="d-flex justify-center align-center"
                        >
                          <v-btn
                            color="seafoamgreen"
                            small
                            fab
                            text
                            @click="expense.update = true"
                            ><v-icon>mdi-pencil</v-icon></v-btn
                          >
                          <v-btn
                            color="error"
                            small
                            fab
                            text
                            @click="expense.delete = true"
                            ><v-icon>mdi-trash-can</v-icon></v-btn
                          >
                          <expense-edit-dialog
                            v-model="expense.update"
                            :expense="expense"
                          />
                          <expense-delete-dialog
                            v-model="expense.delete"
                            :expense="expense"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-sheet>
                </v-hover>
              </v-card-text>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <expense-add-dialog v-model="expenseAddDialogOpen" />
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import budgetVue from "../components/cards/budget.vue";
import TotalVue from "../components/cards/total.vue";
import Datecomponent from "../components/cards/datecomponent.vue";
import ExpenseAddDialog from "../components/expenses/ExpenseAddDialog";
import ExpenseEditDialog from "../components/expenses/ExpenseEditDialog";
import ExpenseDeleteDialog from "../components/expenses/ExpenseDeleteDialog";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ExpenseAddDialog,
    ExpenseEditDialog,
    ExpenseDeleteDialog,
    budgetVue,
    TotalVue,
    Datecomponent,
  },
  data() {
    return {
      expenseAddDialogOpen: false,
      loadingExpenses: false,
    };
  },
  async created() {
    try {
      this.loadingExpenses = true;
      await this.fetchExpenses();
    } catch {
      console.log("fetchExpenses", "Failed");
    } finally {
      this.loadingExpenses = false;
    }
  },
  methods: {
    ...mapActions("expense", ["fetchExpenses"]),
  },
  computed: {
    ...mapGetters("expense", ["expenses"]),
  },
};
</script>
