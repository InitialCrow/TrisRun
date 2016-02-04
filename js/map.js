(function(ctx){
	var map = {
		init : function(){
			consol(trisrun,"map :: ok");
			this.skyBox.init();
			this.road1.init(trisrun.webgl.scene, trisrun.physic.world);
			this.road2.init(trisrun.webgl.scene, trisrun.physic.world);
		},
		skyBox : {
			assets : ['../assets/skybox/grid_ft.jpg','../assets/skybox/grid_ft.jpg',
					'../assets/skybox/grid_ft.jpg','../assets/skybox/grid_ft.jpg',
					'../assets/skybox/grid_ft.jpg', '../assets/skybox/grid_ft.jpg'],
			material : [],
			geometry :  new THREE.BoxGeometry(1900,1900,1900,1,1,1,null,true),
			loader : new THREE.TextureLoader(),
			init : function(){
				for( var i =0; i< this.assets.length; i++){
					self.skyBox.loader.load(this.assets[i], function ( image ) {
						self.skyBox.materials = new THREE.MeshBasicMaterial({map:image, side: THREE.BackSide});
             					self.skyBox.material.push(self.skyBox.materials);
             					self.skyBox.materialFinal = new THREE.MeshFaceMaterial(self.skyBox.material);
             					self.skyBox.box = new THREE.Mesh(self.skyBox.geometry, self.skyBox.materialFinal);
             					trisrun.webgl.scene.add(self.skyBox.box);
						},
						// Function called when download progresses
						function ( xhr ) {
							console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
						},
						// Function called when download errors
						function ( xhr ) {
							console.log( 'An error happened' );
						}
					);	
				}
				consol(trisrun,"map > skybox :: ok");	
			}		
		},
		road1 : new Road(20,1,1000,0,0,-500,"../assets/road2.jpg"),
		road2 : new Road(20,1,1000,0,0,-1500,"../assets/road2.jpg")
	}


	var self =map;
	ctx.map = map;
})(trisrun);