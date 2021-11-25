<template>
  <p class="left font-size-18" >{{ index + 1 }}. {{ contentTitle }}</p>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: ['contentTitle', 'index']
}
</script>

<style scoped>

</style>
