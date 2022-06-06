<template>
  <div class="selMain">
    <!-- <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row> -->
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple"><slot name="select1"></slot></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple"><slot name="select2"></slot></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <slot name="input1" style="heigth: 40px"></slot></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple"><slot name="input2"></slot></div
      ></el-col>
    </el-row>
    <!-- <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row> -->

    <!-- <slot name="select1"></slot>
    <slot name="select2"></slot>
    <slot name="select3"></slot>
    <slot name="select4"></slot>
    <slot name="select5"></slot>

    <slot name="input1"></slot>
    <slot name="input2"></slot>
    <slot name="input3"></slot>
    <slot name="input4"></slot>
    <slot name="input5"></slot> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"  scoped>
.selMain {
  /* display: flex;
  justify-content: start; */
  padding: 20px;
}
.xx {
  display: flex;
  justify-content: start;
}
.grid-content {
  height: 40px;
  line-height: 40px;
}
.grid-content input {
  height: 40px;
}

// .el-row {
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// }
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>