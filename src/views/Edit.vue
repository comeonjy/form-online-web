<template>
  <el-container style="background-color: #f3f5f6">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="4">
          <QuestionType @add-content="addContent"></QuestionType>
        </el-col>
        <el-col :span="16">
          <MainEdit v-model:data="data.items" v-model:sub-title="data.subTitle"
                    v-model:form-title="data.formTitle"></MainEdit>
          <el-button class="margin-top-40" type="primary" @click="saveForm">保存</el-button>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import QuestionType from "@/components/edit/QuestionType";
import MainEdit from "@/components/edit/MainEdit";
import {form_save} from "@/api/common";

export default {
  name: "Edit",
  components: {
    QuestionType,
    MainEdit
  },
  data: function () {
    return {
      showBorder: [],
      data: {
        formTitle: '问卷标题',
        subTitle: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！',
        items: []
      },
    }
  },
  methods: {
    addContent: function (val) {
      console.log(this.data.items)
      console.log(val)
      this.data.items.push(this.common.deepCopy(val))
      const len = this.data.items.length
      setTimeout(function () {
        let id = 'content_' + (len - 1)
        document.getElementById(id).scrollIntoView({block: 'center', behavior: 'smooth'})
      }, 100);
    },
    saveForm:function (){
      console.log(this.data)
      form_save({
        form:this.data
      }).then((res)=>{
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>

</style>
