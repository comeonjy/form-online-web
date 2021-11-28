<template>
  <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>
  <el-row class="el-row-center">
    <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="9"></el-col>
    <el-col :xs="24" :sm="10" :md="8" :lg="6" :xl="6" style="max-width: 400px">
      <div>
        <img style="width: 50%;" src="/images/logo.jpg" alt="">
      </div>
      <div class="login">
        <div class="margin-top-20 margin-bottom-20">
          <span :class="{selected:account_type==='mobile'}" @click="account_type='mobile';login_param.account='';login_param.code=''">手机登录</span>
          <el-divider direction="vertical"></el-divider>
          <span :class="{selected:account_type==='email'}" @click="account_type='email';login_param.account='';login_param.code=''">邮箱登录</span>
          <el-divider direction="vertical"></el-divider>
          <span :class="{selected:account_type==='password'}" @click="account_type='password';login_param.account='';login_param.password=''">密码登录</span>
        </div>
        <div class="margin-top-20 margin-bottom-20">
          <el-input v-if="account_type==='mobile'" v-model="login_param.account" placeholder="请输入手机号"/>
          <el-input v-else-if="account_type==='email'" v-model="login_param.account" placeholder="请输入邮箱"/>
          <el-input v-else-if="account_type==='password'" v-model="login_param.account" placeholder="请输入手机/邮箱"/>
        </div>
        <template v-if="account_type==='password'">
          <el-input v-model="login_param.password" placeholder="请输入密码" show-password/>
        </template>
        <template v-else>
          <el-input v-model="login_param.code" placeholder="请输入验证码">
            <template #append>
              <span @click="sendCode">{{ code_msg }}</span>
            </template>
          </el-input>
        </template>
        <el-button type="primary" class="margin-top-30 margin-bottom-10" @click="login">登录</el-button>
        <div class="margin-top-30 margin-bottom-20">
          <img style="width: 11%;margin: 0 10px 0 0 " src="/images/xcx_logo.jpg" alt="">
          <img style="width: 13%" src="/images/github_logo.png" alt="">
        </div>
      </div>
    </el-col>
    <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="9"></el-col>
  </el-row>

</template>

<script>
import Vcode from "vue3-puzzle-vcode";
import {ElMessage} from "element-plus";
import {login, send_verification_code} from "@/api/common";

export default {
  name: 'Login',
  components: {
    Vcode
  },
  data: function () {
    return {
      login_param: {
        account: '',
        code: '',
        password: '',
      },
      account_type: 'mobile',

      code_msg: '获取验证码',
      isShow: false,
      time_counter: 0,
      timer: null,
    }
  },
  methods: {
    login: function () {
      if (!this.checkParam()) {
        return
      }
      login({
        account: this.login_param.account,
        password: this.login_param.password,
        code: this.login_param.code,
        type: this.account_type,
      }).then((res) => {
        if (res !== undefined) {
          console.log(res.data.token)
        }
      })

    },
    onClose: function () {
      this.isShow = false;
    },
    checkParam: function () {
      if (this.account_type === 'mobile') {
        if (this.common.isMobile(this.login_param.account) === false) {
          ElMessage({
            type: 'error',
            message: '请输入正确的手机号',
          })
          return false
        }
      }
      if (this.account_type === 'email') {
        if (this.common.isEmail(this.login_param.account) === false) {
          ElMessage({
            type: 'error',
            message: '请输入正确的邮箱',
          })
          return false
        }
      }
      if (this.account_type === 'password') {
        if (this.common.isMobile(this.login_param.account) === false && this.common.isEmail(this.login_param.account) === false) {
          ElMessage({
            type: 'error',
            message: '请输入正确的账户',
          })
          return false
        }
        if (this.login_param.password.length < 6) {
          ElMessage({
            type: 'error',
            message: '请输入正确的密码',
          })
          return false
        }
      }
      return true
    },
    sendCode: function () {
      if (this.time_counter > 0) {
        return
      }
      if (!this.checkParam()) {
        return
      }
      if (this.code_msg === '重新发送') {
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
          this.code_msg = '重新发送'
          this.time_counter = 0
        }
      }, 1000)

      send_verification_code({
        type: this.account_type,
        account: this.login_param.account,
      })

      ElMessage({
        type: 'success',
        message: '已发送'
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

.selected {
  color: #409eff;
}
</style>
