<template>
  <el-row>
    <el-col>
      <el-card>
         <span class="input-no-border">
               <el-input v-model="formTitleInput"></el-input>
                <el-input v-model="subTitleInput"></el-input>
         </span>
      </el-card>
    </el-col>
    <el-col>
      <draggable class="dragArea list-group" :list="data" handle=".handle" group="question" @change="log"
                 itemKey="index">
        <template #item="{ element,index }">
          <el-card class="margin-top-20 margin-bottom-20" :class="{border:showBorder[index]}" :id="'content_'+index">
            <div class="operate" @mouseenter="showBorder[index]=true" @mouseleave="showBorder[index]=false">
              <el-tooltip content="拖拽" placement="top" effect="light">
                <i class="el-icon-rank handle"></i>
              </el-tooltip>
              <el-tooltip content="复制" placement="top" effect="light">
                <i class="el-icon-copy-document" @click="copyContent(index)"></i>
              </el-tooltip>
              <el-tooltip content="删除" placement="top" effect="light">
                <i class="el-icon-delete" @click="removeContent(index)"></i>
              </el-tooltip>
            </div>
            <ContentTitle :index="index" v-model:content-title="element.content.contentTitle"></ContentTitle>
            <Radio :data="element" :index="index" v-if="element.content.contentType==='radio'"></Radio>
            <CheckBox :data="element" :index="index" v-else-if="element.content.contentType==='checkbox'"></CheckBox>
            <Fillblank :data="element" :index="index" v-else-if="element.content.contentType==='fillblank'"></Fillblank>
            <Select :data="element" :index="index" v-else-if="element.content.contentType==='select'"></Select>
          </el-card>
        </template>
      </draggable>
    </el-col>
  </el-row>

</template>

<script>
import draggable from "vuedraggable";
import Radio from "@/components/edit/Radio";
import ContentTitle from "@/components/edit/subcomponents/ContentTitle";
import CheckBox from "@/components/edit/CheckBox";
import Select from "@/components/edit/Select";
import Fillblank from "@/components/edit/Fillblank";

export default {
  name: "MainEdit",
  components: {
    CheckBox,
    draggable,
    Radio,
    Select,
    Fillblank,
    ContentTitle
  },
  props: [
    'data', 'formTitle', 'subTitle'
  ],
  emits: [
    'update:data', 'update:formTitle', 'update:subTitle'
  ],
  computed: {
    formTitleInput: {
      get: function () {
        return this.formTitle
      },
      set: function (val) {
        console.log(val)
        this.$emit('update:formTitle', val)
      }
    },
    subTitleInput: {
      get: function () {
        return this.subTitle
      },
      set: function (val) {
        console.log(val)
        this.$emit('update:subTitle', val)
      }
    }
  },
  data: function () {
    return {
      showBorder: []
    }
  },
  methods: {
    copyContent: function (index) {
      let arr = this.data
      arr.splice(index + 1, 0, this.common.deepCopy(this.data[index]))
      this.$emit('update:data', arr)

      setTimeout(function () {
        let id = 'content_' + (index + 1)
        document.getElementById(id).scrollIntoView({block: 'center', behavior: 'smooth'})
      }, 100);

    },
    removeContent: function (index) {
      let arr = this.data
      arr.splice(index, 1)
      this.$emit('update:data', arr)
    },
    log: function (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/edit/css.scss";

.border {
  border: solid 1px $--color-primary;
  box-shadow: 8px 8px 14px 1px rgb(92 112 128 / 60%)!important;
}

.operate {
  text-align: right;
  font-weight: bold;
  font-size: 25px;
}

.operate > i {
  margin: 0 10px;
}

.operate > i:hover {
  color: $--color-primary;
}

.input-form_title ::v-deep(.el-input__inner) {
  font-size: 20px;
  font-weight: bold;
}

</style>
