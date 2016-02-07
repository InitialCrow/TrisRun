(function(ctx){
	var player = {
		init : function(){
			consol(trisrun,"player :: ok");
			this.load();
		},
		assets : "../assets/model/mercury.json",
		geometry : {},
		material : {},
		
		shape : {},	
      		body : {},
	
		load : function(){
			this.loader = new THREE.JSONLoader();
			this.loader.load( this.assets, function(geometry, material){
				// self.geometryTest = new THREE.BoxGeometry( 1, 1, 1 );
				// self.materialTest = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
				// self.cubeTest = new THREE.Mesh( self.geometryTest, self.materialTest );
				// self.shapeTest = new CANNON.Box(new CANNON.Vec3(0.5,0.5,0.5));
				// self.bodyTest = new CANNON.Body({ mass: 50 });
				// self.bodyTest.addShape(self.shapeTest);
				
				self.material = new THREE.MeshFaceMaterial(material);
				self.mesh = new THREE.Mesh( geometry, self.material );
		
				self.mesh.rotation.y += 3;
				self.shape = new CANNON.Box(new CANNON.Vec3(2,0.1,1));
				
				self.mesh.position.y += 15;
				
				self.body = new CANNON.Body({ mass: 5000});
				self.body.position.set(self.mesh.position.x,self.mesh.position.y,self.mesh.position.z);
				
				self.body.addShape(self.shape);
				self.body.fixedRotation = true;
				self.body.updateMassProperties();
				
				// initPos(self.cubeTest, self.bodyTest)

				trisrun.physic.world.add(self.body);
				// trisrun.physic.world.add(self.bodyTest);
				trisrun.webgl.scene.add(self.mesh);
				self.body.addEventListener("collide", self.jump, false);
							
				
			});
		},
		jump : function(e){
			
			if ( e.contact ){
				trisrun.gameEngine.keyboard.jump = false;
			}

				
			
		},
			
		
	}
	var self =player;
	ctx.player = player;
})(trisrun);