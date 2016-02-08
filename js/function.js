// this for global debug msg
function consol(obj, msg){

	if (obj.config.debug === true)console.log(msg);
}

function debugTool(obj, obj2){
	
	if (obj2.config.debug === true){
		consol(obj2, "============= DEBUG MODE ACTIVE ============")
		obj.stats = new Stats();
		obj.stats.setMode( 0 ); // 0: fps, 1: ms, 2: mb

		// align top-left
		obj.stats.domElement.style.position = 'absolute';
		obj.stats.domElement.style.left = '0px';
		obj.stats.domElement.style.top = '0px';

		document.body.appendChild( obj.stats.domElement );
		consol(obj2, "stats :: active")

		obj.trident = new THREE.AxisHelper(5);
		obj.scene.add(obj.trident);

		obj.orbit = new THREE.OrbitControls( obj.camera, obj.renderer.domElement );
		//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
		obj.orbit.enableDamping = true;
		obj.orbit.dampingFactor = 0.25;
		obj.orbit.enableZoom = true;
		consol(obj2, "orbitControl :: active")
	
	}
}



// ync position of geometry and body
function initPos(obj, objBody){
	objBody.position = obj.position;

}
// physic


function controls(controller, obj){
	

}
function debugBody(obj, shape, scene, body){
	obj.geometryDebug = new THREE.BoxGeometry( shape.halfExtents.x, shape.halfExtents.y, shape.halfExtents.z );
	obj.materialDebug = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	obj.cubeDebug = new THREE.Mesh( obj.geometryDebug, obj.materialDebug );
	
	scene.add( obj.cubeDebug );
}

//patern1
function patern1_tool1(self){
	trisrun.map.patern1.road1.mesh.position.z +=2;
	trisrun.map.patern1.road2.mesh.position.z +=2;
	trisrun.map.patern1.road3.mesh.position.z +=2;
	trisrun.map.patern1.road4.mesh.position.z +=2;
	trisrun.map.patern1.wall.mesh.position.z +=2;
	trisrun.gameEngine.tool2.mesh.position.z +=2;
	trisrun.gameEngine.tool3.mesh.position.z +=2;

	if (trisrun.map.patern1.road1.mesh.position.z > 600 ){
				trisrun.map.patern1.road1.mesh.position.z = -3700
				self.tool1.body.position.set(-1000,0,0);
				self.keyboard.tool1_active = false;
				
			}
	if (trisrun.map.patern1.road2.mesh.position.z > 600 ){
				trisrun.map.patern1.road2.mesh.position.z = -3700;
				self.tool1.body.position.set(-1000,0,0);
				self.keyboard.tool1_active = false;
	}
	if (trisrun.map.patern1.road3.mesh.position.z > 600 ){
				trisrun.map.patern1.road3.mesh.position.z = -3700
				self.tool1.body.position.set(-1000,0,0);
				self.keyboard.tool1_active = false;
				
				
			}
	if (trisrun.map.patern1.road4.mesh.position.z > 600 ){
				trisrun.map.patern1.road4.mesh.position.z = -3700;
				trisrun.map.patern1.wall.mesh.position.z = -2200;
				self.tool3.body.position.set(0,-20,-4250)
				self.keyboard.tool3_active = false;
				self.tool2.body.position.set(0,0,-2150)
				self.keyboard.tool2_active = false;
	}
	if( self.tool3.mesh.position.z > trisrun.player.mesh.position.z){
		self.keyboard.tool3_active = false;
	}


	if(self.keyboard.tool1 === true  && (trisrun.map.patern1.road1.mesh.position.z >450 || trisrun.map.patern1.road3.mesh.position.z >450)  ){
				self.keyboard.tool1_active = true;
					
			}
			else if(self.keyboard.tool1===true && trisrun.map.patern1.road1.mesh.position.z <450 &&self.keyboard.tool1_active === false ){
				console.log("'BAD TIMING")
				
			}
			if ( self.keyboard.tool1_active === true && trisrun.map.patern1.road1.mesh.position.z > trisrun.map.patern1.road2.mesh.position.z ){
					self.tool1.mesh.position.x +=50;
					self.tool1.mesh.position.y = 0;
					 self.tool1.mesh.position.z = trisrun.map.patern1.road1.mesh.position.z-552;
					if (self.tool1.mesh.position.x >0){
						self.tool1.mesh.position.x = 0;
						self.tool1.mesh.position.z += 2;
					}
			}
			
			if ( self.keyboard.tool1_active === true && trisrun.map.patern1.road2.mesh.position.z < trisrun.map.patern1.road3.mesh.position.z ){
					self.tool1.mesh.position.x +=50;
					self.tool1.mesh.position.y = -20;
					 self.tool1.mesh.position.z = trisrun.map.patern1.road3.mesh.position.z-552;
					if (self.tool1.mesh.position.x >0){
						self.tool1.mesh.position.x = 0;
						self.tool1.mesh.position.z += 2;
					}
			}
			
			







			if(self.keyboard.tool2 === true  && ( trisrun.map.patern1.road2.mesh.position.z >400)  ){
				self.keyboard.tool2_active = true;
					
			}
			else if(self.keyboard.tool2===true && trisrun.map.patern1.road1.mesh.position.z <450 &&self.keyboard.tool2_active === false ){
				console.log("'BAD TIMING")
				
			}
			if ( self.keyboard.tool2_active === true  ){
					self.tool2.mesh.position.y -=5;
					
					
					if (self.tool2.mesh.position.y <-20){
						self.tool2.mesh.position.y = -20;
						
					}
			}







			if(self.keyboard.tool3 === true  && ( trisrun.map.patern1.road4.mesh.position.z >400)  ){
				self.keyboard.tool3_active = true;
			
					
			}
			else if(self.keyboard.tool3 === true && trisrun.map.patern1.road4.mesh.position.z <450 &&self.keyboard.tool3_active === false ){
				console.log("'BAD TIMING")
				
			}
			if ( self.keyboard.tool3_active === true  ){
					self.tool3.mesh.position.y +=2;
					trisrun.player.mesh.position.y +=2;
					
					
					
					
			}
			




}

function patern2_tool1(self){

	
	trisrun.map.patern2.road1.mesh.position.z +=2;
	trisrun.map.patern2.road2.mesh.position.z +=2;
	trisrun.map.patern2.wall1.mesh.position.z +=2;
	trisrun.map.patern2.wall2.mesh.position.z +=2;
	if (trisrun.map.patern2.road1.mesh.position.z > 600 ){
				trisrun.map.patern2.road1.mesh.position.z = -1600
				trisrun.map.patern2.wall1.mesh.position.z = -1600
				trisrun.map.patern2.wall2.mesh.position.z = -1600
				self.tool1.body.position.set(-1000,0,0);
				self.keyboard.tool1_active = false;
				
			}
	if (trisrun.map.patern2.road2.mesh.position.z > 600 ){
				trisrun.map.patern2.road2.mesh.position.z = -1600;
				self.tool1.body.position.set(-1000,0,0);
				self.keyboard.tool1_active = false;
	}
	if(self.keyboard.tool1 === true  && (trisrun.map.patern2.road1.mesh.position.z >450 || trisrun.map.patern2.road2.mesh.position.z >450)  ){
				self.keyboard.tool1_active = true;
					
			}
			else if(self.keyboard.tool1===true && trisrun.map.patern2.road1.mesh.position.z <450 &&self.keyboard.tool1_active === false ){
				console.log("'BAD TIMING")
				
			}
			if ( self.keyboard.tool1_active === true && trisrun.map.patern2.road1.mesh.position.z > trisrun.map.patern2.road2.mesh.position.z ){
					self.tool1.mesh.position.x +=50;
					self.tool1.mesh.position.y = 0;
					 self.tool1.mesh.position.z = trisrun.map.patern2.road1.mesh.position.z-552;
					if (self.tool1.mesh.position.x >0){
						self.tool1.mesh.position.x = 0;
						self.tool1.mesh.position.z += 2;
					}
			}
			if ( self.keyboard.tool1_active === true && trisrun.map.patern2.road1.mesh.position.z < trisrun.map.patern2.road2.mesh.position.z ){
					self.tool1.mesh.position.x +=50;
					self.tool1.mesh.position.y = 0;
					 self.tool1.mesh.position.z = trisrun.map.patern2.road2.mesh.position.z-552;
					if (self.tool1.mesh.position.x >0){
						self.tool1.mesh.position.x = 0;
						self.tool1.mesh.position.z += 2;
					}
			}
}

function patern3_tool1(self){
	

	if(self.keyboard.tool1 === true && self.keyboard.jump === true ){
		self.keyboard.tool1_active = true;
		
		
	}
	if (self.keyboard.tool1_active === true  ){
		self.tool1.mesh.position.x +=50;
		self.tool1.mesh.position.y = 0;
		
		if (self.tool1.mesh.position.x >0){
			self.tool1.mesh.position.x =0;
			self.tool1.mesh.position.z+=1;

			
		}
		
	
			
			
		
		
	}
	if (self.tool1.mesh != undefined){
		if (self.tool1.mesh.position.z > 100 ){
			
			self.tool1.mesh.position.set(-500,0,-20);
			self.keyboard.tool1_active = false;
				
		}
	}
	
}