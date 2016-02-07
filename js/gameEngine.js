(function(ctx){
	var counter = 0;
	
	var gameEngine = {
		
		initGameEngine : function(){
			consol(trisrun, "gameEngine :: ok");
			document.addEventListener('keydown',self.keyboard.keydown, false);
			document.addEventListener('keyup',self.keyboard.keyup, false);
			

			this.init();
		},
		// run : function(obj1, obj2, speed){
			
		// 	obj1.position.z += speed;
		// 	obj2.position.z += speed;

		// 	if (obj1.position.z > 600 ){
		// 		obj1.position.z = -1600
	
				
		// 	}
		// 	if (obj2.position.z > 600 ){
		// 		obj2.position.z = -1600;
				
		// 	}

		//  },
		keyboard: {
			jump: false,
			left:false,
			right : false,
			tool1_active : false,
			tool1 : false,

			keydown : function(event){
				
				switch(event.keyCode){
					case 32 : self.keyboard.jump = true;
					break;
					case 37 : 
					self.keyboard.tool1 = true;
					break;
					case 81 : self.keyboard.left = true;
					break;
					case 68 : self.keyboard.right = true;
					break;
				}
			},
			keyup : function(event){
				
				switch(event.keyCode){
					case 37 : self.keyboard.tool1 = false;
					break;
					case 81 : self.keyboard.left = false;
					break;
					case 68 : self.keyboard.right = false;
					break;
				}
			}
			
		},

		

		ui_patern1 : new ToolBox(function(nb){
			patern1_tool1(gameEngine);
			
			
		}),
		ui_patern2 :  new ToolBox(function(nb){
			
			patern2_tool1(gameEngine);
		}),
		ui_patern3 :  new ToolBox(function(nb){
			patern3_tool1(gameEngine);
			
				
		}),
		tool1 : new Road(20,1,100,-1000,0,-20,"../assets/road1.jpg"),
		animate : function(){
			
			this.switchPatern();
			
				initPos(trisrun.map.patern1.road1.mesh, trisrun.map.patern1.road1.body);
				initPos(trisrun.map.patern1.road2.mesh, trisrun.map.patern1.road2.body);
				initPos(trisrun.gameEngine.tool1.mesh, trisrun.gameEngine.tool1.body);

				initPos(trisrun.player.mesh, trisrun.player.body);

				// self.run(trisrun.map.patern1.road1.mesh, trisrun.map.patern1.road2.mesh, 2);
			
			
				
			
		
				
			
					
	
		
			
	
			

			
			
			// self.run(trisrun.map.patern2.road1.mesh, trisrun.map.patern2.road2.mesh, 2);
			// self.run(trisrun.map.patern2.wall1.mesh, trisrun.map.patern2.wall2.mesh, 2);
			
			

			
			
			// this.ui_patern3.controls();
			
			
			if(self.keyboard.left === true){
				trisrun.player.mesh.position.x -=0.5;
				
			}
			
			if(self.keyboard.right === true){
				
				trisrun.player.mesh.position.x +=0.5;
				
			}
			if(self.keyboard.jump === true){
				
				trisrun.player.mesh.position.y +=0.2;
				
			}	
			else{
				trisrun.player.mesh.position.x = trisrun.player.mesh.position.x;
			}
			
		},
		switchPatern : function(){
			
			
			if ( trisrun.map.patern1.road1.mesh.position.z ==500 && counter <2 ){
				
				counter ++;
				console.log(counter)
			}
			if (counter < 2 ){
				self.ui_patern1.controls();
				self.ui_patern2.hide('ui-box2');
				self.ui_patern3.hide('ui-box3');
				// trisrun.map.patern2.destroy();

				
			}
			if (counter >= 2 ){
				
				if (trisrun.map.patern2.road1 === undefined){
					trisrun.map.patern2.init();
					
				}
				if (trisrun.map.patern2.road1.mesh != undefined && trisrun.map.patern2.road2.mesh != undefined){
						if ( trisrun.map.patern2.road1.mesh.position.z ==500 && counter <4 ){
						
							counter ++;
							console.log(counter)
						}
						self.ui_patern2.controls();
						trisrun.map.patern1.destroy();
						self.ui_patern2.show('ui-box2');
						self.ui_patern2.hide("ui-box1");
					
						
						initPos(trisrun.map.patern2.road1.mesh, trisrun.map.patern2.road1.body);
						initPos(trisrun.map.patern2.road2.mesh, trisrun.map.patern2.road2.body);
						initPos(trisrun.map.patern2.wall1.mesh, trisrun.map.patern2.wall1.body);
						initPos(trisrun.map.patern2.wall2.mesh, trisrun.map.patern2.wall2.body);
						for (var i=0; i<trisrun.map.patern2.obstTbl.length; i++){
							trisrun.map.patern2.obstTbl[i].body.position.z +=2
							if (trisrun.map.patern2.obstTbl[i].body.position.z > 100){
									trisrun.map.patern2.obstTbl[i].body.position.z = -600
							}
							initPos(trisrun.map.patern2.obstTbl[i].mesh, trisrun.map.patern2.obstTbl[i].body);
						}
				}	
			}
			if (counter >= 4 ){
				if (trisrun.map.patern3.roadTbl === undefined){
					trisrun.map.patern3.init();
					
				}
				if (trisrun.map.patern3.roadTbl  != undefined ){
						self.ui_patern3.controls();
						trisrun.map.patern2.destroy();
						self.ui_patern3.hide("ui-box2");
						self.ui_patern3.show('ui-box3');
						
						for (var i=1; i<trisrun.map.patern3.roadTbl.length; i++){
							if (trisrun.map.patern3.roadTbl[i].mesh!= undefined){
									trisrun.map.patern3.roadTbl[i].mesh.position.z += 1;
								if (trisrun.map.patern3.roadTbl[i].body.position.z > 100){
									trisrun.map.patern3.roadTbl[i].body.position.z = -600;

								}
								initPos(trisrun.map.patern3.roadTbl[i].mesh, trisrun.map.patern3.roadTbl[i].body);
							 }
							
						}
						if (trisrun.map.patern3.roadTbl[9].mesh!= undefined){
							if ( trisrun.map.patern3.roadTbl[9].mesh.position.z ==100 && counter <6 ){
								
								counter ++;
								console.log(counter)
							}
						}
						
					
				}
				
				
			}

			if (counter === 6 ){
				
				
				trisrun.map.patern3.destroy();
				counter = -1;
			}
		
			
			
			
		
			

			
			
		},
		
				
		
		init : function(){		
			this.tool1.init(trisrun.webgl.scene, trisrun.physic.world);
			
			this.ui_patern1.init(3, "assets/tools/placeholder.jpg", 'ui-box1');
			this.ui_patern2.init(2, "assets/tools/placeholder.jpg", 'ui-box2');	
			this.ui_patern3.init(4, "assets/tools/placeholder.jpg", 'ui-box3');
		
		}
	}
	var self = gameEngine;
	ctx.gameEngine = gameEngine;
})(trisrun);