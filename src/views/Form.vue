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
              <div class="font-size-24 margin-top-20 margin-bottom-20">{{ data.form_title }}</div>
              <div class="font-size-18 margin-bottom-20 color-grey" v-if="data.sub_title!==''">{{
                  data.sub_title
                }}
              </div>
              <div class="margin-left-20 margin-right-20">

                <template v-for="(item,index) in data.items" :key="item">
                  <ContentTitle :index="index" :content-title="item.content.content_title"></ContentTitle>
                  <Radio :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                         v-if="item.content.content_type==='radio'"></Radio>
                  <CheckBox :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                            v-else-if="item.content.content_type==='checkbox'"></CheckBox>
                  <Select :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                          v-else-if="item.content.content_type==='select'"></Select>
                  <Textarea :data="item" :index="index" v-model:user-answer="item.content.userAnswer"
                            v-else-if="item.content.content_type==='textarea'"></Textarea>
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
  },
  methods: {
    submit: function () {
      let msg = ''
      for (let i = 0; i < this.data.items.length; i++) {
        console.log(this.data.items[i].content.userAnswer)
        msg = msg + JSON.stringify(this.data.items[i].content.userAnswer)
      }
      ElNotification({
        title: '提交',
        message: msg,
        duration: 0
      })
      console.log(JSON.stringify(this.data))
    }
  },
  data: function () {
    return {
      data: {
        form_title: '示例问卷',
        sub_title: '欢迎使用问卷网！这是一份示例问卷。',
        items: [
          {
            content: {
              content_title: '问卷网支持创建哪些项目？',
              content_type: 'radio',
              options: [
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '1'
                },
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '3'
                },
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '4'
                },
                {
                  option_type: 'other',
                  option_content: {
                    text: '其他',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '2'
                },
              ],
              extend: {
                require: true
              },
              userAnswer: {
                other: '',
                select: '2'
              }
            }
          },
          {
            content: {
              content_title: '问卷网支持创建哪些项目？',
              content_type: 'checkbox',
              options: [
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '1'
                },
                {
                  option_type: 'other',
                  option_content: {
                    text: '其他',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '2'
                }
              ],
              extend: {
                require: true
              },
              userAnswer: {
                other: 'ok',
                arrValue: [
                  '1'
                ]
              }
            }
          },
          {
            content: {
              content_title: '问卷网支持创建哪些项目？',
              content_type: 'select',
              options: [
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '1'
                },
                {
                  option_type: 'other',
                  option_content: {
                    text: '其他',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '2'
                }
              ],
              extend: {
                require: true
              },
              userAnswer: {
                select: '2'
              }
            }
          },
          {
            content: {
              content_title: '问卷网支持创建哪些项目？',
              content_type: 'textarea',
              options: [
                {
                  option_type: 'text',
                  option_content: {
                    text: '市场调研问卷',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '1'
                },
                {
                  option_type: 'other',
                  option_content: {
                    text: '其他',
                    explain: '选项说明',
                    img: 'http://a.png'
                  },
                  option_value: '2'
                }
              ],
              extend: {
                require: true
              },
              userAnswer: {
                arrValue: ['行动']
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.el-main {
  padding: 0 !important;
}

.el-row-center {
  display: flex;
  justify-content: center; /*主轴上居中*/
  align-items: center; /*侧轴上居中*/
}
</style>
