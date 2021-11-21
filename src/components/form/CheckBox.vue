<template>
  <template v-for="(option) in data.content.options" :key="option">
    <div class="left">
      <el-checkbox-group v-model="checkboxList">
        <el-checkbox :label="option.option_value">
          <template v-if="option.option_type==='text'">
            {{ option.option_content.text }}
          </template>
          <template v-else-if="option.option_type==='other'">
            {{ option.option_content.text }}
            <el-input v-model="answerOther" @focus="focusOtherInput(option.option_value)"></el-input>
          </template>
        </el-checkbox>
        <br>
      </el-checkbox-group>
    </div>
  </template>
</template>

<script>

export default {
  name: 'CheckBox',
  props: ['data', 'userAnswer', 'index'],
  emits: ['update:userAnswer'],
  computed: {
    checkboxList: {
      get: function () {
        return this.userAnswer.arrValue
      },
      set: function (val) {
        this.$emit('update:userAnswer', {
          other: this.answerOther,
          arrValue: val
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
          arrValue: this.userAnswer.arrValue
        })
      }
    }
  },
  data: function () {
    return {}
  },
  methods: {
    focusOtherInput: function (val) {
      const s = new Set(this.userAnswer.arrValue).add(val)
      this.$emit('update:userAnswer', {
        other: this.answerOther,
        arrValue: Array.from(s)
      })
    }
  }
}
</script>

<style scoped>

</style>
