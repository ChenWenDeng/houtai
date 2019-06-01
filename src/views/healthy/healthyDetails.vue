<template>
    <section class="healthyDetails-container">
        <div class="top-container">
            <div class="left-box">
                <i class="iconfont iconziyuan10"></i>
            </div>
            <div class="right-box">
                <p class="name">张山</p>
                <p>手机号：18206182542</p>
                <p>设备信息SN码：123123123112313112312（在线）</p>
            </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="血氧" name="first">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="时间"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="xueyang"
                        label="血氧（SaO2）"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="laiyuan"
                        label="数据来源">
                    </el-table-column>
                    <div class="status-box">
                    <el-table-column
                        prop="stauts"
                        label="状态">
                    </el-table-column>
                    </div>
                    <el-table-column
                        prop="shebie"
                        label="设备型号">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="体温" name="second">体温</el-tab-pane>
            <el-tab-pane label="步数" name="third">步数</el-tab-pane>
            <el-tab-pane label="心率" name="fourth">心率</el-tab-pane>
            <el-tab-pane label="移动轨迹" name="yidong">
                <Map></Map>
            </el-tab-pane>
        </el-tabs>
        <section class="tubiao-box" v-if="show!= 5">
            <p class="tu-title">走势图</p>
            <TuBiao v-if="show!= 5" :can="type"></TuBiao>
        </section>
    </section>
</template>

<script>
// 引入基本模板 
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

import TuBiao from '../../components/tuBiao/tuBiao'
import Map from '../../components/Map/Map'

import {mapGetters, mapActions,mapState} from 'Vuex'
export default {
    components:{
        TuBiao,
        Map
    },
    data() {
      return {
        show:0,
        activeName: 'first',
        tableData: [{
            date: '2019-03-18 16:30:00',
            xueyang: 95,
            laiyuan: '设备上传',
            stauts:'正常',
            shebie:'WIM'
          }, {
            date: '2019-03-18 16:30:00',
            xueyang: 95,
            laiyuan: '设备上传',
            stauts:'正常',
            shebie:'WIM'
          }, {
            date: '2019-03-18 16:30:00',
            xueyang: 95,
            laiyuan: '设备上传',
            stauts:'正常',
            shebie:'WIM'
          }, {
            date: '2019-03-18 16:30:00',
            xueyang: 95,
            laiyuan: '设备上传',
            stauts:'正常',
            shebie:'WIM'
          }],

          type:''
      };
    },
    computed:{
        ...mapGetters("healthyDetails", [
            "typeName",
            "dataList",
        ]),
    },
    mounted(){
        this.type = 'xy'
        this.loadType(this.type);
        this.loadData()
        console.log(this.dataList)
    },
    methods: {
        ...mapActions('healthyDetails',[
            'loadData',
            'loadType'
        ]),
        handleClick(tab,event) {
            // console.log(tab, event);
            // if(tab._uid == 185){
            //     this.show = 5
            // }else{
            //     this.show = 0
            // }
            // console.log(this.show);
            // console.log(event.target.innerHTML);


            if(event.target.innerHTML=='血氧'){
                this.type = 'xy'
                this.loadType(this.type);
                this.loadData()
            }else if(event.target.innerHTML=='体温'){
                this.type = 'tw'
                this.loadType(this.type);
                this.loadData()
            }
            else if(event.target.innerHTML=='步数'){
                this.type = 'bs'
                this.loadType(this.type);
                this.loadData()
            }
            else if(event.target.innerHTML=='心率'){
                this.type = 'xl'
                this.loadType(this.type);
                this.loadData()
            }
            else if(event.target.innerHTML=='定位'){
                this.type = 'loc'
                this.loadType(this.type);
                this.loadData()
            }
        },
    }
}
</script>

<style lang="scss">
.el-main{
    background: #fff!important;;
}
.healthyDetails-container{
    width: 100%;
    .top-container{
        display: flex;
        align-items: center;
        width: 100%;
        // height: 6.25rem;
        background: #f2f2f2;
        padding: 1.6875rem 3.125rem;
        .left-box{
            width: 7.875rem;
            height: 7.875rem;
            margin-right: 0.625rem;
            i{
                font-size: 7.875rem;
                color: #DADADA;
            }
        }
        .right-box{
            P:nth-child(2){
                margin-top: 1.0625rem;
            }
            P:nth-child(3){
                margin-top: 0.9375rem;
            }
            p{
                font-size: 1rem;
            }
            .name{
                font-size: 1rem;
                color:#000;
                font-weight: bold;
            }
        }
    }
    .tu-title{
        margin: 1.4375rem 0rem 0.9375rem 0rem;
        color:#333333;
        font-size: 0.875rem;
        font-weight: bold;
    }
}
</style>

<style lang="scss">
.cell{
    text-align: center;
}
.has-gutter{
    .cell{
        color:#333333;
    }
}
.el-table__body{
    .el-table_2_column_11  {
        color:#00CF18!important;
    }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
    width: 100%;
    height: 16.375rem;
}
#myChart{
    width: 100%;
    height: 16.375rem;
    // padding-top: 0.625rem;
}
canvas{
    width: 100%;
    height: 16.375rem;
}
</style>

