//var test;
// 全てのもぐらに、クリックイベントを登録する
const moguras = document.querySelectorAll(".mogura");
const itaiMogura = "images/モグ1.png";
const normalMogura = "images/モグ2.png";
setInterval(deruMogura, 1000);

// 0:hide, 1:show, 2:press
let gameController = new GameController();

function GameController(){
  this.allMogura = []
  this.stage = [0, 0 ,0, 0 ,0 ,0, 0, 0, 0]
  for (let index = 0; index < moguras.length; index++) {
    this.allMogura.push(new moguraObj(moguras[index]));
  }

  this.gameStart = function(){
     // ステージを生成する
  }

  this.searchActiveMogura = function(){
    // for でループして、statusが1のもぐらのリストを返す
  }
}

function moguraObj(image){

  const itaiMogura = "images/モグ1.png";
  const normalMogura = "images/モグ2.png";

  this.moguraType = 2 // 0:もぐら 1:グラサン 2:ゴブリン

  this.status = 0; // 0:hide, 1:show, 2:press
  this.autoHide = "";

  image.onclick = function () {
    if(this.moguraType == 1){
      image.src = itaiMogura;
    }
    thos.status = 2;
    setTimeout(kakureruMogura, 700, image);
  }

  image.deru = function(){
    image.src = normalMogura;
    // しばらくしたら隠れる
    setTimeout((mogura) => {
      if (this.status != 2) {
        // statusが2の時の処理
      }
    }, 600, mogura);
  }

  image.kakureru = function(){

  }
  iamge.setImage = function(imageUrl){
    iamge.src = imageUrl;
  }

  // もぐらが叩かれる
  function hitMogura() {
    var mogura = event.target;
    mogura.src = itaiMogura;
    mogura.moguraStatus = 2;
    setTimeout(kakureruMogura, 700, mogura);
  }
}