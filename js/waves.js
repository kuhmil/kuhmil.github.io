/*

ThreeJs custom waves
Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html
Modified version for Cloudoru by Kevin Rajaram : http://kevinrajaram.com
Date: 08/14/2014


*/

var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

var container;
var camera, scene, renderer;
/*

if (window.WebGLRenderingContext){
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  }
else {
  renderer = new THREE.CanvasRenderer();
  }
*/

var particles, particle, count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

  container = document.createElement( 'div' );
  document.body.appendChild( container );
  if(container) {
      container.className += container.className ? ' waves' : 'waves';
  }

  camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
  camera.position.z = 300; //This is how close or far the particles are seen

  camera.rotation.x = 0.35;

  scene = new THREE.Scene();

  particles = new Array();

  var PI2 = Math.PI * 2;
  var material = new THREE.SpriteCanvasMaterial( {

    color: 0x939393, //changes color of particles
    program: function ( context ) {

      context.beginPath();
      context.arc( 0, 0, 0.1, 0, PI2, true );
      context.fill();

    }

  } );

  var i = 0;

  for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

    for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

      particle = particles[ i ++ ] = new THREE.Sprite( material );
      particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
      particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
      scene.add( particle );

    }

  }

  renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xffffff, 1);
  container.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  render();

}

function render() {

  var i = 0;

  for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

    for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

      particle = particles[ i++ ];
      particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 20 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
      particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

    }

  }

  renderer.render( scene, camera );

  // This increases or decreases speed
  count += 0.2;

}




//const canvas = document.getElementById('canvas');
//const renderer = new THREE.WebGLRenderer({ canvas });
//const scene = new THREE.Scene();
//
//const defaultCamera = {
//  fieldOfView: 100,
//  aspect: canvas.width / canvas.height,
//  near: 0.2,
//  far: 2000
//}
//


//// First understand basics -> Then start to
//
//const setupCamera = (cameraSpec, cells) => {
//  console.log(cells);
//  const camera = new THREE.PerspectiveCamera(cameraSpec.fieldOfView, cameraSpec.aspect, cameraSpec.near, cameraSpec.far);
//  camera.position.x = cells / Math.sqrt(cells) * 20;
//  camera.position.y = Math.sqrt(cells) * 2;
//  camera.position.z = Math.sqrt(cells / 5);
//  return camera;
//}
//
//const alignRenderer = (renderer) => {
//  const canvas = renderer.domElement;
//  const pixelRatio = window.devicePixelRatio;
//  const width = canvas.clientWidth * pixelRatio || 0;
//  const height = canvas.clientHeight * pixelRatio || 0;
//  let resizeCondition = canvas.width !== width || canvas.height !== height
//  if (resizeCondition) {
//    renderer.setSize(width, height, false);
//  }
//  return resizeCondition;
//}
//
//const checkIfResized = (resizeCondition) => {
//  if(resizeCondition) {
//    const canvas = renderer.domElement;
//    camera.aspect = canvas.clientWidth / canvas.clientHeight;
//    camera.updateProjectionMatrix();
//  }
//}
//
//let circleGrid = [];
//
//const addCircle = (circlesX, circlesY, space) => {
//  let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
//  let geometry = new THREE.SphereGeometry(1, 8, 8);
//
//  for(let i = 0; i < circlesY; i++) {
//    let circleRow = [];
//    for(let j = 0; j < circlesX; j++) {
//      let circle = new THREE.Mesh(geometry, material);
//      circle.position.x = i * space;
//      circle.position.z = -j * space;
//      circleRow.push(circle);
//      scene.add(circle);
//    }
//    circleGrid.push(circleRow);
//  }
//}
//
//const movement = (i, j, gridSize, cell, time) => {
//  cell.position.y = (Math.sin((i + gridSize + time ) * 0.3 ) * 15) +
//  (Math.sin((j + gridSize + time) * 0.3 ) * 15);
//}
//
//addCircle(50, 50, 50);
//let camera = setupCamera(defaultCamera, circleGrid.length*circleGrid[0].length)
//
//const animate = (time) => {
//  time *= 0.01;
//
//  checkIfResized(alignRenderer(renderer));
//
//  for(let i = 0; i < circleGrid.length; i++) {
//      for (let j = 0; j < circleGrid[i].length; j++) {
//        movement(i, j, circleGrid.length, circleGrid[i][j], time);
//      }
//  }
//  renderer.render(scene, camera);
//  requestAnimationFrame(animate);
//}
//requestAnimationFrame(animate);