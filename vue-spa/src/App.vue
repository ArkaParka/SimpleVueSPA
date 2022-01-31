<template>
  <div id="app">
    <div class="bg background"></div>
    <div class="bg midground"></div>
    <div class="bg foreground"></div>

    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <div class="pre-vue">
        <div class="chart">
          <Chart2 />
        </div>
      </div>
      <div class="content">
        <div class="chart dark">
          <Chart3 />
        </div>

        <div class="table white">
          <Table />
        </div>
        <div class="table white">
          <Table2 />
        </div>
        <div class="table white">
          <Table3 />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Table  https://vuejsexamples.com/a-vue-plugin-that-adds-advanced-features-to-an-html-table/
// Table2 https://vuejsexamples.com/a-high-configurable-and-flexible-table-wrapper-using-vue-and-bootstrap/
// Chart  https://vuejsexamples.com/lightweight-vue-component-for-drawing-pure-css-donut-charts/
// Chart2 https://vuejsexamples.com/vue-js-component-drawing-svg-funnel-graphs/
// -------------------
// Good Table https://vuejsexamples.com/a-powerful-vue-data-grid-component-built-on-top-of-revogrid/

import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

import Chart from "./components/chart/Chart";
import Chart2 from "./components/chart/Chart2";
import Chart3 from "./components/chart/Chart3";
import Table from "./components/table/Table";
import Table2 from "./components/table/Table2";
import Table3 from "./components/table/Table3";

export default {
  name: 'app',
  components: {
    Chart,
    Chart2,
    Chart3,
    Table,
    Table2,
    Table3
  }
}
</script>

<style lang="scss">
.bg {
  height: 150vh;
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: spaceJam 120s linear infinite;
}

.background {
  background: url('https://denis-creative.com/wp-content/uploads/2019/03/background.png');
}

.midground {
  background: url('https://denis-creative.com/wp-content/uploads/2019/03/midground.png');
  animation-duration: 60s;
}

.foreground {
  background: url('https://denis-creative.com/wp-content/uploads/2019/03/foreground.png');
  animation-duration: 30s;
}

@keyframes spaceJam {
  100% {
    background-position: -2500px -500px;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 5em;
  //background-color: #100c2a;
}

.pre-vue {
  height: 100vh;
}

.content {
  //background-color: #100c2a;
}

h1, h2 {
  color: white;
  font-weight: normal;
}

header h1 {
  padding-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.table {
  tr td {
    vertical-align: middle;
    border: 1px solid #ccc;
  }
}

.table.dark {
  background-color: #100c2a;
}

.table.white {
  background-color: white;
}

.chart {
  margin: 0 auto;
  padding: 4em;

}

.chart.dark {
  //background-color: #2c3e50;
  background-color: #100c2a;
}

.chart.white {
  //background-color: #2c3e50;
  background-color: white;
}
</style>
