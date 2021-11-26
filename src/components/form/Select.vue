<template>
  <div class="left">
    <el-select v-model="selectValue" placeholder="请选择" :popper-append-to-body=false>
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

::v-deep(.el-input__inner) {
  font-size: 18px;
  font-weight: normal;
}

::v-deep(.el-select-dropdown__item) {
  font-size: 18px;
}
</style>
