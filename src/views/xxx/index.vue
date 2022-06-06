<template>
  <div>
    <el-button type="primary" @click="dialogF">主要按钮</el-button>
    <el-button type="primary" @click="show = !show">动画按钮</el-button>
    <el-collapse-transition>
      <div class="transition-box" v-show="show" style="height:200px" >xxx</div>
    </el-collapse-transition>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <!-- <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form> -->

      <el-row>
        <el-col :span="24"
          ><div class="grid-content bg-purple-dark"><input type="text" /></div
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"
          ><div class="grid-content bg-purple"><input type="text" /></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"><input type="text" /></div
        ></el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {},
      show: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value2: "",
    };
  },
  methods: {
    dialogF() {
      this.dialogFormVisible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 300px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.el-row {
  margin-bottom: 20px;
  & input {
    width: 100%;
  }
  &:last-child {
    margin-bottom: 0;
  }
  & .el-select {
    width: 100%;
    height: 100%;
  }
}
.el-col {
  border-radius: 4px;
}
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
