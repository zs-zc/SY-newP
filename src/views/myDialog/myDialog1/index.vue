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
      </el-tabs>
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="percentage"
        :color="customColors"
      ></el-progress>
      <div class="flooter">
        <el-button :disabled="clock" @click="addProgress">进度条+</el-button>
        <el-button @click="changeData">修改tab</el-button>
        <el-switch
          v-model="clock"
          active-color="#13ce66"
          active-text="close Progress"
          @change="stopProgress"
        >
        </el-switch>
      </div>
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
      percentage: 20,
      clock: false,
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    addProgress() {
      this.percentage += 10;

      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    changeData() {
      console.log("009");
      this.$refs.diaTable.tableData[0].name = "王洽";
    },
    stopProgress() {
      console.log(this.clock);
    },
  },
};
</script>

<style>
.el-tabs {
  margin: 10px 0;
}
.flooter {
  margin: 10px 0;
}
</style>