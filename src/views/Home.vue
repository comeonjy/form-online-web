<template>
  <el-row>
    <el-col>
      <el-card class="margin-top-20 margin-bottom-20" v-for="value in list" :key="value">
        <p @click="$router.push({ name: 'Form', query: { uuid: value.uuid } })">{{ value.uuid }}</p>
        <p>{{ value.formTitle }}</p>
        <p>{{ value.subTitle }}</p>
      </el-card>
    </el-col>

  </el-row>
</template>

<script>
import {form_list} from "@/api/common";

export default {
  name: "Home",
  components: {},
  mounted() {
    form_list().then((res) => {
      console.log(res)
      this.list = res.list
    })
  },
  data() {
    return {
      list: {}
    };
  },
  methods: {
    log: function (evt) {
      console.log(evt);
    }
  }
};
</script>
<style scoped></style>
