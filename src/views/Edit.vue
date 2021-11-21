<template>
  <el-container style="background-color: #f3f5f6">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="4">
          <QuestionType :data="questionTypeList"></QuestionType>
        </el-col>
        <el-col :span="16">
          <MainEdit v-model:data="data.items" v-model:sub_title="data.sub_title" v-model:form_title="data.form_title"></MainEdit>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <RawDisplayed class="col-3" :value="questionTypeList" title="List 1"/>
        </el-col>
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
      data: {
        form_title: '问卷标题',
        sub_title: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！',
        items: []
      },
      questionTypeList: [
        {
          name: '单选题',
          content: {
            content_title: '请选择一个选项',
            content_type: 'radio',
            options: [
              {
                option_type: 'text',
                option_content: {
                  text: '选项1',
                  explain: '选项说明',
                },
                option_value: '1'
              },
              {
                option_type: 'text',
                option_content: {
                  text: '选项2',
                  explain: '选项说明',
                },
                option_value: '2'
              }
            ],
            extend: {
              require: true
            },
            userAnswer: {}
          }
        },
        {
          id: 2,
          type: 'checkbox',
          name: '多选题'
        },
        {
          id: 3,
          type: 'select',
          name: '下拉题'
        },
        {
          id: 4,
          type: 'fillblank',
          name: '填空题'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
