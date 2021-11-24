<template>
  <p class="left" >{{ index + 1 }}. {{ contentTitle }}</p>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: ['contentTitle', 'index']
}
</script>

<style scoped>
p{
  font-size: 16px;
}
</style>
