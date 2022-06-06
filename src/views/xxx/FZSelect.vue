<template>
  <el-option :style="`width: ${width}px`" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-option>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-select-dropdown__item {
  min-height: 35px;
  height: auto;
  overflow: hidden;
  //   white-space: initial;
  //   text-overflow: initial;
  line-height: 25px;
  padding: 5px 20px;
  white-space: nowrap; //禁止换行
  text-overflow: ellipsis; //...
}
</style>
