<template>
  <div>
    <taible :titles="tableTitles" :rows="tableRows" :perpage="5"></taible>
  </div>
</template>

<script>
import Taible from './components/Taible';

export default {
  data() {
    return {
      dataTable: [
        { id: 'Идентификатор', name: 'Название', price: 'Стоимость', quantity: 'Количество' },
        [1, 'iPhone 5', '400', 5],
        [2, 'XBOX', '300', 7],
        [3, 'XBOX one', '500', 3],
        [4, 'iPhone 5', '400', 5],
        [5, 'XBOX', '300', 7],
        [6, 'XBOX one', '500', 3],
        [7, 'iPhone 5', '400', 5],
        [8, 'XBOX', '300', 7],
        [9, 'XBOX one', '500', 3],
        [10, 'iPhone 5', '400', 5],
        [11, 'XBOX', '300', 7],
        [12, 'XBOX one', '500', 3],
        [13, 'iPhone 5', '400', 5],
        [14, 'XBOX', '300', 7],
        [15, 'XBOX one', '500', 3],
        [16, 'iPhone 5', '400', 5],
      ],
    };
  },
  computed: {
    tableTitles() {
      return this.dataTable[0];
    },
    tableRows() {
      return this.dataTable.splice(1);
    },
  },
  components: {
    Taible,
  },
};

</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

</style>
