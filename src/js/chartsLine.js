import $ from 'jquery'
import Highcharts from 'highcharts'
$(function () {
    Highcharts.chart('container', {
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            gridLineWidth: 1,
            gridZIndex: 1,
            lineColor: '#AAA',
            lineWidth: 2,
            gridLineDashStyle:'ShortDash'
        },
        yAxis: {
            lineColor: '#AAA',
            lineWidth: 2,
            gridLineWidth: 1,
            gridZIndex: 1,
            gridLineDashStyle:'ShortDash',
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    borderRadius: 5,
                    backgroundColor: 'rgba(252, 255, 197, 0.7)',
                    borderWidth: 1,
                    borderColor: '#AAA',
                    y: -6
                }
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});
