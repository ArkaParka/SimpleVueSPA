<template>
  <data-table v-bind="bindings" @actionTriggered="handleAction"/>
</template>

<script>
import addressComponent from './addressComponent/addressComponent'
import companyComponent from "./companyComponent/companyComponent";
import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/users',
      bindings: {
        perPageSizes: [1, 5, 10, 15, 20],
        defaultPerPage: 1,
        showEntriesInfo: true,
        columns: [
          {
            key: 'id',
            sortable: false
          },
          {
            key: 'name'
          },
          {
            key: 'username',
          },
          {
            key: 'email',
          },
          {
            key: 'address',
            sortingFunction: function(a, b) {
              return a.address.city.localeCompare(b.address.city);
            },
            component: addressComponent,
          },
          {
            key: 'phone',
            sortable: false
          },
          {
            key: 'website',
          },
          {
            key: 'company',
            sortingFunction: function(a, b) {
              return a.company.name.localeCompare(b.company.name);
            },
            component: companyComponent
          }
        ],
        data: []
      }
    }
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      axios.get(this.url)
        // .then(users => {
        //   users.data.forEach(user => {
        //     user.address.geo = Object.entries(user.address.geo).reduce((str, arr) => str += arr[0] + ':' + arr[1] + ' ', '');
        //     user.address = Object.entries(user.address).reduce((str, arr) => str += arr[0] + ':' + arr[1] + ' ', '');
        //     user.company = Object.entries(user.company).reduce((str, arr) => str += arr[0] + ':' + arr[1] + ' ', '');
        //   });
        //
        //   return users;
        // })
        .then(users => {
          this.bindings.data = users.data;
        })
        .catch(err => {
          console.log('-------error-------');
          console.log(err);
        });
    },
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    }
  }
}
</script>

<style scoped>

</style>
