var Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    pink:0xF5986E,
    brown:0x59332e,
    brownDark:0x23190f,
    blue:0x68c3c0,
};

var boxSizeBig = [2,2,2]
var boxSizeMedium = [1,1,1]
var boxSizeSmall = [0.5, 0.5, 0.5]

//Tạo kích thước của Box
var geometry = new THREE.BoxGeometry(boxSizeMedium[0], boxSizeMedium[1], boxSizeMedium[2]);

function makeCube(geometry, color, x){
  //Geometry kích thước của vật liệu, x là vị trí của vật liệu theo chiều Ngang:X
  const material = new THREE.MeshPhongMaterial({color});

  const cube = new THREE.Mesh(geometry,material);

  scene.add(cube);
  cube.position.x = x;
  return cube;
}
