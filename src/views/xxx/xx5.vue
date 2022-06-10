<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <sonFive>
      <template slot="myBtn">改变的btn</template>
      <template slot="myBtn2">改变的btn2</template>
    </sonFive>

    <el-tabs class="elTabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!--  -->
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script>
import sonFive from "./son5.vue";
export default {
  components: {
    sonFive,
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
      value: "",
      activeName: "second",
      count: 0,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    load() {
      this.count += 2;
    },
  },
};
</script>

<style>
.main {
  padding: 20px;
  height: 100%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.el-col {
  /* border: 1px solid #000; */
}
.el-col .el-select {
  width: 100%;
}
.el-row {
  margin-top: 10px;
}
.elTabs {
  height: 1000px;
  border: 1px solid #000;
}

.el-pagination {
  margin-top: 10px;
  text-align: center;
}
</style>