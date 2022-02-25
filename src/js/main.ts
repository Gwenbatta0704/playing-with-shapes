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
function home(){

const fondHome = document.getElementById('home');
let ctxHome = fondHome.getContext('2d');
ctxHome.fillStyle='white';
ctxHome.fillRect(0,0,fondHome.width,fondHome.height);
// Toit
ctxHome.moveTo((fondHome.width/2)-40, (fondHome.height/2)+10);
ctxHome.lineTo(fondHome.width/2,(fondHome.height/2)-40;
ctxHome.lineTo((fondHome.width/2)+40, (fondHome.height/2)+10);
// Murs
ctxHome.moveTo((fondHome.width/2)-20, (fondHome.height/2)+10);
ctxHome.lineTo((fondHome.width/2)-20, (fondHome.height/2)+50);
ctxHome.lineTo((fondHome.width/2)+20, (fondHome.height/2)+50);
ctxHome.lineTo((fondHome.width/2)+20, (fondHome.height/2)+10);
ctxHome.rect((fondHome.width/2)-5, (fondHome.height/2)+30,10,20);
ctxHome.strokeStyle = "red";
ctxHome.lineWidth = 3;
ctxHome.stroke();
// Palmier
ctxHome.beginPath();
ctxHome.strokeStyle = "LimeGreen";
ctxHome.moveTo((fondHome.width/2)-60,(fondHome.height/2)+60);
ctxHome.arcTo((fondHome.width/2)-60,(fondHome.height/2)-40,(fondHome.width/2)-20,160,20);
ctxHome.stroke();
// Soleil
ctxHome.fillStyle = "yellow";
ctxHome.strokeStyle = "orange";
ctxHome.beginPath();
ctxHome.arc((fondHome.width/2)+60,(fondHome.height/2)-40,30,0,Math.PI*2,true);
ctxHome.fill();
ctxHome.stroke();
// Vaguelettes
ctxHome.strokeStyle = "turquoise";
ctxHome.beginPath();
ctxHome.moveTo((fondHome.width/2)+60, (fondHome.height/2)+80);
ctxHome.bezierCurveTo((fondHome.width/2)+120,(fondHome.height/2)+60,(fondHome.width/2)+120,(fondHome.height/2)+110,(fondHome.width/2)+200,(fondHome.height/2)+80);
ctxHome.moveTo((fondHome.width/2)+60, (fondHome.height/2)+100);
ctxHome.bezierCurveTo((fondHome.width/2)+120,(fondHome.height/2)+80,(fondHome.width/2)+120,(fondHome.height/2)+130,(fondHome.width/2)+200,(fondHome.height/2)+100);
ctxHome.stroke();
// Sourire
ctxHome.beginPath();
ctxHome.strokeStyle = "orange";
ctxHome.moveTo((fondHome.width/2)+40,(fondHome.height/2)-30);
ctxHome.quadraticCurveTo((fondHome.width/2)+60,(fondHome.height/2)-10,(fondHome.width/2)+80,(fondHome.height/2)-30);
ctxHome.stroke();
}
home();

//Mastercard
function masterCard(){
    const fondMaster = document.getElementById('master-card');
    let ctxMc = fondMaster.getContext('2d');
    ctxMc.fillStyle='black';
    ctxMc.fillRect(0,0,fondMaster.width,fondMaster.height);
//Double cercle
    ctxMc.fillStyle = "red";
    ctxMc.beginPath();
    ctxMc.arc((fondMaster.width*1.5/4),(fondMaster.height/2)-35,(fondMaster.height/3),0,Math.PI*2);
    ctxMc.fill();
    ctxMc.fillStyle = "yellow";
    ctxMc.beginPath();
    ctxMc.arc((fondMaster.width*2.5/4),(fondMaster.height/2)-35,(fondMaster.height/3),0,Math.PI*2);
    ctxMc.fill();
    //Texte
    ctxMc.font = "50px Century";
    ctxMc.fillStyle = "white";
    ctxMc.textAlign = "center";
    ctxMc.fillText("mastercard", fondMaster.width/2, fondMaster.height*7/8);
    //Ellipse
    ctxMc.fillStyle = "orange";
    ctxMc.scale(0.5,1);
    ctxMc.beginPath();
    ctxMc.arc((fondMaster.width),(fondMaster.height/2)-35,(fondMaster.height/4),0,Math.PI*2);
    ctxMc.fill();

}
masterCard();

//Triangle
function triangles(){
    const fondTriangle = document.getElementById('triangle');
    let ctxTriangle = fondTriangle.getContext('2d');
    ctxTriangle.fillStyle='grey';
    ctxTriangle.fillRect(0,0,fondTriangle.width,fondTriangle.height);
//Triangle
    ctxTriangle.fillStyle = "black";
    ctxTriangle.moveTo(fondTriangle.width/2,fondTriangle.height/5);
    ctxTriangle.lineTo((fondTriangle.width/2)-100,fondTriangle.height/1.2);
    ctxTriangle.lineTo((fondTriangle.width/2)+100,fondTriangle.height/1.2);
    ctxTriangle.fill();
    ctxTriangle.stroke();
    ctxTriangle.fillStyle = "white";
    ctxTriangle.beginPath();
    ctxTriangle.arc((fondTriangle.width/2),(fondTriangle.height/1.7),(fondTriangle.height/5),0,Math.PI*2);
    ctxTriangle.fill();
    ctxTriangle.stroke();
    ctxTriangle.fillStyle = "black";
    ctxTriangle.beginPath();
    ctxTriangle.arc((fondTriangle.width/2)+5,(fondTriangle.height/1.7)-5,(fondTriangle.height/6),0,Math.PI*2);
    ctxTriangle.fill();
    ctxTriangle.stroke();

}
triangles();

function polygonRandom(){
    const fondPolygon = document.getElementById('shapes');
    let ctxPolygon = fondPolygon.getContext('2d');
    ctxPolygon.fillStyle='#101d6b';
    ctxPolygon.fillRect(0,0,fondPolygon.width,fondPolygon.height);
}

polygonRandom();