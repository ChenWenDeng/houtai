<template>
    <section>
        <div class="map-box">
            <div class="map" id="allmap"></div>
        </div>
    </section>
</template>

<script>
export default {
    mounted(){
        this._map()
    },
    methods:{
        _map(position){
            // 百度地图API功能
                var map = new BMap.Map("allmap");    // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);  // 初始化地图,设置中心点坐标和地图级别
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
                scale: 0.6,//图标缩放大小
                strokeColor:'#fff',//设置矢量图标的线填充颜色
                strokeWeight: '2',//设置线宽
            });
            var icons = new BMap.IconSequence(sy, '10', '30');
            // 创建polyline对象
            var pois = [
                new BMap.Point(116.350658,39.938285),
                new BMap.Point(116.386446,39.939281),
                new BMap.Point(116.389034,39.913828),
                new BMap.Point(116.442501,39.914603)
            ];
            var polyline =new BMap.Polyline(pois, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            icons:[icons],
            strokeWeight:'8',//折线的宽度，以像素为单位
            strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
            strokeColor:"#18a45b" //折线颜色
            });
            
            map.addOverlay(polyline);
        },
    }
}
</script>

<style lang="scss">
.map-box{
    width: 100%;
    height: 16.375rem;
    .map{
    width: 100%;
    height: 16.375rem;
    span{
      display: none;
  }
    }
}
.anchorBL{
  img{
    display: none;
  }
}
</style>

