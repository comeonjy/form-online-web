<template>
  <el-container>
    <el-main>
      <el-row class="el-row-center">
        <el-col :xs="0" :sm="3" :md="5" :lg="6" :xl="7"></el-col>
        <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="10"
                style="background-color: white;text-align:center ;max-width: 800px;">
          <el-row>
            <img src="../../public/images/img.webp" alt="" style="width: 100%;">
          </el-row>
          <el-row>
            <el-col>
              <div class="font-size-24 margin-top-20 margin-bottom-20">{{ data.formTitle }}</div>
              <div class="font-size-18 margin-bottom-20 color-grey" v-if="data.subTitle!==''">{{
                  data.subTitle
                }}
              </div>
              <div class="margin-left-20 margin-right-20">

                <template v-for="(item,index) in data.items" :key="item">
                  <ContentTitle :index="index" :content-title="item.content.contentTitle"></ContentTitle>
                  <Radio :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                         v-if="item.content.contentType==='radio'"></Radio>
                  <CheckBox :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                            v-else-if="item.content.contentType==='checkbox'"></CheckBox>
                  <Select :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                          v-else-if="item.content.contentType==='select'"></Select>
                  <Textarea :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                            v-else-if="item.content.contentType==='textarea'"></Textarea>
                </template>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button type="primary" style="margin: 100px 0px" @click="submit">提交</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="0" :sm="3" :md="5" :lg="6" :xl="7"></el-col>

      </el-row>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>

</template>

<script>

import {ElNotification} from 'element-plus'
import Radio from '@/components/form/Radio'
import CheckBox from '@/components/form/CheckBox'
import Select from '@/components/form/Select'
import ContentTitle from '@/components/form/subcomponents/ContentTitle'
import Textarea from '@/components/form/Textarea'
import {form_answer_save, form_single} from "@/api/common";
import {useRoute} from "vue-router";

export default {
  name: 'App',
  components: {
    Select,
    CheckBox,
    Radio,
    ContentTitle,
    Textarea
  },
  mounted() {
    const route = useRoute();
    console.log(route.query.uuid);
    form_single({
      uuid: route.query.uuid,
    }).then((res) => {
      console.log(this.data)
      console.log(res.form)
      this.data = res.form
    })
  },
  methods: {
    submit: function () {
      let msg = ''
      for (let i = 0; i < this.data.items.length; i++) {
        console.log(this.data.items[i].content.userAnswer)
        msg = msg + JSON.stringify(this.data.items[i].content.userAnswer)
      }
      form_answer_save({
        form: this.data
      }).then((res) => {
        console.log(res)
      })
      ElNotification({
        title: '提交',
        message: msg,
        duration: 2000
      })
      this.$alert('提交成功!', '', {
        confirmButtonText: 'OK',
        callback: () => {
          this.$router.push({name: 'Home'})
        },
      })

      console.log(JSON.stringify(this.data))
    }
  },
  data: function () {
    return {
      data: {}
    }
  }
}
</script>

<style lang="scss" scoped>

.el-main {
  padding: 0 !important;
}


</style>
