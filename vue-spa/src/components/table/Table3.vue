<template>
  <vue-quintable  :sort-order="sortOrder" :config="config" :rows="rows"></vue-quintable>
</template>
<script>
import Chance from "chance";

export default {
  components:{
  },
  data() {
    return {
      config: {
        columns: [
          {
            headline: "Name",
          }, {
            headline: "Age",
            sort:true

          }, {
            headline: "Birth Place",
          }, {
            headline: "Job",
            sort:true
          }
        ],
        multiSort:true,
        multiSortSelect:true,
        pageSort:true,
        pageSortSelect:true,
        pagination:5,
        search:true,
      },
      sortOrder:[{
        index:1,
        asc:false,
      }]

    }
  },
  computed:{
    rows(){

      let count = 30;
      const rows = [];

      const chance = new Chance();

      for(let i = 0; i < count; i++){

        const randSortValue = Math.ceil(Math.random() * 10);

        rows.push([
          {
            text:chance.name({ nationality: 'en' })
          },
          {
            text:chance.age()
          },
          {
            text:chance.city()
          },
          {
            html:"<span class\"mr-2\">" + chance.profession() +"</span><em>"+ "["+randSortValue+"]</em>",
            sortValue: randSortValue
          },
        ]);
      }

      return rows;


    }
  }
}
</script>
