<template>
  <v-dialog v-model="value" width="500" persistent>
    <v-card>
      <v-card-title class="spearmint white--text">
        Add an Expense
      </v-card-title>

      <v-card-text class="pa-0">
        <v-container>
          <v-row>
            <v-col>
              <v-container>
                <v-form v-model="isValid" ref="form">
                  <v-container>
                    <v-text-field
                      color="seafoamgreen"
                      label="Expense Name"
                      :rules="validateName"
                      v-model="expense.expense"
                    />
                    <v-text-field
                      label="Price"
                      color="seafoamgreen"
                      v-model="expense.price"
                    />
                    <!-- <v-checkbox
                      label="Enable"
                      v-model="expense.enable"
                      color="spearmint"
                    /> -->
                  </v-container>
                </v-form>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="spearmint white--text ma-2"
          text
          @click="addExpense"
          outlined
          large
          :loading="isSaving"
        >
          Save
        </v-btn>
        <v-btn
          class="spearmint white--text ma-2"
          text
          @click="close"
          outlined
          large
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
import validation from "../../mixins/Validation";
export default {
  name: "ExpenseAddDialog",
  mixins: [validation],
  props: { value: Boolean },
  mounted() {},
  data() {
    return {
      form: null,
      isValid: false,
      expense: {},
      isSaving: false,
    };
  },
  methods: {
    ...mapActions("expense", ["fetchExpenses"]),
    ...mapActions("expense", ["saveExpense"]),
    async addExpense() {
      this.isSaving = true;
      this.$refs.form.validate();
      if (this.isValid) {
        try {
          await this.saveExpense({ expense: this.expense });
          await this.fetchExpenses();
          this.$refs.form.reset();
          this.close();
        } catch {
          this.isSaving = false;
        }
      }
      this.isSaving = false;
    },

    close() {
      this.$emit("input", false);
    },
  },
};
</script>
