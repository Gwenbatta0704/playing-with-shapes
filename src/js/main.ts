//Drapeau Suisse
function drawSwissFlag(){
    type rectangleType = {
        width:number,
        height:number,
    }
    const swissFlag = document.getElementById('Swiss-flag');
    let ctxSf = swissFlag.getContext('2d');
    const rectangle : rectangleType ={
        width:250,
        height:50,
    }
    ctxSf.fillStyle= 'red';
    ctxSf.fillRect(0,0,swissFlag.width,swissFlag.height);

    ctxSf.fillStyle= 'white';
    ctxSf.fillRect((swissFlag.width/2)-(rectangle.height/2),(swissFlag.height/2)-(rectangle.width/2), rectangle.height, rectangle.width);
    ctxSf.fillRect((swissFlag.width/2)-(rectangle.width/2),(swissFlag.height/2)-(rectangle.height/2), rectangle.width, rectangle.height;

};
drawSwissFlag();

//Home
const fondHome = document.getElementById('home');
let ctxHome = fondHome.getContext('2d');
ctxHome.fillStyle='white';
ctxHome.fillRect(0,0,fondHome.width,fondHome.height);
// Toit
ctxHome.moveTo(40, 80);
ctxHome.lineTo(80, 40);
ctxHome.lineTo(120, 80);
// Murs
ctxHome.moveTo(60, 80);
ctxHome.lineTo(60, 120);
ctxHome.lineTo(100, 120);
ctxHome.lineTo(100, 80);
ctxHome.rect(75,100,10,20);
ctxHome.strokeStyle = "red";
ctxHome.lineWidth = 3;
ctxHome.stroke();
// Palmier
ctxHome.beginPath();
ctxHome.strokeStyle = "LimeGreen";
ctxHome.moveTo(20,120);
ctxHome.arcTo(20,30,160,120,20);
ctxHome.stroke();
// Soleil
ctxHome.fillStyle = "yellow";
ctxHome.strokeStyle = "orange";
ctxHome.beginPath();
ctxHome.arc(150,40,30,0,Math.PI*2,true);
ctxHome.fill();
ctxHome.stroke();
// Vaguelettes
ctxHome.strokeStyle = "turquoise";
ctxHome.beginPath();
ctxHome.moveTo(20, 150);
ctxHome.bezierCurveTo(80,130,80,180,140,150);
ctxHome.moveTo(20, 170);
ctxHome.bezierCurveTo(80,150,80,200,140,170);
ctxHome.stroke();
// Sourire
ctxHome.beginPath();
ctxHome.strokeStyle = "orange";
ctxHome.moveTo(130, 40);
ctxHome.quadraticCurveTo(150,70,170,40);
ctxHome.stroke();
//Mastercard

const fondMaster = document.getElementById('master-card');
let ctxMc = fondMaster.getContext('2d');
ctxMc.fillStyle='black';
ctxMc.fillRect(0,0,fondMaster.width,fondMaster.height);
//Double cercle
ctxMc.beginPath();
ctxMc.fillStyle = "red";
ctxMc.arc((fondMaster.width*1.5/4),(fondMaster.height/2)-35,(fondMaster.height/3),0,Math.PI*2);
ctxMc.fillStyle = "yellow";
ctxMc.arc((fondMaster.width*2.5/4),(fondMaster.height/2)-35,(fondMaster.height/3),0,Math.PI*2);
ctxMc.closePath();
ctxMc.fill();
ctxMc.stroke();
//Texte
ctxMc.font = "50px Century";
ctxMc.fillStyle = "white";
ctxMc.textAlign = "center";
ctxMc.fillText("mastercard", fondMaster.width/2, fondMaster.height*7/8);

//Triangle

const fondTriangle = document.getElementById('triangle');
let ctxTriangle = fondTriangle.getContext('2d');
ctxTriangle.fillStyle='grey';
ctxTriangle.fillRect(0,0,fondTriangle.width,fondTriangle.height);
//Triangle
ctxTriangle.fillStyle = "black";
ctxTriangle.beginPath();
ctxTriangle.moveTo(fondTriangle.width/2,fondTriangle.height/5);
ctxTriangle.lineTo((fondTriangle.width/2)-100,fondTriangle.height/1.2);
ctxTriangle.lineTo((fondTriangle.width/2)+100,fondTriangle.height/1.2);
ctxMc.fillStyle = "white";
ctxMc.arc((fondTriangle.width/4),(fondTriangle.height/2),(fondTriangle.height/3),0,Math.PI*2);
ctxTriangle.closePath();
ctxTriangle.fill();
ctxTriangle.stroke();
ctxMc.beginPath();
