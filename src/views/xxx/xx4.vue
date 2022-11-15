<template>
  <div>
    <selectson>
      <el-select v-model="value1" placeholder="请选择" slot="select1">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择" slot="select2">
        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <input class="hei" type="text" v-model="val1" slot="input1" />
      <input class="hei" type="text" v-model="val2" slot="input2" />
    </selectson>

    <el-select v-model="value3" placeholder="请选择">
      <fzselect v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" :width="200"
        @mouseover.native="showAddress(item)">
      </fzselect>
    </el-select>
    <div>gitGit</div>
    <p v-pre>sadsad</p>
    <button @click="sub">提交</button>
    <button @click="changeCompon">改变组件</button>
    <component :is="currentView">
      <home></home>
      <posts></posts>
    </component>
    <div>
      <p v-once>输入框的值：{{ msg }}</p>
      <p>输入框的值：{{ msg }}</p>
      <input type="text" v-model="msg" />
    </div>

    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <!--  -->
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}</span>
      </transition-group>
    </div>
    <!--  -->
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="11">
          <div class="tit">人员</div>
        </el-col>
        <el-col :span="2">
          <div>
            <el-button></el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <button @click="addddd">阿牛a</button>
    <!--  -->
  </div>
</template>

<script>
import fzselect from "./FZSelect.vue";
import selectson from "./selectAndInput.vue";
import posts from "./posts.vue";
import home from "./home.vue";
import { messageBox } from "@/utils/messageBox";
import { alertMsgTip } from "@/utils/alertMsgTip";
export default {
  components: {
    selectson,
    fzselect,
    posts,
    home,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      val1: "",
      val2: "",
      show: true,
      msg: "sxscs",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      currentView: "home",
      options1: [
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
      ],
      options2: [
        {
          value: "111",
          label: "111",
        },
        {
          value: "222",
          label: "222",
        },
        {
          value: "333",
          label: "333",
        },
      ],
      options3: [
        {
          value: "1111111111111111111111111111",
          label: "11111111111111111111111111111",
        },
        {
          value: "2222222222222222222222222222222",
          label: "22222222222222222222222222222",
        },
        {
          value: "3333333333333333333333333333",
          label: "333333333333333333333333333333",
        },
      ],
    };
  },
  methods: {
    xx(str) {
      console.log(...str, "\uD83D\uDE80");
      console.log([...str].length);
      return [...str].length;
    },
    sub() {
      console.log(this.value1, this.value2, this.val1, this.val2);
    },
    showAddress(item) {
      console.log("009", item);
    },
    changeCompon() {
      this.currentView = "posts";
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      // this.$forceUpdate();
      console.log(this.randomIndex(), this.nextNum, "------");
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    addddd() {
      messageBox(this,true,"确定",true,"warning","是否确认删除",function(){
              alert("001")
            })

      // alertMsgTip("success", "123", true, this);
    },
    // shuffle: function () {
    //   this.items = _.shuffle(this.items); // 数组新增或移除元素产生平滑动画
    // },
  },
  mounted() {
    console.log("我在main上新增了");
    console.log("我和new合并，但我两不一样");
    this.xx("x\uD83D\uDE80y");
  },
};
</script>

<style scoped >
.hei {
  height: 30px;
}

.xxc {
  width: 100%;
  height: 500px;
  border: 1px solid #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>