<template>
  <el-container style="background-color: #f3f5f6">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="4">
          <QuestionType @add-content="addContent"></QuestionType>
        </el-col>
        <el-col :span="16">
          <MainEdit v-model:data="data.items" v-model:sub_title="data.sub_title"
                    v-model:form_title="data.form_title"></MainEdit>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <RawDisplayed class="col-3" :value="data.items" title="List 2"/>
        </el-col>
      </el-row>

    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import QuestionType from "@/components/edit/QuestionType";
import MainEdit from "@/components/edit/MainEdit";
import RawDisplayed from "@/components/tool/RawDisplayed";

export default {
  name: "Edit",
  components: {
    RawDisplayed,
    QuestionType,
    MainEdit
  },
  data: function () {
    return {
      showBorder: [],
      data: {
        form_title: '问卷标题',
        sub_title: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！',
        items: []
      },
    }
  },
  methods: {
    addContent: function (val) {
      console.log(this.data.items)
      console.log(val)
      this.data.items.push(this.common.deepCopy(val))
      // const len = this.data.items.length
      // setTimeout(function () {
      //   let id = 'content_' + (len - 1)
      //   document.getElementById(id).scrollIntoView({block: 'center', behavior: 'smooth'})
      // }, 100);
    }
  }
}
</script>

<style scoped>

</style>
