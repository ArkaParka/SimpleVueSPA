<template>
  <div class="company" :key="this.$attrs.data.company.name">
    <p>name: {{ this.$attrs.data.company.name }}</p>
    <hr>
    <p>catchPhrase: {{ this.$attrs.data.company.catchPhrase }}</p>
    <hr>
    <p>bs: {{ this.$attrs.data.company.bs }}</p>
  </div>
</template>

<script>
export default {
  name: "companyComponent",
}
</script>

<style scoped>

</style>
