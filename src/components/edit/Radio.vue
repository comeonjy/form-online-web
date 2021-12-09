<template>
  <template v-for="(option,index) in data.content.options" :key="option">
    <div class="left margin-left-20" @mouseenter="this.showOption[index]=true"
         @mouseleave="this.showOption[index]=false">
      <el-radio :label="1">

        <template v-if="option.optionType==='text'">
              <span class="input-no-border">
              <el-input v-model="option.optionContent.text" class="width80"></el-input>
             </span>
        </template>

        <template v-else-if="option.optionType==='other'">
            <span class="input-no-border">
              <el-input v-model="option.optionContent.text" class="width65"></el-input>
            </span>
          <span class="other-input-mini">
            <el-input disabled size="mini" class="width15"></el-input>
            </span>
        </template>

        <span v-show="showOption[index]">
            <el-tooltip content="删除" placement="top" effect="light">
              <i class="el-icon-delete" @click="removeOption(index)"></i>
            </el-tooltip>
          </span>


      </el-radio>
    </div>
  </template>
  <div class="button-no-border">
    <el-button @click="addSingle" class="border0">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加单个选项
    </span>
    </el-button>

    <el-button @click="addOther" class="border0">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加其他选项
    </span>
    </el-button>
  </div>
</template>

<script>

import {ElMessage} from "element-plus";

export default {
  name: 'Radio',
  props: ['data', 'index'],
  emits: ['update:data'],
  data: function () {
    return {
      showOption: [],
      optionTemplate: {
        optionType: 'text',
        optionValue: '',
        optionContent: {
          text: '选项',
          explain: '选项说明',
        },
      },
      optionOtherTemplate: {
        optionType: 'other',
        optionValue: '',
        optionContent: {
          text: '选项',
          explain: '选项说明',
        },
      },
    }
  },
  methods: {
    addSingle: function () {
      let arr = this.data.content.options
      this.optionTemplate.optionValue = String(arr.length + 1)
      arr.push(this.common.deepCopy(this.optionTemplate))
      this.$emit('update:data', arr)
    },
    addOther: function () {
      for (let i = 0; i < this.data.content.options.length; i++) {
        if (this.data.content.options[i].optionType === 'other') {
          ElMessage({
            type: 'error',
            message: '其他选项只能存在一个',
          })
          return
        }
      }
      let arr = this.data.content.options
      this.optionOtherTemplate.optionValue=String(arr.length+1)
      arr.push(this.common.deepCopy(this.optionOtherTemplate))
      this.$emit('update:data', arr)
    },
    removeOption: function (index) {
      let arr = this.data.content.options
      arr.splice(index, 1)
      this.$emit('update:data', arr)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/edit/css.scss";

i {
  font-size: 20px;
  margin: 0 10px;
}

i:hover {
  color: red;
}

.el-radio {
  width: 100%;
  margin: 5px;
}

</style>
