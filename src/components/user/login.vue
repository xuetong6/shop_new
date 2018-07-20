<template>
    <section class="register-warp">
        <div class="w">
            <h2 class="user-title">登录</h2>
            <div class="register-main">
                <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="用户名"  prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="user-btn" @click="onSubmit('form')">登录</el-button>
                    </el-form-item>
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
.register-warp{
    position: relative;
    width: 600px;
    margin: 50px auto;
    padding: 40px;
    border: 2px solid $line-hui1;
    .user-title {
        text-align: center;
        font-size: 1.2em;
    }
    .register-main{
        width: 400px;
        margin: 40px auto;
    }
    .user-btn{
        @include user-btn;
    }
}
</style>
