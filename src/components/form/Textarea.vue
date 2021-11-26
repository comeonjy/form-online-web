<template>
  <div class="left">
    <template v-for="(option,optionIndex) in data.content.options" :key="option">
      <div class="margin-top-20">
        <span>
                  {{ option.option_content.text }}:
        </span>
        <el-input type="textarea" v-model="inputValue[optionIndex]"></el-input>
      </div>

    </template>
  </div>
</template>

<script>

export default {
  name: 'Textarea',
  props: ['data', 'userAnswer', 'index'],
  emits: ['update:userAnswer'],
  computed: {
    inputValue: {
      get: function () {
        return this.userAnswer.arrValue
      },
      set: function (val) {
        this.$emit('update:userAnswer', {
          arrValue: val
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.el-textarea ::v-deep(.el-textarea__inner) {
  font-size: 16px;
}
</style>
