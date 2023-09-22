
// OS識別用
let os;

// DOM構築完了イベントハンドラ登録
window.addEventListener("DOMContentLoaded", init);

const arrow = {
    "math" : {
        "magic": "left",
        "": "right"
    },
    "奇術" : {
        "数学" : "right"
    }
}

const searchParams = new URLSearchParams(window.location.search)

// 初期化
function init() {

    document.getElementById("arrow").setAttribute("src", 
    "./model/3Dmodel/arrow.glb_" + arrow[decodeURI(searchParams.get('from'))][decodeURI(searchParams.get('to'))] + ".glb"
    )

    // 簡易的なOS判定
    os = detectOSSimply();
    if (os == "iphone") {
        // alert("iphone");
        // safari用。DeviceOrientation APIの使用をユーザに許可して貰う
        // document.getElementById("permit").addEventListener("click", permitDeviceOrientationForSafari);

        window.addEventListener(
            "deviceorientation",
            orientation,
            true
        );
    } else if (os == "android") {
        // alert("android");
        window.addEventListener(
            "deviceorientationabsolute",
            orientation,
            true
        );
    } else{
        window.alert("PC未対応");
    }

    /*
    document.body.insertAdjacentHTML("beforeend",
            `<a-scene id="map">
                <a-entity camera look-controls orbit-controls="target: 0 1.6 -0.5; maxPolarAngle:180; minDistance: 0.5; maxDistance: 200; initialPosition: 0 10 30"></a-entity>
                <a-gltf-model src="./model/map.glb"  position="0 -1 0" rotation="0 0 0" scale="8 8 8"></a-gltf-model>
                <a-sky color="#9EA1E7"></a-sky>
            </a-scene>`
        );
        */
           
          //関数mainをDOM構築完了後に読み込む
          // window.addEventListener('DOMContentLoaded',main,false);
    const cameraNode = document.getElementById("camera");
    cameraNode.parentNode.removeChild(cameraNode);
}


//test
// 簡易OS判定
function detectOSSimply() {
    let ret;
    if (
        navigator.userAgent.indexOf("iPhone") > 0 ||
        navigator.userAgent.indexOf("iPad") > 0 ||
        navigator.userAgent.indexOf("iPod") > 0
    ) {
        // iPad OS13のsafariはデフォルト「Macintosh」なので別途要対応
        ret = "iphone";
    } else if (navigator.userAgent.indexOf("Android") > 0) {
        ret = "android";
    } else {
        ret = "pc";
    }

    return ret;
}

// iPhone + Safariの場合はDeviceOrientation APIの使用許可をユーザに求める
// function permitDeviceOrientationForSafari() {
//     alert("request");
//     DeviceOrientationEvent.requestPermission()
//         .then(response => {
//             if (response === "granted") {
//                 window.addEventListener(
//                     "deviceorientation",
//                     detectDirection
//                 );
//             }
//         })
//         .catch(console.error);
// }

var aX = 0, aY = 0, aZ = 0;      // 加速度の値を入れる変数を3個用意

let flag = 0;


// let str = "";
// let cnt = 0;

// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
    aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
    aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）

    let X=Math.abs(aX);
    let Z=Math.abs(aZ);
    // str += `[${X},${Z}],`;
    // cnt ++;
    // if(cnt == 20){
    //     alert(str);
    //     cnt = 0;
    // }

    if((X>=4 || Z>=11) && flag == 0) flag = 1;


    if(flag == 1){
        flag *= -1; //flag 1->-1
        alert("移動が検知されたため3Dマップを表示します");
        window.location.href = "./3D.html?from=" + decodeURI(searchParams.get('from')) + "&to=" + decodeURI(searchParams.get('to'))
    };

});

  
