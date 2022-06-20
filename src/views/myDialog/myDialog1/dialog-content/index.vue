<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-card>
        <el-row class="xx">
          <el-col>
            <span class="w100">日期</span>
            <el-input
              v-model="parentObj.date"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="xx">
          <el-col>
            <span class="w100">姓名</span>
            <el-input
              v-model="parentObj.name"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
        </el-row>

        <el-row class="xx">
          <el-col>
            <span class="w100">地址</span>
            <el-input
              v-model="parentObj.address"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      parentObj: {},
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    openDia(val) {
      this.dialogVisible = true;
      console.log(val, "打开弹窗并传过来的val");
      this.parentObj = val;
    },
    closeDia() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.xx{
    margin-top: 10px;
}
.xx .el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w100 {
  min-width: 50px;
  display: inline-block;
  padding: 5px 10px;
}
</style>