<template>
  <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>
  <el-row class="el-row-center">
    <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="9"></el-col>
    <el-col :xs="24" :sm="10" :md="8" :lg="6" :xl="6" style="max-width: 400px">
      <div>
        <img style="width: 50%;" src="/images/logo.jpg" alt="">
      </div>
      <div class="login">
        <p class="left">{{ login_msg }}</p>
        <el-input  v-model="mobile" placeholder="请输入手机号" class="margin-top-20 margin-bottom-20"/>
        <el-input  v-model="code" placeholder="请输入验证码">
          <template #append>
            <span @click="sendCode">{{ code_msg }}</span>
          </template>
        </el-input>
        <!--        <el-input v-model="input" placeholder="请输入密码" show-password/>-->
        <el-button type="primary" class="margin-top-30">登录</el-button>
      </div>
    </el-col>
    <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="9"></el-col>
  </el-row>

</template>

<script>
import Vcode from "vue3-puzzle-vcode";
import {ElMessage} from "element-plus";

export default {
  name: 'Login',
  components: {
    Vcode
  },
  data: function () {
    return {
      isShow: false,
      login_msg: '手机登录',
      code_msg: '获取验证码',
      time_counter: 0,
      timer: null,
      mobile: '',
      code: '',
    }
  },
  methods: {
    onClose: function () {
      this.isShow = false;
    },
    sendCode: function () {
      if (this.time_counter > 0) {
        return
      }
      if (this.common.isPhone(this.mobile) === false) {
        ElMessage({
          type: 'error',
          message: '请输入正确的手机号',
        })
        return
      }
      if (this.code_msg === '重发短信') {
        this.doGetCode()
        return
      }
      this.isShow = true;
    },
    onSuccess: function () {
      this.onClose();
      this.doGetCode()
    },
    doGetCode: function () {
      this.timer = setInterval(() => {
        this.time_counter++
        const showtime = 10 - this.time_counter
        this.code_msg = showtime + 's'
        if (showtime <= 0) {
          clearInterval(this.timer)
          this.code_msg = '重发短信'
          this.time_counter = 0
        }
      }, 1000)

      console.log('发送短信验证码...')

      ElMessage({
        type: 'success',
        message: '短信已发送'
      })
    }
  }
};
</script>

<style scoped>
.login {
  border: solid 2px #409eff;
  margin: 10px;
  padding: 20px;
  box-shadow: 8px 8px 14px 1px rgb(92 112 128 / 60%);
}
</style>
