<template>
  <template v-for="(option) in data.content.options" :key="option">
    <div class="left">
      <el-radio-group v-model="radioValue">
        <el-radio :label="option.optionValue">
          {{ option.optionContent.text }}
          <template v-if="option.optionType==='other'">
            <el-input v-model="answerOther" v-show="userAnswer.select===option.optionValue"
                      @focus="focusOtherInput(option.optionValue)"></el-input>
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

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.left ::v-deep(.el-radio__label) {
  font-size: 18px;
  font-weight: normal;
}

.el-input ::v-deep(.el-input__inner) {
  font-size: 18px;
  border-width: 0 0 2px 0;
  border-bottom: solid 2px $--color-primary;
  border-radius: 0;
}

.el-radio {
  line-height: 40px;
}
</style>
