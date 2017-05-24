document.getElementById('app').innerText = "huhuhu.麻烦了，还好解决了"
function fc() {
    console.log('nihao');
    console.log('我是app页面');
}
//图表数据展示
import echarts from 'echarts';

var chart = document.getElementById('charts1');
var myChart = echarts.init(chart);
var detail = {
    textStyle:{
        color:'#fff'
    },
    offsetCenter:[0, '20%'],
    formatter:'{value}%'

};
var axisLine = {
    lineStyle:{
        width: 10,
        color:[[0.25, '#E85E6B'], [0.5, '#F5AD49'],[0.75, '#0092FE'], [1, '#01FFC8']]
    }
};

var pointer = {
    length:'50%',
    width:'5'
};

var title  = {
    offsetCenter:[0, '50%'],
    textStyle:{
        color:'#fff'
    }
};
var option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            type: 'gauge',
            radius:'50%',
            center: ['25%', '35%'],
            detail: detail,
            axisLine:axisLine,
            pointer:pointer,
            axisLabel:{
                show:false
            },
            startAngle:180,
            endAngle:0,
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            title:title,
            data: [{value: 50, name: '交易成功率（实时）'}]
        },
        {
            type: 'gauge',
            radius:'50%',
            center: ['25%', '80%'],
            detail: detail,
            axisLine:axisLine,
            pointer:pointer,
            axisLabel:{
                show:false
            },
            startAngle:180,
            endAngle:0,
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            title:title,
            data: [{value: 60, name: '交易成功率（全天）'}]
        },
        {
            type: 'gauge',
            radius:'50%',
            center: ['75%', '35%'],
            detail: detail,
            axisLine:axisLine,
            pointer:pointer,
            axisLabel:{
                show:false
            },
            startAngle:180,
            endAngle:0,
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            title:title,
            data: [{value: 20, name: '跨行成功率（实时）'}]
        },
        {
            type: 'gauge',
            radius:'50%',
            center: ['75%', '80%'],
            detail: detail,
            axisLine:axisLine,
            pointer:pointer,
            axisLabel:{
                show:false
            },
            startAngle:180,
            endAngle:0,
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            title:title,
            data: [{value: 90, name: '跨行成功率（全天）'}]
        },
    ]
};

myChart.setOption(option, true);

setInterval(function () {
    option.series[0].data[0].value = RandomNumBoth(33,97);
    option.series[1].data[0].value = RandomNumBoth(39,40);
    option.series[2].data[0].value = RandomNumBoth(99,100);
    option.series[3].data[0].value = RandomNumBoth(60,62);
    myChart.setOption(option, true);

},2000);

//提取随机数
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random().toFixed(2)-0;
    var num = Min + Rand * Range;
    return num;
}