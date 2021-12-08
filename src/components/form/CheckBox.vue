<template>
  <template v-for="(option) in data.content.options" :key="option">
    <div class="left">
      <el-checkbox-group v-model="checkboxList">
        <el-checkbox :label="option.optionValue">
          <template v-if="option.optionType==='text'">
            {{ option.optionContent.text }}
          </template>
          <template v-else-if="option.optionType==='other'">
            {{ option.optionContent.text }}
            <el-input v-model="answerOther" v-show="userAnswer.arrValue.includes(option.optionValue)" @focus="focusOtherInput(option.optionValue)"></el-input>
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

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';


.left ::v-deep(.el-checkbox__label) {
  font-size: 18px;
  font-weight: normal;
}

.el-input ::v-deep(.el-input__inner) {
  font-size: 18px;
  border-width: 0 0 2px 0;
  border-bottom: solid 2px $--color-primary;
  border-radius: 0;
}

.el-checkbox {
  line-height: 40px;
}

</style>
