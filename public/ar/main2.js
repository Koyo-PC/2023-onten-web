//　変更の必要なし

window.addEventListener("DOMContentLoaded", init);

function init() {
  //シーンの基本設定
  var scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;
  var fov = 60;
  var aspect = width / height; //アスペクト比
  var near = 0.001; //ここから
  var far = 10000; //ここまでの間に3Dの描画を行う
  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  // if(!Detector.webgl) Detector.addGetWebGLMessage();
  //レンダラーをDOM上に設置する
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.logarithmicDepthBuffer = true;
  document.body.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  controls.target = new THREE.Vector3(0, 0, 0);
  camera.position.set(100, 0, 0); //カメラの位置。ここでは10手前に引いている
  controls.update();
  //光源を設定する
  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 0.7, 0.7); //光源の角度
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x9EA1E7);
  scene.add(ambientLight);

  scene.background = new THREE.Color( 0x404040 );

  const loader = new THREE.GLTFLoader();

  const searchParams = new URLSearchParams(window.location.search)

  loader.load(
    "./model/" + "from" + decodeURI(searchParams.get('from')) + "to" + decodeURI(searchParams.get('to')) + ".glb",
    function (gltf) {
      model = gltf.scene;
      model.traverse((object) => {
        //モデルの構成要素
        if (object.isMesh) {
          //その構成要素がメッシュだったら
          object.material.trasparent = true;//透明許可
          object.material.opacity = 0.8;//透過
          object.material.depthTest = true;//陰影で消える部分
        //   object.material.depthFunc = 3;
        //   object.material.forceSinglePass = true;
        } else {
          console.log(object);
        }
        scene.add(model);
      });
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );
  // scene.add(mesh);

  // var wire = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
  // var wireMesh = new THREE.Mesh(geometry,wire);//同じ形状からワイヤーも作成
  // scene.add(wireMesh);

  renderer.render(scene, camera); //これまでに作った内容をレンダリング

  (function renderLoop() {
    requestAnimationFrame(renderLoop);
    controls.update();
    renderer.render(scene, camera);
  })();
}