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