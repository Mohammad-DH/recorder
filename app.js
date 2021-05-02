
let container;
let camera;
let renderer;
let scene;
let model;
let myObject = './Microphone_v3.glb';
/*--------------------------------------------- */
var speed = 0;
var color = 0x000000;
/*--------------------------------------------- */
function init() {
    container = document.querySelector('.scene')
    scene = new THREE.Scene();
    const fov = 80;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 1;
    const far = 500;




    directionLight = new THREE.DirectionalLight(0xffffff, 35)
    directionLight.position.set(0, 10, 5)
    directionLight.castShadow = true
    scene.add(directionLight)

    directionLight2 = new THREE.DirectionalLight(0xff0000, 5)
    directionLight2.position.set(3, -3, 2)
    directionLight2.castShadow = true
    scene.add(directionLight2)

    directionLight3 = new THREE.DirectionalLight(0x0020ff, 10)
    directionLight3.position.set(-6, 5, -6)
    directionLight3.castShadow = true
    scene.add(directionLight3)


    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 2.5, 5)


    const ambient = new THREE.AmbientLight(0xffffff, 20)
    scene.add(ambient)


    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)




    let loader = new THREE.GLTFLoader();
    loader.load(myObject, function (gltf) {
        scene.add(gltf.scene)
        model = gltf.scene.children[0]
        model.rotation.x = 0.25
        model.position.set(0, 0, 0)
        renderer.render(scene, camera)

        animation()
    })
}

/*animation */

function animation() {

    requestAnimationFrame(animation)
    model.rotation.y += speed


    renderer.render(scene, camera)
}

init()

/*model resize */

const rr = () => {

    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize(container.clientWidth, container.clientHeight)
}
window.addEventListener('resize', rr)

/*rotation function */
function rotate() {
    if (speed === 0) {
        speed = 0.008;
    } else {
        speed = 0;
    }
}
