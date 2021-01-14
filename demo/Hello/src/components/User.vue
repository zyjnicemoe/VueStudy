<template>
  <div>
    <h1>用户模块</h1>

    <!--            用户信息展示-->
    <table border="1">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>班级</th>
        <th>电话</th>
        <th>密码</th>
        <th>操作</th>
      </tr>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id}}</td>
          <td>{{ user.name}}</td>
          <td>{{ user.age}}</td>
          <td>{{ user.clazz}}</td>
          <td>{{ user.tel}}</td>
          <td>{{ user.password}}</td>
          <td>
            <button>删除</button>&nbsp;&nbsp;
            <button>修改</button>&nbsp;&nbsp;
            <button>添加</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './Footer'
export default {
  name: 'User',
  components: {
    Footer,
  },
  directives: {},
  data () {
    return {
      users: [
        { id: 1, name: '张三', age: 23, clazz: '软工1702', tel: '13456789012', password: 123456 },
        { id: 2, name: '李四', age: 23, clazz: '软工1702', tel: '13456789012', password: 123456 }
      ]
    }
  },
  mounted () {

  },
  methods: {

  },
  created () {

  },
};
</script>

<style lang="" scoped>
</style>