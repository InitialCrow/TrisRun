(function(ctx){
	var player = {
		config : {debug: true},
		init : function(){
			consol(self,"player :: ok");
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
				
				self.material = new THREE.MeshFaceMaterial(material);
				self.mesh = new THREE.Mesh( geometry, self.material );
				
				self.mesh.rotation.y += 3;
				self.shape = new CANNON.Box(new CANNON.Vec3(1.4,1,2.2));
				self.body = new CANNON.Body({ mass: 50 });
				self.body.addShape(self.shape);

				self.body.fixedRotation = true;
				self.body.updateMassProperties();
				trisrun.world.add(self.body);
				trisrun.webgl.scene.add(self.mesh);
			});
		}
		
	}


	var self =player;
	ctx.player = player;
})(trisrun);