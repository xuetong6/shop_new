<template>
    <section class="register-warp">
        <div class="w">
            <h2 class="user-title">注册</h2>
            <div class="register-main">
                <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="用户名"  prop="name">
                        <el-input v-model="form.name" @blur="validate"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="重复密码" prop="respass">
                        <el-input v-model="form.respass"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="user-btn" @click="onSubmit(form)">登陆</el-button>
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
        password: '',
        respass: ''
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
          { required: true, message: '请输入重复密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
       console.log('aa')
    },
    validate (type) {
      if (this.form.name === '') {
        return this.$notify.error({
          title: '错误',
          message: '请输入姓名'
        })
      }
      if (this.form.password === '') {
        return this.$notify.error({
          title: '错误',
          message: '请输入密码'
        })
      }
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
