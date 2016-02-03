// this for global debug msg
function consol(obj,msg){
	if (obj.config.debug === true)console.log(msg);
}

function debugTool(obj, obj2){
	
	if (obj.config.debug === true){
		consol(obj, "============= DEBUG MODE ACTIVE ============")
		obj.stats = new Stats();
		obj.stats.setMode( 0 ); // 0: fps, 1: ms, 2: mb

		// align top-left
		obj.stats.domElement.style.position = 'absolute';
		obj.stats.domElement.style.left = '0px';
		obj.stats.domElement.style.top = '0px';

		document.body.appendChild( obj.stats.domElement );
		consol(obj, "stats :: active")

		obj.trident = new THREE.AxisHelper(5);
		obj2.scene.add(obj.trident);

		obj.orbit = new THREE.OrbitControls( obj2.camera, obj2.renderer.domElement );
		//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
		obj.orbit.enableDamping = true;
		obj.orbit.dampingFactor = 0.25;
		obj.orbit.enableZoom = false;
		consol(obj, "orbitControl :: active")
	
	}
}