<template>
  <div class="xxMain">
    <button @click="add">add</button>
    <ul class="xxUl">
      <li
        v-for="(item, index) in addTab"
        :key="item.id"
        @click="clickLi(index)"
      >
        {{ item.name }} <i class="ii" @click="del(index)">X</i>
      </li>
    </ul>
    <div>{{ this.tabIndex }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addTab: [
        {
          id: 0,
          name: "new Tab",
        },
        {
          id: 1,
          name: "new Tab",
        },
      ],
      tabIndex: 0,
    };
  },
  methods: {
    add() {
      this.addTab.push({
        id: this.addTab.length,
        name: "new Tab",
      });
      console.log("11", this.addTab.length, this.addTab);
    },
    del(index) {
      console.log(index, "00", this.addTab);
      this.addTab.splice(index, 1);
    },
    clickLi(index) {
      this.tabIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
.ii {
  border-radius: 50%;
  border: 1px solid #000;
}
.xxMain {
  padding: 20px;
  .xxUl {
    display: flex;
    padding: 0;
    & > li {
      padding: 5px 10px;
      border: 1px solid #000;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
