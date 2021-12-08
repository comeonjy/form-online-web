<template>
  <div class="left">
    <template v-for="(option) in data.content.options" :key="option">
      <div class="margin-top-20 margin-left-20" @mouseenter="this.showOption[index]=true"
           @mouseleave="this.showOption[index]=false">
        <span class="input-no-border">
              <el-input v-model="option.optionContent.text" class="width80"></el-input>
            </span>
        <span v-show="showOption[index]">
            <el-tooltip content="删除" placement="top" effect="light">
              <i class="el-icon-delete" @click="removeOption(index)"></i>
            </el-tooltip>
          </span>
        <span class="other-input-mini">
            <el-input :rows="2" type="textarea" class="width50"></el-input>
            </span>


      </div>

    </template>
    <div class="button-no-border" style="text-align: center;margin: 20px auto;">
      <el-button @click="addSingle" class="border0">
      <span style="color:#409eff;">
    <i class="el-icon-plus"></i>添加单个选项
    </span>
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Fillblank',
  props: ['data', 'index'],
  emits: ['update:data'],
  data: function () {
    return {
      showOption: [],
      optionTemplate: {
        optionType: 'text',
        optionContent: {
          text: '填空',
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
    removeOption: function (index) {
      let arr = this.data.content.options
      arr.splice(index, 1)
      this.$emit('update:data', arr)
    }
  },
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

</style>
