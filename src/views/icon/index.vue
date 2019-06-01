<template>
  <div class="deviceList">
    <h3>设备列表</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="设备类型ID">
        <el-input v-model="formInline.user" style="width: 120px"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="formInline.user" style="width: 120px"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名">
        <el-input v-model="formInline.user" style="width: 120px"></el-input>
      </el-form-item>
      <el-form-item label="发送方式">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 120px">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备状态">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 120px">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="在线状态">
        <el-select v-model="formInline.region" placeholder="全部" style="width: 120px">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="margin-bottom:22px">
      <el-button icon="iconfont iconmimazhongzhi">重置</el-button>
      <el-button icon="iconfont icontianjia">批量设置</el-button>
      <el-button icon="iconfont icondaochu1">导出</el-button>
      <el-button @click="centerDialogVisible  = true">设备开通</el-button>
    </div>
    <el-dialog title="设备开通" :visible.sync="centerDialogVisible" center>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="120px">
        <el-form-item label="使用机构">
          <el-select v-model="formInline.region" style="width: 160px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="负责人联系电话">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="设备大类" :required="true">
          <el-select v-model="formInline.region" placeholder="健康设备" style="width: 160px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备类型" :required="true">
          <el-select v-model="formInline.region" placeholder="智能手表" style="width: 160px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备型号" :required="true">
          <el-select v-model="formInline.region" style="width: 160px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备标识ID" :required="true">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="SIM卡号" :required="true">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="设备序列号">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="发送方式" style="width:280px" :required="true">
          <el-radio v-model="radio" label="1">购买</el-radio>
          <el-radio v-model="radio" label="2">免费</el-radio>
        </el-form-item>
        <el-form-item label="服务费用（元）">
          <el-input v-model="formInline.user" style="width: 160px"></el-input>
        </el-form-item>
        <el-form-item label="支付方式" :required="true">
          <el-select v-model="formInline.region" placeholder="现金" style="width: 160px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">保存</el-button>
        <el-button @click="centerDialogVisible = false">返回</el-button>
      </span>
    </el-dialog>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="index" width="30"></el-table-column>
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="install" label="设置标志ID"></el-table-column>
      <el-table-column prop="typeDevice" label="设备类型"></el-table-column>
      <el-table-column prop="Properties" label="设备属性" show-overflow-tooltip></el-table-column>
      <el-table-column prop="number" label="SIM卡号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="name" label="用户姓名" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="联系方式" show-overflow-tooltip></el-table-column>
      <el-table-column prop="issuance" label="发放方式" show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="开通时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state" label="在线状态" show-overflow-tooltip></el-table-column>
      <el-table-column prop="deviceStatus" label="设备状态" show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">设置设备</el-button>
          <el-button type="text" style="color:#EF0303">停用</el-button>
          <el-button type="text" style="color:#333">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
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
export default {
  name: "index",
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
          index: "2016-05-03",
          selection: "王小虎",
          install: "上海市普陀区金沙江路 1518 弄",
          typeDevice: "王小虎",
          Properties: "2016-05-03",
          number: "王小虎",
          name: "2016-05-03",
          phone: "王小虎",
          issuance: "2016-05-03",
          time: "王小虎",
          state: "2016-05-03",
          deviceStatus: "王小虎"
        }
      ],
      formInline: {
        user: "",
        region: ""
      },
      radio: "1",
      centerDialogVisible: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss">
.deviceList {
  h3 {
    background: #eef1f6;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin-bottom: 22px;
  }
  .el-table {
    margin-bottom: 22px;
  }
  /deep/ .el-table th.is-leaf {
    background: #eef1f6;
    font-weight: bold;
    color: #333333;
    text-align: center;
  }
  /deep/ .el-table__row td {
    text-align: center;
  }
   /deep/ .el-table__row td:nth-child(1){
     background: #EEF1F6;
   }
  /deep/ .iconmimazhongzhi:before {
    color: #e6050a;
    margin-right: 4px;
  }
  /deep/ .icontianjia:before {
    color: #17891d;
    margin-right: 4px;
  }
  /deep/.icondaochu1:before {
    color: #0163fc;
    margin-right: 4px;
  }
}
</style>
