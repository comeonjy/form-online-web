<template>
  <el-row>
    <el-col>
      <draggable class="dragArea list-group" v-model="questionTypeList" @end="endFn" ghostClass="ghost"
                 :clone="this.common.deepCopy"
                 :group="{ name: 'question', pull: 'clone', put: false  }" :sort="false" @change="log" itemKey="index">
        <template #item="{ element }">
          <div class="list-group-item">
            <el-button @click="addContent(element)">
              {{ element.name }}
            </el-button>
          </div>
        </template>
      </draggable>
    </el-col>
  </el-row>

</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "QuestionType",
  components: {
    draggable
  },
  props: [],
  emits: ['addContent'],
  methods: {
    log: function (e) {
      console.log(e)
    },
    endFn(e) {
      const oldIndex = e.oldIndex
      const newIndex = e.newIndex
      console.log(oldIndex, newIndex)
    },
    addContent: function (e) {
      this.$emit('addContent', e)
    }
  },
  data: function () {
    return {
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
          name: '多选题',
          content: {
            content_title: '请选择选项',
            content_type: 'checkbox',
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
            userAnswer: {
              other: 'ok',
              arrValue: [
                '1'
              ]
            }
          }
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
