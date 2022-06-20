<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope"
          ><span class="cursor" @click="taskTable(scope.row)">{{
            scope.row.name
          }}</span></template
        >
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <dialogContent ref="dialogContent"></dialogContent>
  </div>
</template>

<script>
import dialogContent from "../dialog-content/index.vue";
export default {
  components: { dialogContent },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    taskTable(val) {
      console.log(val, this.tableData, "val");
      this.$refs.dialogContent.openDia(val);
    },
  },
};
</script>

<style>
.cursor {
  cursor: pointer;
}
</style>