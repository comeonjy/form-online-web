<template>
  <el-row>
    <el-col>
      <el-card>
         <span class="input-no-border">
             <div class="input-form_title">
               <el-input v-model="formTitle"></el-input>
             </div>
              <el-input v-model="subTitle"></el-input>
         </span>
      </el-card>
    </el-col>
    <el-col>
      <draggable class="dragArea list-group" :list="data" handle=".handle" group="question" @change="log"
                 itemKey="index">
        <template #item="{ element,index }">
          <div class="list-group-item">
            <el-card style="margin: 20px 0" :class="{border:showBorder[index]}" :id="'content_'+index">
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
              <ContentTitle :index="index" v-model:content-title="element.content.content_title"></ContentTitle>
              <Radio :data="element" :index="index" v-if="element.content.content_type==='radio'"></Radio>
            </el-card>
          </div>
        </template>
      </draggable>
    </el-col>
  </el-row>

</template>

<script>
import draggable from "vuedraggable";
import Radio from "@/components/edit/Radio";
import ContentTitle from "@/components/edit/subcomponents/ContentTitle";

export default {
  name: "MainEdit",
  components: {
    draggable,
    Radio,
    ContentTitle
  },
  props: [
    'data', 'form_title', 'sub_title'
  ],
  emits: [
    'update:data', 'update:form_title', 'update:sub_title'
  ],
  computed: {
    formTitle: {
      get: function () {
        return this.form_title
      },
      set: function (val) {
        console.log(val)
        this.$emit('update:form_title', val)
      }
    },
    subTitle: {
      get: function () {
        return this.sub_title
      },
      set: function (val) {
        console.log(val)
        this.$emit('update:sub_title', val)
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

      setTimeout(function (){
        let id = 'content_' + (index + 1)
        console.log(id)
        document.getElementById(id).scrollIntoView({ block: 'center', behavior: 'smooth' })
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

<style scoped>
.input-no-border >>> .el-input__inner {
  border: 0;
  padding-left: 0;
  font-size: 16px;
}

.input-no-border >>> .el-input__inner:hover {
  background-color: rgba(128, 133, 144, .06);
}

.input-form_title >>> .el-input__inner {
  font-size: 20px;
  font-weight: bold;
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
  color: #409eff;
}

.border {
  border: solid 1px #409eff;
}
</style>
