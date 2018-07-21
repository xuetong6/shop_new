<template>
    <section class="user-warp">
        <div class="box">
            <h2 class="user-title">登录</h2>
            <div class="register-main">
                <el-form ref="form" :rules="rules" :model="form">
                    <el-form-item prop="name">
                        <el-input v-model="form.name" placeholder="手机／邮箱／用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" placeholder="登陆密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="user-btn" @click="onSubmit('form')">登录</el-button>
                    </el-form-item>
                    <div class="login-prompt-link">
                       <p>还没账号？
                         <router-link to="/register">去注册</router-link>/<a href="">忘记密码</a></p>
                    </div>
                </el-form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.user-warp{
    background: url('images/token-img.png') no-repeat 0 0/cover;
    height: calc(100vh - 60px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    .box{
      width: 400px;
      text-align: center;
      background: $white;
      border-radius: 5px;
      padding: 30px;
    }
    .user-title {
        text-align: center;
        font-size: 1.2em;
        padding-top: 10px;
    }
    .register-main{
        margin: 40px auto 0;
    }
    .user-btn{
        @include user-btn;
    }
    .login-prompt-link{
      font-size: .85em;
      text-align: right;
    }
    .login-prompt-link a{
      color: $blue;
    }
}
</style>
