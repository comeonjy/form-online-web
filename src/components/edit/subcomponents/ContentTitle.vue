<template>
  <el-row type="flex" class="left">
      <span class="serial">{{ index + 1 }}.</span>
    <div class="width80">
      <div class="input-no-border">
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 6 }" v-model="value"></el-input>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: ['contentTitle', 'index'],
  emits: ['update:contentTitle'],
  computed: {
    value: {
      get: function () {
        return this.contentTitle
      },
      set: function (val) {
        console.log(val)
        this.$emit('update:contentTitle', val)
      }
    }
  }
}
</script>

<style scoped>

.serial {
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 37px;
}

.input-no-border {
  font-size: 24px;
}

.input-no-border ::v-deep(.el-textarea__inner) {
  border: 0;
  font-size: 18px;
  font-weight: bold;
  overflow-y: hidden;
  resize: none;
}

.input-no-border ::v-deep(.el-textarea__inner:hover) {
  background-color: rgba(128, 133, 144, .06);
}

.input-no-border > i {
  margin: 0 10px;
}

.input-no-border > i:hover {
  color: red;
}

</style>
