<template>
  <div class="addArticle">
    <el-form ref="article" :model="article" label-width="80px">
      <el-form-item label="用户信息">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="头像" width="180"></el-table-column>
        <el-table-column prop="name" label="昵称" width="180"></el-table-column>
        <el-table-column prop="phone" label="手机号码" width="180"></el-table-column>
        <el-table-column prop="state" label="账号状态" width="180"></el-table-column>
        <el-table-column prop="time" label="注册时间" width="180"></el-table-column>
        <el-table-column prop="lastTime" label="最后登录时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
import Markdown from "../../components/markdown/markdown-editor";
import initData from "../../markData.js";
export default {
  name: "addArticle",
  data() {
    return {
      // 总数据
      tableData: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [1, 2, 3, 4],
      // 默认每页显示的条数（可修改）
      PageSize: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "张三",
          phone: "12121212",
          state: "启动",
          time: "2016-05-02",
          lastTime: "343",
          address: "查看"
        },
        {
          date: "2016-05-02",
          name: "张三",
          phone: "12121212",
          state: "启动",
          time: "2016-05-02",
          lastTime: "343",
          address: "查看"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {}
};
</script>

<style scoped  lang="scss">
.subBtn {
  width: 100px;
  margin: 0 auto;
}
.addArticle {
  .el-input {
  width: 200px;
  }
}
.addArticle /deep/ .el-table {
  border: 1px solid #ebeef5;
  text-align: center;
  margin-bottom: 22px;
  .el-table__row td {
    text-align: center;
  }
}
.addArticle /deep/ .el-table thead th.is-leaf {
  background: #eef1f6;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}
</style>
