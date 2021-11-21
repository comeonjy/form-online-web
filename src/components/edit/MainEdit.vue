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
      <draggable class="dragArea list-group" :list="data" handle=".handle" group="question" @change="log" itemKey="index">
        <template #item="{ element,index }">
          <div class="list-group-item">
            <el-card style="margin: 20px 0">
              <div class="operate">
                <i class="el-icon-rank handle"></i>
                <i class="el-icon-copy-document"></i>
                <i class="el-icon-delete"></i>
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
    'data', 'sub_title', 'form_title'
  ],
  emits: [
    'update:form_title', 'update:sub_title'
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
    return {}
  },
  methods: {
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
.operate{
  text-align: right;
  font-weight: bold;
  font-size: 25px;
}
.operate > i{
  margin: 0 10px;
}
</style>
