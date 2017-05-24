import echarts from 'echarts'

var chart = document.getElementById('charts2');
var myChart = echarts.init(chart);
var num = 50;
var labelTop = {
    normal : {
        color:'rgba(0,73,160,0.7)',
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom',
                fontSize:'16',
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        formatter : function (params){
            return (params.percent).toFixed(1) + '%'
        },
        textStyle: {
//                    baseline : 'top',
            color:'#fff',
            fontSize:'25',
            fontFamily:'microsoft yahei'
        }
    },
}
var radius = ['35%', '38%'];
 var option = {
    series : [
        {
            type : 'pie',
            radius : radius,
            center:['25%','30%'],
            label : labelFromatter,
            data : [
                {name:'other', value:num, itemStyle : {
                    normal : {
                        color: '#F7AC47',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                }},
                {name:'M3模块', value:100-(num),itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            radius : radius,
            center:['75%','30%'],
            label : labelFromatter,
            data : [
                {name:'other', value:num, itemStyle : {
                    normal : {
                        color: '#0092FE',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                }},
                {name:'M4模块', value:100-(num),itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            radius : radius,
            center:['25%','75%'],
            label : labelFromatter,
            data : [
                {name:'other', value:num, itemStyle : {
                    normal : {
                        color: '#EC5A6D',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                }},
                {name:'M1模块', value:100-(num),itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            radius : radius,
            center:['75%','75%'],
            label : labelFromatter,
            data : [
                {name:'other', value:num, itemStyle : {
                    normal : {
                        color: '#00FFC7',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                }},
                {name:'M2模块', value:100-(num),itemStyle : labelTop}
            ]
        }
    ]
};
myChart.setOption(option);

setInterval(function () {
    var getRandom1 = RandomNumBoth(30,31);
    option.series[0].data[0].value = getRandom1;
    option.series[0].data[1].value = 100-getRandom1;
    var getRandom2 = RandomNumBoth(22,24);
    option.series[1].data[0].value = getRandom2;
    option.series[1].data[1].value = 100-getRandom2;
    var getRandom3 = RandomNumBoth(74,80);
    option.series[2].data[0].value = getRandom3;
    option.series[2].data[1].value = 100-getRandom3;
    var getRandom4 = RandomNumBoth(10,12);
    option.series[3].data[0].value = getRandom4;
    option.series[3].data[1].value = 100-getRandom4;
    myChart.setOption(option, true);

},2000);

//提取随机数
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random().toFixed(2)-0;
    var num = Min + Rand * Range; //四舍五入
    return num;
}