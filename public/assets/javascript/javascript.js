// particlesJS.load('particles-js', '/assets/javascript/particles.js', function() {
//   console.log('callback - particles.js config loaded');
// });
// particlesJS("particles-js", {"particles":{"number":{"value":96,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.423830467812875,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
          $('.none').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
          $('.none').removeClass('active');
      }
  });
});

// リアルタイム日付
'use strict';

function countdown(){
    const targetDate = new Date( 2023, 8, 23, 9, 0, 0);
    const endgetDate = new Date( 2023, 8, 23, 16, 0, 0);
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    const span = endgetDate.getTime() - now.getTime();
 
    const calsdays = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
    const calshours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    const calsminutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    const calsseconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );
    var sec;
    var min;
    var hour;
    if(calsseconds<10)sec='0'+calsseconds;
    else sec=calsseconds;
    if(calsminutes<10)min='0'+calsminutes;
    else min=calsminutes;
    if(calsdays*24+calshours<10)hour='0'+calshours;
    else hour=calsdays*24+calshours;
  if(distance >= 0){
    document.getElementById("countdown").innerText=hour+":"+min+ ":" + sec ;
  }
  else if(span >= 0){
    document.getElementById("countdown").innerText="音展当日！！";
  }
  else{
    document.getElementById("countdown").innerText="音展終了！！";
  }
}

setInterval(countdown, 500);

function countdown1() {
  const target1Date = new Date( 2023, 8, 23, 9, 0, 0);
  const target2Date = new Date( 2023, 8, 23, 9, 30, 0);
  const target3Date = new Date( 2023, 8, 23, 10, 0, 0);
  const target4Date = new Date( 2023, 8, 23, 10, 30, 0);
  const target5Date = new Date( 2023, 8, 23, 12, 30, 0);
  const target6Date = new Date( 2023, 8, 23, 13, 0, 0);
  const target7Date = new Date( 2023, 8, 23, 13, 30, 0);
  const target8Date = new Date( 2023, 8, 23, 14, 0, 0);
  const now = new Date();
  const distance1 = target1Date.getTime() - now.getTime();
  const distance2 = target2Date.getTime() - now.getTime();
  const distance3 = target3Date.getTime() - now.getTime();
  const distance4 = target4Date.getTime() - now.getTime();
  const distance5 = target4Date.getTime() - now.getTime();
  const distance6 = target4Date.getTime() - now.getTime();
  const distance7 = target4Date.getTime() - now.getTime();
  const distance8 = target4Date.getTime() - now.getTime();

  const calsdays = Math.floor( distance1 / ( 1000 * 60 * 60 * 24 ) );
  const calshours = Math.floor( ( distance1 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const calsminutes = Math.floor( ( distance1 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const calsseconds = Math.floor( ( distance1 % ( 1000 * 60 ) ) / 1000 );

  const callsdays = Math.floor( distance2 / ( 1000 * 60 * 60 * 24 ) );
  const callshours = Math.floor( ( distance2 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const callsminutes = Math.floor( ( distance2 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const callsseconds = Math.floor( ( distance2 % ( 1000 * 60 ) ) / 1000 );

  const calllsdays = Math.floor( distance3 / ( 1000 * 60 * 60 * 24 ) );
  const calllshours = Math.floor( ( distance3 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const calllsminutes = Math.floor( ( distance3 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const calllsseconds = Math.floor( ( distance3 % ( 1000 * 60 ) ) / 1000 );

  const callllsdays = Math.floor( distance4 / ( 1000 * 60 * 60 * 24 ) );
  const callllshours = Math.floor( ( distance4 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const callllsminutes = Math.floor( ( distance4 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const callllsseconds = Math.floor( ( distance4 % ( 1000 * 60 ) ) / 1000 );

  const calllllsdays = Math.floor( distance5 / ( 1000 * 60 * 60 * 24 ) );
  const calllllshours = Math.floor( ( distance5 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const calllllsminutes = Math.floor( ( distance5 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const calllllsseconds = Math.floor( ( distance5 % ( 1000 * 60 ) ) / 1000 );

  const callllllsdays = Math.floor( distance6 / ( 1000 * 60 * 60 * 24 ) );
  const callllllshours = Math.floor( ( distance6 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const callllllsminutes = Math.floor( ( distance6 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const callllllsseconds = Math.floor( ( distance6 % ( 1000 * 60 ) ) / 1000 );

  const calllllllsdays = Math.floor( distance7 / ( 1000 * 60 * 60 * 24 ) );
  const calllllllshours = Math.floor( ( distance7 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const calllllllsminutes = Math.floor( ( distance7 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const calllllllsseconds = Math.floor( ( distance7 % ( 1000 * 60 ) ) / 1000 );

  const callllllllsdays = Math.floor( distance8 / ( 1000 * 60 * 60 * 24 ) );
  const callllllllshours = Math.floor( ( distance8 % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
  const callllllllsminutes = Math.floor( ( distance8 % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  const callllllllsseconds = Math.floor( ( distance8 % ( 1000 * 60 ) ) / 1000 );

  var sec1;
  var min1;
  var sec2;
  var min2;
  var sec3;
  var min3;
  var sec4;
  var min4;
  var sec5;
  var min5;
  var sec6;
  var min6;
  var sec7;
  var min7;
  var sec8;
  var min8;

  if(calsseconds<10)sec1='0'+calsseconds;
  else sec1=calsseconds;
  if(calsminutes<10)min1='0'+calsminutes;
  else min1=calsminutes;

  if(callsseconds<10)sec2='0'+callsseconds;
  else sec2=callsseconds;
  if(callsminutes<10)min2='0'+callsminutes;
  else min2=callsminutes;

  if(calllsseconds<10)sec3='0'+calllsseconds;
  else sec3=calllsseconds;
  if(calllsminutes<10)min3='0'+calllsminutes;
  else min3=calllsminutes;

  if(callllsseconds<10)sec4='0'+callllsseconds;
  else sec4=callllsseconds;
  if(callllsminutes<10)min4='0'+callllsminutes;
  else min4=callllsminutes;

  if(calllllsseconds<10)sec5='0'+calllllsseconds;
  else sec5=calllllsseconds;
  if(calllllsminutes<10)min5='0'+calllllsminutes;
  else min5=calllllsminutes;

  if(callllllsseconds<10)sec6='0'+callllllsseconds;
  else sec6=callllllsseconds;
  if(callllllsminutes<10)min6='0'+callllllsminutes;
  else min6=callllllsminutes;

  if(calllllllsseconds<10)sec7='0'+calllllllsseconds;
  else sec7=calllllllsseconds;
  if(calllllllsminutes<10)min7='0'+calllllllsminutes;
  else min7=calllllllsminutes;

  if(callllllllsseconds<10)sec8='0'+callllllllsseconds;
  else sec8=callllllllsseconds;
  if(callllllllsminutes<10)min8='0'+callllllllsminutes;
  else min8=callllllllsminutes;

if(distance1 >= 0){
  document.getElementById("countdown1").innerText="ただいまお知らせすることはありません";
}
else if(distance2 >= 0){
  document.getElementById("countdown1").innerText="プログラミング実演まで"+ min2 + ":" + sec2 ;
}
else if(distance3 >= 0){
  document.getElementById("countdown1").innerText="ただいまお知らせすることはありません";
}
else if(distance4 >= 0){
  document.getElementById("countdown1").innerText="アルゴリズム講義まで"+ min4 + ":" + sec4 ;
}
else if(distance3 >= 0){
  document.getElementById("countdown1").innerText="ただいまお知らせすることはありません";
}
else if(distance4 >= 0){
  document.getElementById("countdown1").innerText="アルゴリズム講義まで"+ min4 + ":" + sec4 ;
}
else if(distance5 >= 0){
  document.getElementById("countdown").innerText="ただいまお知らせすることはありません";
}
else if(distance6 >= 0){
  document.getElementById("countdown1").innerText="アルゴリズム講義まで"+ min6 + ":" + sec6 ;
}
else if(distance7 >= 0){
  document.getElementById("countdown1").innerText="ただいまお知らせすることはありません";
}
else if(distance8 >= 0){
  document.getElementById("countdown1").innerText="プログラミング実演まで"+ min8 + ":" + sec8 ;
}
else{
  document.getElementById("countdown1").innerText="ただいまお知らせすることはありません";
}
}

setInterval(countdown1, 500);
// ここまで
