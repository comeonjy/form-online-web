<template>
  <template v-for="(option,index) in data.content.options" :key="option">
    <div class="left margin-left-20" @mouseenter="this.showOption[index]=true"
         @mouseleave="this.showOption[index]=false">
      <el-radio-group class="width100">
        <el-radio :label="1">

          <template v-if="option.option_type==='text'">
              <span class="input-no-border">
              <el-input v-model="option.option_content.text" class="width80"></el-input>
             </span>
          </template>

          <template v-else-if="option.option_type==='other'">
            <span class="input-no-border">
              <el-input v-model="option.option_content.text" class="width65"></el-input>
            </span>
            <span class="other-input-mini">
            <el-input disabled size="mini" class="width15"></el-input>
            </span>
          </template>

          <span v-show="showOption[index]">
              <el-tooltip content="编辑" placement="top" effect="light">
              <i class="el-icon-edit"></i>
              </el-tooltip>
            <el-tooltip content="删除" placement="top" effect="light">
              <i class="el-icon-delete" @click="removeOption(index)"></i>
            </el-tooltip>
          </span>


        </el-radio>
      </el-radio-group>
    </div>
  </template>
  <div class="button-no-border">
    <el-button @click="addSingle" class="no-border">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加单个选项
    </span>
    </el-button>

    <el-button @click="addOther" class="no-border">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加其他选项
    </span>
    </el-button>
  </div>
</template>

<script>

export default {
  name: 'Radio',
  props: ['data', 'index'],
  emits: ['update:data'],
  data: function () {
    return {
      showOption: [],
      optionTemplate: {
        option_type: 'text',
        option_content: {
          text: '选项',
          explain: '选项说明',
        },
      },
      optionOtherTemplate: {
        option_type: 'other',
        option_content: {
          text: '选项',
          explain: '选项说明',
        },
      },
    }
  },
  methods: {
    addSingle: function () {
      let arr = this.data.content.options
      arr.push(this.common.deepCopy(this.optionTemplate))
      this.$emit('update:data', arr)
    },
    addOther: function () {
      let arr = this.data.content.options
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
