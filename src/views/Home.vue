<template>
  <el-row>
    <el-col :span="6">
      <h3>Draggable 1</h3>
<!--      <draggable class="dragArea list-group" :list="list1" :group="{ name: 'people', pull: 'clone', put: false }" @change="log" item-key="name">-->
<!--        <template #item="{ element }">-->
<!--          <div class="list-group-item">-->
<!--            {{ element.name }}-->
<!--          </div>-->
<!--        </template>-->
<!--      </draggable>-->
      <QuestionType></QuestionType>
    </el-col>

    <el-col :span="6">
      <h3>Draggable 2</h3>
      <draggable class="dragArea list-group" :list="list2" group="people" @change="log" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </el-col>

    <el-col :span="6">
      <RawDisplayed class="col-3" :value="list1" title="List 1"/>
    </el-col>
    <el-col :span="6">
      <RawDisplayed class="col-3" :value="list2" title="List 2"/>
    </el-col>

  </el-row>
</template>

<script>
import draggable from "vuedraggable";
import RawDisplayed from "@/components/tool/RawDisplayed";
import QuestionType from "@/components/edit/QuestionType";

export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable,
    RawDisplayed,
    QuestionType
  },
  data() {
    return {
      list1: [
        {name: "John", id: 1},
        {name: "Joao", id: 2},
        {name: "Jean", id: 3},
        {name: "Gerard", id: 4}
      ],
      list2: [
        {name: "Juan", id: 5},
        {name: "Edgard", id: 6},
        {name: "Johnson", id: 7}
      ]
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style scoped></style>
