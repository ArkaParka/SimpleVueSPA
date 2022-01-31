<template>
  <data-table v-bind="parametersTable1" @actionTriggered="handleAction"/>
</template>

<script>
import users from "./config/users";

export default {
  name: "Table2",
  computed: {
    parametersTable1() {
      return {
        data: users,
        perPageSizes: [5, 10, 15, 20],
        defaultPerPage: 5,
        showEntriesInfo: true,
        columnKeys: [
          "name",
          "email",
          "gender",
          "country",
          "job",
          "city",
          "created_at"
        ]
      };
    },
  },

  methods: {
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    }
  }
}
</script>

<style scoped>

</style>
