<template>
  <div>
    <h2>用户添加信息</h2>
    <form action>
      用户名:
      <input type="text" v-model="user.name" />
      <br />年龄:
      <input type="text" v-model="user.age" name="age" />
      <br />生日:
      <input type="text" v-model="user.bir" name="bir" />
      <br />
      <input type="button" @click="saveUserInfo" value="添加用户信息" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'UserAdd',
  components: {},
  directives: {},
  data () {
    return {
      user: {},
    }
  },
  mounted () {

  },
  methods: {
    saveUserInfo () {
      console.log(this.user)
      //发送axios请求
      this.$http.post("http://rap2api.taobao.org/app/mock/275445/user/add", this.user)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            //切换路由
            this.$router.push("/user")
          } else {
            alert("添加失败")
          }
        })
    }
  },
  created () {
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val)
      },
      deep: true,
    }
  },
};
</script>