<template>
  <v-card
    elevation="3"
    outlined
    shaped
    class="mx-4 my-0 px-3 py-0"
    min-width="350px"
  >
    <v-cardText class="text-center text-subtitle-1 pb-1">
      Initial Budget: Php {{ $store.state.expense.budget }}</v-cardText
    >
    <v-container>
      <v-row>
        <v-col cols="8" class="py-0">
          <v-text-field
            clearable
            dense
            color="spearmint"
            label="Enter Budget"
            type="number"
            min-width="20px"
            solo
            v-model="initialBudget"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="py-0">
          <v-btn
            @click="
              $store.commit('expense/SET_BUDGET', { amount: initialBudget })
            "
            >Set</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="mx-4"></v-divider>
    <v-cardTitle class="justify-center pt-3"> Budget Remaining </v-cardTitle>

    <v-cardText class="text-center text-h4"> Php {{ budget }}</v-cardText>
  </v-card>
</template>

<script>
export default {
  name: "budgetVue",
  data() {
    return {
      initialBudget: 0,
    };
  },
  computed: {
    budget() {
      return (
        this.$store.state.expense.budget - this.$store.state.expense.accExpenses
      );
    },
  },
};
</script>
