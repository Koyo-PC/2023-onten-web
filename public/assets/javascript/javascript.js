particlesJS.load('particles-js', '/assets/javascript/particles.js', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS("particles-js", {"particles":{"number":{"value":96,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.423830467812875,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
<<<<<<< HEAD


function button_pushed(val) {
  const button_bus = document.getElementById("button_bus");
  const button_train = document.getElementById("button_train");
  const content_bus = document.getElementById("content_bus");
  const content_train = document.getElementById("content_train");
  if(val == 'bus') {
    button_bus.classList.add('clicked')
    button_train.classList.remove('clicked')
    content_bus.style.display = 'block'; // 表示させる
    content_train.style.display = 'none'; // 表示を消す (display:none)
  } else {
    button_bus.classList.remove('clicked')
    button_train.classList.add('clicked')
    content_bus.style.display = 'none';
    content_train.style.display = 'block';
  }
}
// 最初はバスを表示させておく
button_pushed('content_train')
// リアルタイム日付
'use strict';

function countdown() {
    const targetDate = new Date( 2023, 8, 23, 0, 0, 0);
    const endgetDate = new Date( 2023, 8, 23, 16, 0, 0);
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    const span = endgetDate.getTime() - now.getTime();
 
    const calsdays = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
    const calshours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    const calsminutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    const calsseconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

  if(distance >= 0){
    document.getElementById("countdown").innerText=calsdays + "日" +calshours + "時間" + calsminutes + "分" + calsseconds + "秒";
  }
  else if(span >= 0){
    document.getElementById("countdown").innerText="音展開催当日！！";
  }
  else{
    document.getElementById("countdown").innerText="音展ありがとうございました"
  }
}

setInterval(countdown, 500);
// ここまで
