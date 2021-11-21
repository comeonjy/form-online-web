<template>
  <div class="left">
    <el-select v-model="selectValue" placeholder="请选择">
      <template v-for="option in data.content.options" :key="option">
        <el-option :value="option.option_value" :label="option.option_content.text"></el-option>
      </template>
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: ['data', 'userAnswer', 'index'],
  emits: ['update:userAnswer'],
  computed: {
    selectValue: {
      get: function () {
        return this.userAnswer.select
      },
      set: function (val) {
        console.log('set:' + val)
        this.$emit('update:userAnswer', {
          select: val
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
