<template>
  <div>
    <form action>
      用户名:
      <input type="text" v-model="user.name" />
      <br />年龄:
      <input type="text" v-model="user.age" name="age" />
      <br />生日:
      <input type="text" v-model="user.bir" name="bir" />
      <br />
      <input type="button" @click="editUserInfo" value="修改用户信息" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'UserEdit',
  components: {},
  directives: {},
  data () {
    return {
      user: {
        id: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    editUserInfo () {
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
    },
    findOne () {
      this.$http.get("http://rap2api.taobao.org/app/mock/275445/user.findOne?id" + this.user.id).then((res) => {
        console.log(res)
        this.user = res.data.result
      })
    }
  },
  created () {
    console.log("修改组件中获取的id:" + this.$route.query.id)
    this.user.id = this.$route.query.id
    this.findOne()
  }
};
</script>