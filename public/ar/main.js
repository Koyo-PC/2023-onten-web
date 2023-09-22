
// OS識別用
let os;

// DOM構築完了イベントハンドラ登録
window.addEventListener("DOMContentLoaded", init);

const arrow = {
    "math" : {
        "ans":"",
        "magic":"left",
        "art":"",
        "astro":"",
        "band":"",
        "bio":"",
        "cafe":"",
        "chem":"",
        "ess":"",
        "fes":"",
        "jet":"",
        "lib":"",
        "pc":"",
        "shogi":"",
        "spla":"",
        "survive":"",
        "train":"",
        "vr":"",
    },
    "ans" : {
        "art":"",
        "astro":"",
        "band":"",
        "bio":"",
        "cafe":"",
        "chem":"",
        "ess":"",
        "fes":"",
        "jet":"",
        "lib":"",
        "magic":"",
        "math":"",
        "pc":"",
        "shogi":"",
        "spla":"",
        "survive":"",
        "train":"",
        "vr":"",
    },
    "art" : {
        "ans":"",
        "astro":"",
        "band":"",
        "bio":"",
        "cafe":"",
        "chem":"",
        "ess":"",
        "fes":"",
        "jet":"",
        "lib":"",
        "magic":"",
        "math":"",
        "pc":"",
        "shogi":"",
        "spla":"",
        "survive":"",
        "train":"",
        "vr":"",
    },
    "astro" : {
        "ans":"",
        "art":"",
        "band":"",
        "bio":"",
        "cafe":"",
        "chem":"",
        "ess":"",
        "fes":"",
        "jet":"",
        "lib":"",
        "magic":"",
        "math":"",
        "pc":"",
        "shogi":"",
        "spla":"",
        "survive":"",
        "train":"",
        "vr":"",
    },
    "band" : {
        "ans":"",
        "art":"",
        "astro":"",
        "bio":"",
        "cafe":"",
        "chem":"",
        "ess":"",
        "fes":"",
        "jet":"",
        "lib":"",
        "magic":"",
        "math":"",
        "pc":"",
        "shogi":"",
        "spla":"",
        "survive":"",
        "train":"",
        "vr":"",
    },
    "bio" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "cafe" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "chem" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "ess" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "fes" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "jet" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "lib" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "magic" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "pc" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "shogi" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"spla":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "spla" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"survive":"",
		"train":"",
		"vr":"",
    },
    "survive" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"train":"",
		"vr":"",
    },
    "train" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"vr":"",
    },
    "vr" : {
        "ans":"",
		"art":"",
		"astro":"",
		"band":"",
		"bio":"",
		"cafe":"",
		"chem":"",
		"ess":"",
		"fes":"",
		"jet":"",
		"lib":"",
		"magic":"",
		"math":"",
		"pc":"",
		"shogi":"",
		"spla":"",
		"survive":"",
		"train":"",
    },
 
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

  
