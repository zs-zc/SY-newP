<template>
  <div>
    <el-card class="box-card">
      <span>卡片选择</span>
      <el-row :gutter="24">
        <el-col :span="6" class="xx">
          <el-button @click="btn1"> <slot name="myBtn"></slot></el-button>
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <el-select v-model="value1" placeholder="请选择">
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
          <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6" class="xx">
          <el-button @click="btn2"><slot name="myBtn2"></slot></el-button>
          <el-input v-model="input3" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <el-select v-model="value2" placeholder="请选择">
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
          <el-input v-model="input4" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    sendSon: {
      type: String,
      default: "",
    },
    form: {
      type: Object,
    },
  },
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
      input1: this.sendSon,
      input2: "",
      input3: "",
      input4: "",
      value1: "",
      value2: "",
    };
  },
  methods: {
    btn1() {
      alert("001");
      console.log(this.form, "传过来的form");
    },
    btn2() {
      this.$emit("changeDia", true);
    },
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