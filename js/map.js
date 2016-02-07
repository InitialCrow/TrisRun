(function(ctx){
	var map = {
		init : function(){
			consol(trisrun,"map :: ok");
			this.skyBox.init();
			this.patern1.init();
			// this.patern2.init();
			// this.patern3.init();
			

		},
		skyBox : {
			assets : ['../assets/skybox/grid_ft.jpg','../assets/skybox/grid_ft.jpg',
					'../assets/skybox/grid_ft.jpg','../assets/skybox/grid_ft.jpg',
					'../assets/skybox/grid_ft.jpg', '../assets/skybox/grid_ft.jpg'],
			material : [],
			geometry :  new THREE.BoxGeometry(9000,9000,9000),
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
		patern1:{

			init : function(){
				this.road1 = new Road(20,1,1000,0,0,-500,"../assets/road2.jpg");
				this.road2 = new Road(20,1,1000,0,0,-1600,"../assets/road2.jpg");
				this.road1.init(trisrun.webgl.scene, trisrun.physic.world);
				this.road2.init(trisrun.webgl.scene, trisrun.physic.world);	
			}, 
			destroy : function(){

				
				trisrun.webgl.scene.remove(this.road1.mesh, this.road2.mesh);
				trisrun.physic.world.remove(this.road1.body, this.road2.body);

			}
		},
		patern2:{
			init : function(){
				this.obstTbl = [];

				this.road1 = new Road(20,1,1000,0,0,-500,"../assets/road2.jpg");
				this.road2 = new Road(20,1,1000,0,0,-1600,"../assets/road2.jpg");
				this.wall1= new Road(8,30,1000,-10,2,-500,"../assets/road2.jpg");
				this.wall2 = new Road(8,30,1000,10,2,-500,"../assets/road2.jpg");
				for (var i = 0 ;i<15; i++){
					this.zAlea =  Math.floor(Math.random() * -1600/0.5);
					this.xAlea =  Math.floor(Math.random() * 6)/2;
					this.obstTbl[i] = new Road(2,20,20,this.xAlea,2,this.zAlea,"../assets/road2.jpg");
					this.obstTbl[i] .init(trisrun.webgl.scene, trisrun.physic.world);
				}

				
				this.road1.init(trisrun.webgl.scene, trisrun.physic.world);
				this.road2.init(trisrun.webgl.scene, trisrun.physic.world);
				this.wall1.init(trisrun.webgl.scene, trisrun.physic.world);
				this.wall2.init(trisrun.webgl.scene, trisrun.physic.world);
				
				
				

				// 	
			},
			destroy : function(){

				for (var i=0; i<trisrun.map.patern2.obstTbl.length; i++){
					
					trisrun.physic.world.remove(trisrun.map.patern2.obstTbl[i].body)
					trisrun.webgl.scene.remove(trisrun.map.patern2.obstTbl[i].mesh)
				}
				trisrun.webgl.scene.remove(this.road1.mesh, this.road2.mesh);
				trisrun.physic.world.remove(this.road1.body);
				trisrun.physic.world.remove(this.road2.body);
				trisrun.webgl.scene.remove(this.wall1.mesh, this.wall2.mesh);
				trisrun.physic.world.remove(this.wall1.body);
				trisrun.physic.world.remove(this.wall2.body)
			}	
		},
		patern3 :{
			init : function(){
				this.roadTbl = [];
			
				for (var i = 1 ;i<10; i++){
					this.z = i*80;
					this.xAlea =  Math.floor(Math.random() * 6)/2;
					this.zAlea =  Math.floor(Math.random() * -1000);
					if (i===1){
						this.roadTbl[i] = new Road(5,1,20,this.xAlea,0,-this.z,"../assets/road2.jpg");
					}
					if (i > 1 ){
						this.roadTbl[i] = new Road(5,1,20,this.xAlea,0,this.zAlea,"../assets/road2.jpg");
					}
					this.roadTbl[i] .init(trisrun.webgl.scene, trisrun.physic.world);
					
				}
			}, 
			destroy : function(){

				for (var i=1; i<trisrun.map.patern3.roadTbl.length; i++){
					
					trisrun.physic.world.remove(trisrun.map.patern3.roadTbl[i].body)
					trisrun.webgl.scene.remove(trisrun.map.patern3.roadTbl[i].mesh)
				}

			}
		}
		
	}


	var self =map;
	ctx.map = map;
})(trisrun);