<template>
  <el-row>
    <el-col style="text-align: left;display: flex">
      <div>
        <span style="margin-left: 20px;font-weight: bold; font-size: 20px;line-height: 37px;">{{ index + 1 }}.</span>
      </div>
      <div class="width80">
        <el-tooltip content="" placement="top-start" effect="light">
          <template #content>
              <span>
              <i class="el-icon-edit-outline"></i>
              </span>
          </template>
          <div class="input-no-border">
            <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 6 }" v-model="value"></el-input>
          </div>
        </el-tooltip>
      </div>
    </el-col>
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

.input-no-border {
  font-size: 25px;
}

.input-no-border >>> .el-textarea__inner {
  border: 0;
  font-size: 18px;
  font-weight: bold;
  overflow-y: hidden;
  resize: none;
}

.input-no-border >>> .el-textarea__inner:hover {
  background-color: rgba(128, 133, 144, .06);
}

.input-no-border > i {
  margin: 0 10px;
}

.input-no-border > i:hover {
  color: red;
}

</style>
