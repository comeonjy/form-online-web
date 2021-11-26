<template>
  <div class="left font-size-20 margin-top-50 margin-bottom-10" >{{ index + 1 }}. {{ contentTitle }}</div>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: ['contentTitle', 'index']
}
</script>

<style scoped>

</style>
