<template>
  <el-row>
    <el-col>
      <draggable class="dragArea list-group" v-model="questionTypeList" @end="endFn" ghostClass="ghost"
                 :clone="this.common.deepCopy"
                 :group="{ name: 'question', pull: 'clone', put: false  }" :sort="false" @change="log" itemKey="index">
        <template #item="{ element }">
          <div class="list-group-item">
            <el-button @click="addContent(element)">
              {{ element.questionTypeName }}
            </el-button>
          </div>
        </template>
      </draggable>
    </el-col>
  </el-row>

</template>

<script>
import draggable from "vuedraggable";
import {list_question_type} from "@/api/common";

export default {
  name: "QuestionType",
  components: {
    draggable
  },
  mounted() {
    list_question_type().then((res) => {
      console.log(res.list)
      this.questionTypeList = res.list
    })
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
      questionTypeList: {}
    }
  }
}
</script>

<style scoped>

</style>
