<template>
  <div>
    <el-dialog
      :title="DialogTitle"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <slot></slot>
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
  props: {
    DialogTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      dialogVisible: false,
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
    openDia(row) {
      this.dialogVisible = true;
      console.log(row, "row");
    },
    closeDia() {
      this.dialogVisible = false;
    },
  },
};
</script>