<template>
  <div class="address" :key="this.$attrs.data.address.city">
    <p>city: {{ this.$attrs.data.address.city }}</p>
    <hr>
    <p>street: {{ this.$attrs.data.address.street }}</p>
    <hr>
    <p>suite: {{ this.$attrs.data.address.suite }}</p>
    <hr>
    <p>zipcode: {{ this.$attrs.data.address.zipcode }}</p>
    <hr>
    <p>lat: {{ this.$attrs.data.address.geo.lat }}</p>
    <hr>
    <p>lng: {{ this.$attrs.data.address.geo.lng }}</p>
  </div>
</template>

<script>
export default {
  name: "addressComponent",
}
</script>

<style scoped>

</style>
