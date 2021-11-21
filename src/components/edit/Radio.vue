<template>
  <template v-for="(option,index) in data.content.options" :key="option">
    <div class="left" @mouseenter="this.showOption[index]=true" @mouseleave="this.showOption[index]=false">
      <el-radio-group>
        <el-radio :label="1">

          <template v-if="option.option_type==='text'">
              <span class="input-no-border">
              <el-input v-model="option.option_content.text"></el-input>
             </span>
          </template>

          <template v-else-if="option.option_type==='other'">
            <span class="other-input">
              <el-input v-model="option.option_content.text" @change="text(option.option_content.text)"></el-input>
            </span>
            <span class="other-input-mini">
            <el-input disabled size="mini"></el-input>
            </span>
          </template>

          <span v-show="showOption[index]">
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete" @click="removeOption(index)"></i>
          </span>


        </el-radio>
      </el-radio-group>
    </div>
  </template>
  <div class="button-no-border">
    <el-button @click="addSingle">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加单个选项
    </span>
    </el-button>

    <el-button @click="addOther">
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
      edit: false,
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
      arr.push(this.optionTemplate)
      this.$emit('update:data', arr)
    },
    addOther: function () {
      let arr = this.data.content.options
      arr.push(this.optionOtherTemplate)
      this.$emit('update:data', arr)
    },
    removeOption: function (index) {
      let arr = this.data.content.options
      arr.splice(index, 1)
      this.$emit('update:data', arr)
    },
    text: function (value) {
      let e = document.getElementsByClassName('.other-input >>> .el-input')
      console.log(value, e)
      e.style.width = String(value).length * 0.32 + 'rem'
      console.log(value, e)
    }
  }
}
</script>

<style scoped>


i {
  font-size: 20px;
  margin: 0 10px;
}

i:hover {
  color: red;
}

.input-no-border >>> .el-input__inner {
  border: 0;
  padding-left: 0;
  font-size: 16px;
}

.input-no-border >>> .el-input__inner:hover {
  background-color: rgba(128, 133, 144, .06);
}

.input-no-border >>> .el-input {
  width: 80%;
}

.other-input >>> .el-input__inner {
  border: 0;
  padding-left: 0;
  font-size: 16px;
}

.other-input >>> .el-input__inner:hover {
  background-color: rgba(128, 133, 144, .06);
}

.other-input >>> .el-input {
  width: 60%;
}
.other-input-mini >>> .el-input{
  width: 20%;
}

.button-no-border >>> .el-button {
  border: 0;
}

.left >>> .el-radio-group {
  width: 100%;
}

.left >>> .el-radio {
  width: 100%;
  margin: 5px;
}
</style>
