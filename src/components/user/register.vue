<template>
<div>
    <shop-header></shop-header>
    <section class="user-warp">
        <div class="box">
            <h2 class="user-title">注册</h2>
            <div class="register-main">
                <el-form ref="form" :rules="rules" :model="form">
                    <el-form-item prop="name">
                        <el-input v-model="form.name" placeholder="请输入您的手机／邮箱"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" placeholder="设置密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="respass">
                        <el-input type="password" v-model="form.respass" placeholder="确认密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                       <el-checkbox v-model="form.checked">阅读并同意《用户服务协议》</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="btn btn-primary user-btn" @click="onSubmit('form')">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import ShopHeader from 'components/shop-header/shop-header.vue'
export default {
  components: {
    ShopHeader
  },
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        password: '',
        respass: '',
        checked: true
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 13, message: '长度在 6 到 13 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
        ],
        respass: [
          { required: true, message: '请输入重复密码', trigger: 'blur' },
          { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
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
    }
    .register-main{
        margin: 40px auto 0;
    }
    .user-btn{
        width: 100%;
        @include btn;
        @include btn-primary;
    }
}
</style>
