<template>
  <div>
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="table管理" name="first">
          <dialogTable ref="diaTable"></dialogTable>
        </el-tab-pane>
        <el-tab-pane label="form管理" name="second"
          ><dialogForm ref="diaForm"></dialogForm
        ></el-tab-pane>
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
import dialogForm from "./dialog-form/index.vue";
import dialogTable from "./dialog-table/index.vue";

export default {
  components: {
    dialogForm,
    dialogTable,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
</style>