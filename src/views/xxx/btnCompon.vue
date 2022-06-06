<template>
  <button class="button" @click="$emit('click')">
    <slot>
      <div class="formatting">{{ text }}</div>
    </slot>
  </button>
</template>
<script>
export default {};
</script>

<style>
</style>