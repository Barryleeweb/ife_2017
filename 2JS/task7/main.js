//1.声明需要用的全局变量
var show = document.querySelector(".show");
var rankarr = [];      // 遍历出来的节点
var previous;          // 遍历时的前一个节点
var boole = false;     // 正在遍历时，为true

//2.初始化
function init(){
  rankarr = [];
  if (previous) {
    previous.style.background = "#fff";
  }
}

//3.显示遍历效果
function showerg(){
  for (var i = 0; i < rankarr.length; i++) {
    setTimeout(function(i){   //　也可以设置为var timer = setInterval(function() {},500),主要这里的setTimeout使用
      return function(){
        if(i == rankarr.length-1){
          boole = false;
        }
        if(previous){
          previous.style.background = "#fff";
        }
        rankarr[i].style.background = "red";
        previous = rankarr[i];
      }
    }(i),i*500)
  }
}
  // //setInterval实现方法
  // var showRet = setInterval(function() {
  //   i++;
  //   if (i >= orderQueue.length) {
  //     clearInterval(showRet);
  //     orderQueue[orderQueue.length - 1].style.backgroundColor = '#fff';
  //     inAnimation = false;
  //     return;
  //   }
  //   orderQueue[i - 1].style.backgroundColor = '#fff';
  //   orderQueue[i].style.backgroundColor = 'blue';
  // }, 500);

//4.前序遍历
function befoerg(node){
  if (node) {
    rankarr.push(node);
    befoerg(node.firstElementChild);
    befoerg(node.lastElementChild)
  }
}
//5.中序遍历
function centerg(node){
  if (node) {
    centerg(node.firstElementChild);
    rankarr.push(node);
    centerg(node.lastElementChild)
  }
}
//6.后序遍历
function behierg(node){
  if (node) {
    behierg(node.firstElementChild);
    behierg(node.lastElementChild)
    rankarr.push(node);
  }
}
//7.按钮绑定
function btnBefo(){
  var btnbefo = document.querySelector("#btn-before");
  btnbefo.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      init();
      befoerg(show);
      showerg();
    } else {
      alert("正在遍历中");	
    }
  }
}
function btnCent(){
  var btncent = document.getElementById("btn-center");
  btncent.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      init();
      centerg(show);
      showerg();
    } else {
      alert("正在遍历中");	
    }
  }
}
function btnBehi(){
  var btnbehi = document.getElementById("btn-behind");
  btnbehi.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      init();
      behierg(show);
      showerg();
    } else {
      alert("正在遍历中");	
    }
  }
}
//8.页面加载执行
window.onload = function(){
  btnBefo()
  btnCent();
  btnBehi();
}