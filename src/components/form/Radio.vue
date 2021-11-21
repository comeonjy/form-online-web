<template>
  <template v-for="(option) in data.content.options" :key="option">
    <div class="left">
      <el-radio-group v-model="radioValue">
        <el-radio :label="option.option_value">
          <template v-if="option.option_type==='text'">
            {{ option.option_content.text }}
          </template>
          <template v-else-if="option.option_type==='other'">
            {{ option.option_content.text }}
            <el-input v-model="answerOther" @focus="focusOtherInput(option.option_value)"></el-input>
          </template>
        </el-radio>
        <br>
      </el-radio-group>
    </div>
  </template>
</template>

<script>

export default {
  name: 'Radio',
  props: ['data', 'userAnswer', 'index'],
  emits: ['update:userAnswer'],
  computed: {
    radioValue: {
      get: function () {
        return this.userAnswer.select
      },
      set: function (val) {
        console.log('set:' + val)
        this.$emit('update:userAnswer', {
          other: this.answerOther,
          select: val
        })
      }
    },
    answerOther: {
      get: function () {
        return this.userAnswer.other
      },
      set: function (val) {
        this.$emit('update:userAnswer', {
          other: val,
          select: this.userAnswer.select
        })
      }
    }
  },
  data: function () {
    return {}
  },
  methods: {
    focusOtherInput: function (val) {
      this.$emit('update:userAnswer', {
        other: this.answerOther,
        select: val
      })
    }
  }
}
</script>

<style scoped>

</style>
