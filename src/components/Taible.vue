<template>
  <div>
    <table class="taible">
        <thead>
            <tr>
                <td v-for="title in titles">
                    <span @click="sortBy($index)">{{ title }}</span>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in pageData | orderBy orderKey order">
                <td v-for="cell in row">
                    {{ cell }}
                </td>
            </tr>
        </tbody>
    </table>    
    <button @click="prev" v-if="from">Назад</button>
    <button @click="next" v-if="isNextExists()">Далее</button>      
  </div>
</template>

<style>
    .taible thead {
        font-weight: bold;
        background: #2c3e50;
        color: #fff;
    }
    
    .taible {
        border: 1px solid #2c3e50;
    }

    .taible tr:nth-child(odd) {
        background: rgba(0,0,0,.1);
    }

</style>

<script>
export default {
  data() {
    return {
      order: 1,
      orderKey: null,
      from: 0,
      to: this.perpage || 5,
    };
  },
  props: ['titles', 'rows', 'perpage'],
  computed: {
    pageData() {
      return this.rowsFormated().splice(this.from, this.to);
    },
  },
  methods: {
    sortBy(key) {
      this.orderKey = `cell_${key}`;
      this.order *= -1;
    },
    rowsFormated() {
      const rowz = [];
      for (let j = 0; j < this.rows.length; j++) {
        const cells = {};
        for (let i = 0; i < this.rows[j].length; i++) {
          cells[`cell_${i}`] = this.rows[j][i];
        }
        rowz.push(cells);
      }
      return rowz;
    },
    isNextExists() {
      return this.rowsFormated().splice(this.from + this.to, this.to).length > 0;
    },
    next() {
      if (this.from < this.rows.length) {
        this.from += this.perpage;
      }
    },
    prev() {
      if (this.from > 0) {
        this.from -= this.perpage;
      }
    },
  },
};
</script>