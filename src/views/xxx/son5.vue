<template>
  <div>
    <el-card class="box-card">
      <span>卡片选择</span>
      <el-row :gutter="24">
        <el-col :span="6" class="xx">
          <el-button> <slot name="myBtn"></slot></el-button>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6" class="xx">
          <el-button><slot name="myBtn2"></slot></el-button>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
    </el-card>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
 
};
</script>

<style scoped>
.xx {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>