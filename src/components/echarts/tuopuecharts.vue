<template>
    <div>
        <div id="main" style="width: 1280px;height:800px;"></div>
    </div>
</template>
<script>
import webkitDep from './webkitDep4.json'
export default {
    data(){
        return {

        }
    },
    mounted () {
        let myChart = this.$echarts.init(document.getElementById('main'));
        myChart.showLoading();
            myChart.hideLoading();

            let option = {
                legend: {
                    data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
                },
                series: [{
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    label: {
                        normal: {
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    draggable: true,
                    data: webkitDep.nodes.map(function(node, idx) {
                        node.id = idx;
                        return node;
                    }),
                    categories: webkitDep.categories,
                    force: {
                        repulsion: 20, //斥力50
                        edgeLength: 50, //两个节点之间的距离30
                        gravity: 0.1 //引力0.1，数值越大引力越大越靠近中心
                    },
                    edges: webkitDep.links,
                    focusNodeAdjacency: true, //点亮显示关系节点
                    symbolSize: 12, //节点大小
                    animationThreshold: 100, //单个系列显示的图形数量大于这个阈值时会关闭动画
                    animationDuration: 1000, //初始动画的时长
                    animationDurationUpdate: 1, //数据更新动画时长
                    animationEasing: function(k) {
                        var s = 1.70158;
                        return k * k * ((s + 1) * k - s);
                    },
                    animationDelay: function(idx) {
                        // 越往后的数据延迟越大
                        return idx * 100;
                    }
                }]
            };
            myChart.setOption(option);
    }
}
</script>
