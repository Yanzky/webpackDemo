var nvaLine = document.getElementById('nvaLine');
var cxt=nvaLine.getContext("2d");
cxt.fillStyle="#0000ff";
cxt.fillRect(10,10,10,10);
// cxt.rect(10,10,10,10);
//画直线
cxt.strokeStyle = 'blue';  //设置轮廓的颜色
cxt.moveTo(30,30);
cxt.lineTo(100,50);
cxt.lineTo(30,50);
cxt.closePath();  //画封闭图形
cxt.stroke();  //通过线条来绘制图形轮廓

//绘制文本
cxt.font = "16px serif";
cxt.fillText("Hello world", 10, 50);
//画圆
cxt.fillStyle="#FF0000";
cxt.beginPath();    //新建一个路径
cxt.arc(70,100,10,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();  //通过填充路径的内容区域生成实心的图形


//背景填充
// 画背景
cxt.fillStyle = '#FD0';
cxt.fillRect(0,200,75,75);
cxt.fillStyle = '#6C0';
cxt.fillRect(75,200,75,75);
cxt.fillStyle = '#09F';
cxt.fillRect(0,275,75,75);
cxt.fillStyle = '#F30';
cxt.fillRect(75,275,75,75);
cxt.fillStyle = '#FFF';

// 设置透明度值
cxt.globalAlpha = 0.2;

// 画半透明圆
for (var i=0;i<7;i++){
    cxt.beginPath();
    cxt.arc(75,275,10+10*i,0,Math.PI*2,true);
    cxt.fill();
}



var offset = 0;

function draw() {
    cxt.clearRect(200,0, 300, 300);
    cxt.setLineDash([6, 2]);
    cxt.lineDashOffset = -offset;
    cxt.strokeRect(210,0, 100, 100);
}

function march() {
    offset++;
    if (offset > 16) {
        offset = 0;
    }
    draw();
    setTimeout(march, 20);
}

march();



cxt.fillRect(500,0,300,300);
for (var i=0;i<3;i++) {
    for (var j=0;j<3;j++) {
        cxt.save();
        cxt.strokeStyle = "#9CFF00";
        cxt.translate(550+j*100,50+i*100);
        drawSpirograph(cxt,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
        cxt.restore();
    }
}
function drawSpirograph(cxt,R,r,O) {
    var x1 = R - O;
    var y1 = 0;
    var i = 1;
    cxt.beginPath();
    cxt.moveTo(x1, y1);
    do {
        if (i > 20000) break;
        var x2 = (R + r) * Math.cos(i * Math.PI / 72) - (r + O) * Math.cos(((R + r) / r) * (i * Math.PI / 72))
        var y2 = (R + r) * Math.sin(i * Math.PI / 72) - (r + O) * Math.sin(((R + r) / r) * (i * Math.PI / 72))
        cxt.lineTo(x2, y2);
        x1 = x2;
        y1 = y2;
        i++;
    } while (x2 != R - O && y2 != 0);
    cxt.stroke();
}
