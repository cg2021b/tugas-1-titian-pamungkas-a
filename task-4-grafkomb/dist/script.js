// Three.js - Shadows - Spot Light w/CameraHelper
// from https://threejsfundamentals.org/threejs/threejs-shadows-point-light.html


import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';

function main() {
  let meshgeo;
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.shadowMap.enabled = true;

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 2000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  camera.zoom = 1;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');
  scene.fog = new THREE.Fog(0xDFE9E3, 10, 50);
  //const cameraHelper = new THREE.CameraHelper(camera);
  //scene.add(cameraHelper);

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.receiveShadow = true;
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
  }
  {
    const cubeSize = 4;
    const boxtext = new THREE.TextureLoader().load( '/img/wood.jpg');
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC', map: boxtext, side: THREE.DoubleSide});
    meshgeo = new THREE.Mesh(cubeGeo, cubeMat);
    meshgeo.castShadow = true;
    meshgeo.receiveShadow = true;
    meshgeo.position.set(cubeSize + 1, 4, 0);
    scene.add(meshgeo);
  }
  {
    const cubeSize = 30;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMat = new THREE.MeshPhongMaterial({
      color: '#CCC',
      side: THREE.BackSide,
    });
    const mesh = new THREE.Mesh(cubeGeo, cubeMat);
    mesh.receiveShadow = true;
    mesh.position.set(0, cubeSize / 2 - 0.1, 0);
    scene.add(mesh);
  }
  

  class ColorGUIHelper {
    constructor(object, prop) {
      this.object = object;
      this.prop = prop;
    }
    get value() {
      return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
      this.object[this.prop].set(hexString);
    }
  }

  function makeXYZGUI(gui, vector3, name, onChangeFn) {
    const folder = gui.addFolder(name);
    folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
    folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
    folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
    // folder.open();
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.PointLight(color, intensity);
    light.castShadow = true;
    // light.shadow.autoUpdate = false;
    light.shadow.camera.far = 2000;
    // light.shadow.bias = 0.0005;
    light.shadow.camera.aspect = 1;
    light.shadow.camera.zoom = 1;
    light.shadow.camera.near = 1;
    light.shadow.camera.top = 300;
    light.shadow.camera.bottom = 300;
    light.shadow.camera.right = 300;
    light.shadow.camera.left = 300;
    // light.shadow.focus = 2;
    // light.shadow.mapSize.set(1024,1024);
    // light.shadow.mapSize.width = 124;
    // light.shadow.mapSize.height = 221;
    // light.shadow.blurSamples = 2;
    // light.shadow.needsUpdate = true;
    // light.shadow.normalBias = 1;
    light.shadow.radius = 1;
    light.position.set(0, 7.5, 0);
    scene.add(light);
    const lightHelper = new THREE.PointLightHelper(light, 1);
    scene.add(lightHelper);

    function updateCamera() {
    }

    class MinMaxGUIHelper {
      constructor(obj, minProp, maxProp, minDif) {
        this.obj = obj;
        this.minProp = minProp;
        this.maxProp = maxProp;
        this.minDif = minDif;
      }
      get min() {
        return this.obj[this.minProp];
      }
      set min(v) {
        this.obj[this.minProp] = v;
        this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
      }
      get max() {
        return this.obj[this.maxProp];
      }
      set max(v) {
        this.obj[this.maxProp] = v;
        this.min = this.min;  // this will call the min setter
      }
    }

    const gui = new GUI();
    gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
    gui.add(light, 'intensity', 0, 2, 0.01);
    gui.add(light, 'distance', 0, 40).onChange(updateCamera);

    {
      const folder = gui.addFolder('Shadow Camera');
      folder.open();
      const minMaxGUIHelper = new MinMaxGUIHelper(light.shadow.camera, 'near', 'far', 0.1);
      folder.add(minMaxGUIHelper, 'min', 0.1, 50, 0.1).name('near').onChange(updateCamera);
      folder.add(minMaxGUIHelper, 'max', 0.1, 50, 0.1).name('far').onChange(updateCamera);
    }

    makeXYZGUI(gui, light.position, 'position', updateCamera);
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    resizeRendererToDisplaySize(renderer);
    
    {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    meshgeo.rotation.x += 0.01;
    meshgeo.rotation.y += 0.01;
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();