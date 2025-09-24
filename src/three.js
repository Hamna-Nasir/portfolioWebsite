
const canvas = document.querySelector('#bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(30);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
    alpha: true   
});

renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


const geometry = new THREE.TorusGeometry(12, 3.5, 15, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x7a5498, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function updateTorusPosition() {
    if (window.innerWidth < 768) {
        // Mobile view
        torus.position.set(0, -5, 0); 
        torus.scale.set(0.7, 0.7, 0.7);
    } else {
        // Desktop view
        torus.position.set(5, 0, 0); 
        torus.scale.set(1, 1, 1);
    }
}

updateTorusPosition();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateTorusPosition();
});

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();
