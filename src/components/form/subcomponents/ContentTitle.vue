<template>
  <h4 class="left">{{ index + 1 }}. {{ contentTitle }}</h4>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: ['contentTitle', 'index']
}
</script>

<style scoped>

</style>
