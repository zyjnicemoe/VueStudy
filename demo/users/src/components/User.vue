<template>
  <div>
    <h1>用户模块</h1>
    <!--            用户信息展示-->
    <table border="1">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>生日</th>
        <th>操作</th>
      </tr>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id}}</td>
          <td>{{ user.name}}</td>
          <td>{{ user.age}}</td>
          <td>{{ user.bir}}</td>
          <td>
            <button @click="delRow(user.id)">删除</button>&nbsp;&nbsp;
            <router-link :to="{path:'/user/edit',query:{id:user.id}}" tag="button">修改</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/user/add" tag="button">添加用户</router-link>
    <router-view />
    <!-- 页脚 -->
  </div>
</template>

<script>
export default {
  name: 'User',
  components: {},
  directives: {},
  data () {
    return {
      users: [],
    }
  },
  mounted () {

  },
  methods: {
    //查询所有
    findAll () {
      this.$http.get("http://rap2api.taobao.org/app/mock/275445/user/findall")
        .then((res) => {
          console.log(res.data)
          this.users = res.data.result
        })
    },
    //删除
    delRow (id) {
      this.$http.get("http://rap2api.taobao.org/app/mock/275445/user/del?id=" + id)
        .then((res) => {
          console.log(res.data)
          if (res.data.success) {
            alert("删除成功")
            this.findAll()
          }
        })
    },

  },
  created () {
    this.findAll()
  },
  //监听
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val)
        if (val.path == '/user') {
          this.findAll()
        }
      },
      //深度观察监听
      deep: true,
    }
  },
};
</script>