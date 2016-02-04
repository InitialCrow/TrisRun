(function(ctx){
	var gameEngine = {
		
		initGameEngine : function(){
			consol(trisrun, "gameEngine :: ok");
			document.addEventListener('keydown',self.keyboard.keydown, false);
			document.addEventListener('keyup',self.keyboard.keyup, false);

			this.init();
		},
		run : function(obj1, obj2, speed){
			var reset = false;
			obj1.position.z += speed;
			obj2.position.z += speed;

			if (obj1.position.z > 500  ){
				obj1.position.set(0,0,-1500);
				
			}
			if (obj2.position.z > 500 ){
				obj2.position.set(0,0,-1500);
			}

		},
		keyboard: {
		
			left:false,
			right : false,
			tool1 : false,
			keydown : function(event){
				self.keyboard.left = false;
				switch(event.keyCode){
					case 37 : self.keyboard.tool1 = true;
					break;
					case 81 : self.keyboard.left = true;
					break;
					case 68 : self.keyboard.right = true;
					break;
				}
			},
			keyup : function(event){
				
				switch(event.keyCode){
					
					case 81 : self.keyboard.left = false;
					break;
					case 68 : self.keyboard.right = false;
					break;
				}
			}
			
		},

		ui : new ToolBox(function(nb){
			consol(trisrun, 'UserInterface > detected :: ok')

			
			this.display(3, "assets/tools/placeholder.jpg");

			
		}),
		tool1 : new Road(20,1,50,-1000,0,-100,"../assets/road1.jpg"),
		animate : function(){
			self.run(trisrun.map.road1.mesh, trisrun.map.road2.mesh, 1);
			if(self.keyboard.tool1 === true){
				if (self.tool1.mesh.position.x <0  ){
					self.tool1.mesh.position.x +=20;
					
					
				}
				if (self.tool1.mesh.position.x == 0 ){
						self.run(trisrun.gameEngine.tool1.mesh, trisrun.gameEngine.tool1.mesh, 1)
					}
				
				
				
			}
			if(self.keyboard.left === true){
				trisrun.player.mesh.position.x -=0.5;
				
			}
			
			if(self.keyboard.right === true){
				trisrun.player.mesh.position.x +=0.5;
				
			}
			else{
				trisrun.player.mesh.position.x = trisrun.player.mesh.position.x;
			}

			
		},
		
				
		
		init : function(){
			
			this.tool1.init(trisrun.webgl.scene, trisrun.physic.world);
			
			
			this.ui.controls();

		}
	}
	var self = gameEngine;
	ctx.gameEngine = gameEngine;
})(trisrun);