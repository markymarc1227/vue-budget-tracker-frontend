<template>
  <v-dialog v-model="value" width="500" persistent>
    <v-card>
      <v-card-title class="spearmint white--text"> Edit Expense </v-card-title>

      <v-card-text class="pa-0">
        <v-container>
          <v-row>
            <v-col>
              <v-container>
                <v-form v-model="isValid" ref="form">
                  <v-container>
                    <v-text-field
                      label="Expense Name"
                      :rules="validateName"
                      v-model="newExpense.expense"
                    />
                    <v-text-field label="Price" v-model="newExpense.price" />
                    <v-checkbox
                      label="Mark"
                      v-model="newExpense.enable"
                      color="spearmint"
                    />
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
          @click="editExpense"
          outlined
          large
          :loading="isUpdating"
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
  name: "ExpenseEditDialog",
  mixins: [validation],
  props: { value: Boolean, expense: Object },
  mounted() {
    this.newExpense = { ...this.expense };
  },
  data() {
    return {
      form: null,
      isValid: false,
      isUpdating: false,
      newExpense: {},
    };
  },
  methods: {
    ...mapActions("expense", ["fetchExpenses"]),
    ...mapActions("expense", ["updateExpense"]),
    async editExpense() {
      this.isSaving = true;
      this.$refs.form.validate();
      if (this.isValid) {
        try {
          await this.updateExpense({
            id: this.newExpense.id,
            expense: { ...this.newExpense },
          });
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
