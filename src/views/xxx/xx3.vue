<template>
  <div class="xMain">
    <!-- <el-descriptions :column="1" border>
      <el-descriptions-item label="用户名" v-model="username"
        ><p class="message">{{ username }}</p></el-descriptions-item
      >
      <el-descriptions-item label="邮箱号" v-model="email" class="message"
        ><p class="message">{{ email }}</p></el-descriptions-item
      >
      <el-descriptions-item label="白洞值" v-model="level" class="message"
        ><p class="message">{{ level }}</p></el-descriptions-item
      >
      <el-descriptions-item label="座右铭" v-model="motto" class="message"
        ><p class="message">{{ motto }}</p></el-descriptions-item
      >
      <el-descriptions-item label="居住地" v-model="city" class="message"
        ><p class="message">{{ city }}</p></el-descriptions-item
      >
    </el-descriptions> -->

    <!-- <el-button type="success" @click="handleClcik">展示消息提示框</el-button> -->
    <son ref="son">
      <el-button type="primary" @click="submitForm('ruleForm')" slot="creat"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')" slot="resert">重置</el-button>
    </son>
  </div>
</template>

<script>
// import alert from "@/components/MessageAlert/alter.js";
import son from "./xx3_son.vue";
// 直接使用

export default {
  components: {
    son,
  },
  data() {
    return {
      username: "Huterox",
      email: 18100000000,
      motto: "除非我不想赢，否则没人能让我输",
      city: "九江",
      level: 9999,
      info: {
        name: "选择性",
        age: 12,
        sex: "nan",
      },
    };
  },
  methods: {
    // handleClcik() {
    //   console.log("009", alert);alert.info({ content: "消息提示", duration: 2 });
    // },
    submitForm(formName) {
      console.log("008", formName, this.$refs.son.$refs[formName]);
      this.$refs.son.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.message {
  width: 20em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xMain {
  width: 100vw;
  height: 100vh;
}
</style>