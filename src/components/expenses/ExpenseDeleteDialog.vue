<template>
  <v-dialog v-model="value" width="500" persistent>
    <v-card>
      <v-card-title class="spearmint white--text">
        Delete Expense
      </v-card-title>

      <v-card-text class="pa-0">
        <v-container>
          <v-row>
            <v-col>
              <v-container>
                <v-row>
                  <v-col>
                    <p>
                      Are you sure you want to delete this expense named "
                      {{ newExpense.expense }}
                      "?
                    </p>
                  </v-col>
                </v-row>
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
          @click="removeExpense"
          outlined
          large
          :loading="isDeleting"
        >
          Delete
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
export default {
  name: "ExpenseDeleteDialog",
  props: { value: Boolean, expense: Object },
  mounted() {
    this.newExpense = { ...this.expense };
  },
  data() {
    return {
      isDeleting: false,
      newExpense: {},
    };
  },
  methods: {
    ...mapActions("expense", ["fetchExpenses"]),
    ...mapActions("expense", ["deleteExpense"]),

    async removeExpense() {
      this.isDeleting = true;
      try {
        await this.deleteExpense({
          id: this.newExpense.id,
        });

        await this.fetchExpenses();
        this.close();
      } catch {
        this.isDeleting = false;
      }
      this.isDeleting = false;
    },

    close() {
      this.$emit("input", false);
    },
  },
};
</script>
