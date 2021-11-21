<template>
  <div class="left">
    <template v-for="(option,optioni) in data.content.options" :key="option">
      {{ option.option_content.text }}
      <el-row>
        <el-col :xs="24" :sm="20" :md="16" :lg="10">
          <el-input v-model="inputValue[optioni]" :value="option.option_value" :label="option.option_content.text"></el-input>
        </el-col>
      </el-row>
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

<style scoped>

</style>
