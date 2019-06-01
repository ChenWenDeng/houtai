<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconziyuan1 icon"></span>
          <div>
            <h1>用户管理</h1>
            <p>用户列表</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconshebeiguanli1 icon"></span>
          <div>
            <h1>设备管理</h1>
            <p>
              设备开通
              <span>设备列表</span>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconjiankangguanli1 icon"></span>
          <div>
            <h1>健康管理</h1>
            <p>健康列表</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconziyuan2 icon"></span>
          <div>
            <h1 class="h1">安全监护</h1>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconziyuan3 icon"></span>
          <div>
            <h1 class="h1">服务点管理</h1>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="card">
          <span class="iconfont iconsystemSet icon"></span>
          <div>
            <h1 class="h1">系统设置</h1>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "mainIndex",
  mounted() {
    this.selfAdaption();
  },
  methods: {
    // echart自适应
    selfAdaption() {
      let that = this;
      setTimeout(() => {
        window.onresize = function() {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize();
          }
        };
      }, 10);
    }
  }
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

$list: bluee pinkk yelloww grennn purplee lightBluee;
$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
%shadow {
  background: #fff;
  border-color: rgba(0, 0, 0, 0.2);
  .title {
    font-size: 14px;
    padding: 10px;
    i {
      margin-#{$right}: 5px;
    }
  }
}

@mixin flex($direction: row, $content: space-between) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}
.card {
  color: #666;
  @extend %shadow;
  display: flex;
  padding: 38px 32px;
  background: #eef1f6;
  cursor: pointer;
  border-radius: 6px;
  div {
    margin: 2% 0 2% 4%;
    width: 100%;
    h1 {
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      width: 100%;
    }
    p {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
      margin-top: 30px;
      width: 100%;
      span {
        margin-left: 10px;
      }
    }
    .h1 {
      line-height: 74px;
    }
  }
  .el-row {
    overflow: hidden;
  }
  .iconziyuan1:before,
  .iconshebeiguanli1:before,
  .iconjiankangguanli1:before,
  .iconziyuan2:before,
  .iconziyuan3:before,
  .iconsystemSet:before {
    display: block;
    font-size: 82px;
    color: #3a76ef;
  }
}

</style>
