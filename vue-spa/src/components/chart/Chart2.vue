<template>
  <vue-funnel-graph :width="width" :height="height" :labels="labels"
                    :values="values" :colors="colors" :sub-labels="subLabels" :direction="direction"
                    :gradient-direction="gradientDirection"
                    :animated="true" :display-percentage="true"
  ></vue-funnel-graph>
</template>

<script>
import { VueFunnelGraph } from 'vue-funnel-graph-js';

export default {
  name: "Chart2",
  components: {
    VueFunnelGraph
  },
  data() {
    return {
      labels: ['Impressions', 'Add To Cart', 'Buy'],
      subLabels: ['Direct', 'Social Media', 'Ads'],
      values: [
        // with the given Labels and SubLabels here's what the values represent:
        //
        // Direct, Social, Ads
        //    |      |     |
        //    v      v     v
        [3000, 2500, 6500], // Segments of "Impressions" from top to bottom
        [3000, 1700, 1000], // Segments of "Add To Cart"
        [6600,  1200,  500]   // Segments of "Buy"
      ],
      colors: [
        ['#FFB178', '#FF3C8E'], // color set for "Impressions" segment
        ['#A0BBFF', '#EC77FF'], // color set for "Add To Cart" segment
        ['#A0F9FF', '#7795FF']  // color set for "Buy" segment
      ],
      direction: 'horizontal',
      gradientDirection: 'horizontal',
      height: 300,
      width: 800
    };
  }
}
</script>

<style scoped>

</style>
