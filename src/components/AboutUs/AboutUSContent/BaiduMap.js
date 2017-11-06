import React from 'react'

class BaiduMap extends React.Component {

    componentDidMount () {
        let BMap = window.BMap
        let map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(113.9495, 22.561699), 17); // 初始化地图,设    置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.NavigationControl());
        map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
        /*map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放*/
        let point = new BMap.Point(113.9495, 22.561699);
        map.centerAndZoom(point, 17);
        let marker = new BMap.Marker(point);        // 创建标注
        map.addOverlay(marker);                     // 将标注添加到地图中
        map.addEventListener('click',function () {  //清除导航按钮
            setTimeout(()=>{
                var b=document.querySelectorAll('.BMap_pop input')
                b[5].style.display='none'
                console.log(b[5])
            },100)
        })
    }

    render () {
        return (
            <div>
                <div id='allmap' style={{width:'808px', height:'260px'}} />
            </div>
        )
    }
}
export default BaiduMap;