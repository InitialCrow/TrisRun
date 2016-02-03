(function(ctx){
	var trisrun = {

		webgl : {},
		world : {},

		config : { debug : true},

		init : function(){
			
			this.initWebgl();
			this.initWorld();
			this.map.init();
			this.player.init();
			consol(this, "Trisrun :: ok");
			return this;

		},

		start : function(){
			this.webgl.renderer.render(this.webgl.scene, this.webgl.camera);

			consol(this, "============== Trisrun :: started =================");
			this.update();
		},

		initWebgl : function(){

			var w = this.webgl; // shorcut
			w.scene = new THREE.Scene();

			w.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000 );
			w.camera.position.set(0, 0, 15);
			w.light2 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
			w.scene.add( w.light2 );
			w.light = new THREE.AmbientLight( 0x404040 ); // soft white light
			w.scene.add( w.light );


			w.renderer = new THREE.WebGLRenderer();
			w.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.style.margin = 0;
			document.body.style.overflow = 'hidden';
			document.body.appendChild( w.renderer.domElement );

			
			debugTool(this, w);
			consol(this, "==================== COMPONENTS ===================");
			consol(this, "webgl :: ok")
		},
		initWorld : function(){
			consol(this, "world :: ok");
			this.world = new CANNON.World();
			this.world.broadphase = new CANNON.NaiveBroadphase();
			this.world.gravity.set(0,-50,0);
			this.world.broadphase.useBoundingBoxes = true;
			
		},

		update : function(){
			requestAnimationFrame(trisrun.update);
			
			if (trisrun.config.debug === true){
				trisrun.stats.begin();
				
      			trisrun.world.step(1/60);
				if (trisrun.player.mesh !== undefined){
					
					syncBodyPos(trisrun.player.mesh, trisrun.player.body);
					syncBodyPos(trisrun.map.road.mesh, trisrun.map.road.body);
				}
				
				trisrun.stats.end()
			}
			else{

			}

			trisrun.webgl.renderer.render(trisrun.webgl.scene, trisrun.webgl.camera);
			
			    // monitored code goes here
			
			
			
		},

	}

	ctx.trisrun = trisrun;
	

	
})(window);


