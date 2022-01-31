<template>
  <vc-donut
    background="white" foreground="grey"
    :size="500" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="sections" :total="100"
    :start-angle="0" :auto-adjust-text-size="true"
    @section-click="handleSectionClick">
    <h1>75%</h1>
  </vc-donut>
</template>
<script>
export default {
  name: "Chart",
  data() {
    return {
      sections: [
        { label: 'Red section', value: 25, color: 'red' },
        { label: 'Green section', value: 25, color: 'green' },
        { label: 'Blue section', value: 25, color: 'blue' }
      ]
    };
  },
  methods: {
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    }
  }
};
</script>

<style scoped>

</style>
