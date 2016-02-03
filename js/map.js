(function(ctx){
	var map = {
		config : {debug: true},
		init : function(){
			consol(self,"map :: ok");
			this.skyBox.init();
			this.road.init();
		
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
				consol(self,"map > skybox :: ok");
				
			}		
		},
		road : {
			geometry : new THREE.BoxGeometry( 15, 1, 500 ) ,
			material : {},
			mesh :{},
			shape : {},	
       		body : {},
			loader : new THREE.TextureLoader(),

			init : function(){

				

				self.road.loader.load("../assets/road2.jpg", function ( image ) {
						
						self.road.material = new THREE.MeshBasicMaterial({map:image});
	             				self.road.mesh = new THREE.Mesh(self.road.geometry, self.road.material);
	             				image.wrapS = THREE.RepeatWrapping;
	             				image.wrapT = THREE.RepeatWrapping;
	             				image.repeat.set( 1, 25 );
						
             					
             					self.road.shape = new CANNON.Box(new CANNON.Vec3(400,0.1,400));
								self.road.body = new CANNON.Body({ mass: 0 });
								self.road.body.addShape(self.road.shape);

								
								self.road.body.updateMassProperties();
								trisrun.world.add(self.road.body);
								

             					trisrun.webgl.scene.add(self.road.mesh);
             					self.road.mesh.position.z = -250;


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
				consol(self,"map > road :: ok");
			}
		}	
	}


	var self =map;
	ctx.map = map;
})(trisrun);