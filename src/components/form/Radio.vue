<template>
  <template v-for="(option,index) in data.content.options" :key="option">
    <div class="left">
      <el-radio-group v-model="radioValue">
        <el-radio :label="option.option_value" name="1" @change="changeRadio(index,option.option_type)">
          {{ option.option_content.text }}
          <template v-if="option.option_type==='other'">
            <el-input v-model="answerOther" v-show="showOtherInput[index] || userAnswer.select===option.option_value"
                      @focus="focusOtherInput(option.option_value)"></el-input>
          </template>
        </el-radio>
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
    return {
      showOtherInput: []
    }
  },
  methods: {
    focusOtherInput: function (val) {
      this.$emit('update:userAnswer', {
        other: this.answerOther,
        select: val
      })
    },
    changeRadio: function (index, type) {
      console.log(index, type)
      if (type === 'other') {
        this.showOtherInput[index] = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.el-input ::v-deep(.el-input__inner) {
  border-width: 0 0 2px 0;
  border-bottom: solid 2px $--color-primary;
  border-radius: 0;
}
</style>
