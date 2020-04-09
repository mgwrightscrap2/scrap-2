//variables for set up

let container; //container on page that holds the 3D
let camera;
let renderer;
let scene; //3D world that camera looks at
let scenee; //name of 3D item

function init(){         //container of the scene (3D object)
    container = document.querySelector('.scene');

//create scene
scene = new THREE.Scene();

const fov = 35; //how much angle the camera sees
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; //limit between which limits the person can view the 3D image from 
const far = 1000;
//camera set up
camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.set(-8,3,25);

const ambient = new THREE.AmbientLight(0x404040,3);
scene.add(ambient);
//renderer (apha: true allows any background)

const light = new THREE.DirectionalLight(0xffffff,5);
light.position.set(10,10,10);
scene.add(light);
renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

//load model
let loader = new THREE.GLTFLoader();
loader.load('scene.gltf', function(gltf){
    scene.add(gltf,scene);
    house = gltf.scene.children[0];
    animate();
});
}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene, camera);
}


init()