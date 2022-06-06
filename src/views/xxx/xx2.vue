<template>
  <div class="xx2Main">
    <p>Sss</p>
    <p>Sss</p>
    <div @click="fa" style="width:100px">
      aaa
      <a href="#" @click="aa">ssss</a>
    </div>
    <btnCon text="Formatted text"> </btnCon>
    <btnCon>
      <div class="different-formatting">
        Do something a little different here
      </div>
    </btnCon>
    <div v-show="isshow" class="xx">xsaxsaxsaxasx</div>
    <son ref="son">
      <el-button @click="handleNewAd" slot="newAd">灵活的按钮</el-button>
    </son>
    <!-- 水水水水水水水水水水水水水 -->
  </div>
</template>

<script>
import son from "./xx3_son.vue";
import btnCon from "./btnCompon.vue";
export default {
  components: {
    son,
    btnCon,
  },
  data() {
    return {
      isshow: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScrollListener);
  },
  methods: {
    //监听窗口滚动
    windowScrollListener() {
      //获取操作元素最顶端到页面顶端的垂直距离
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 480) {
        this.isshow = true; //大于480时显示元素
      }
      if (scrollTop < 480) {
        this.isshow = false; //小于480时隐藏元素
      }
    },
    handleNewAd() {
      console.log("new add");
    },
    fa() {
      alert("0");
    },
    aa() {
      alert("1");
    },
  },

  destroyed() {
    //离开页面时删除该监听
    window.removeEventListener("scroll", this.windowScrollListener);
  },
};
</script>

<style>
.xx2Main {
  width: 100vw;
  overflow: scroll;
}
.xx {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  position: fixed;
  right: 100px;
  top: 100px;
}
</style>