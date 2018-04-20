	/*
	Chargement du curseur palette
	*/
	var curseurData = [
	 {idG:'g4351',idText:'tspan3891',en:'ecstasy',fr:'extase',color:'#ffe854',value:0,liens:['g4341'],niv:0}
  	,{idG:'g4398',idText:'tspan3836',en:'annoyance',fr:'gêne',color:'#ff8c8c',value:0,liens:['g4666'],niv:2}
  	,{idG:'g4403',idText:'tspan3840',en:'anger',fr:'colère',color:'#ff0000',value:0,liens:['g4398'],niv:1}
  	,{idG:'g4408',idText:'tspan3844',en:'rage',fr:'rage',color:'#d40000',value:0,liens:['g4403'],niv:0}
  	,{idG:'g4341',idText:'tspan3895',en:'joy',fr:'joie',color:'#ffff54',value:0,liens:['g4346'],niv:1}
  	,{idG:'g4346',idText:'tspan3899',en:'serenity',fr:'sérénité',color:'#ffffb1',value:0,liens:['g4600'],niv:2}
  	,{idG:'g4413',idText:'tspan3903',en:'terror',fr:'terreur',color:'#008000',value:0,liens:['g4418'],niv:0}
  	,{idG:'g4418',idText:'tspan3907',en:'fear',fr:'peur',color:'#009600',value:0,liens:['g4423'],niv:1}
  	,{idG:'g4423',idText:'tspan3911',en:'apprehension',fr:'appréhension',color:'#8cc68c',value:0,liens:['g4630'],niv:2}
  	,{idG:'g4383',idText:'tspan3915',en:'admiration',fr:'adoration',color:'#00b400',value:0,liens:['g4378'],niv:0}
  	,{idG:'g4378',idText:'tspan3919',en:'trust',fr:'confiance',color:'#54ff54',value:0,liens:['g4373'],niv:1}
  	,{idG:'g4373',idText:'tspan3923',en:'acceptance',fr:'résignation',color:'#8cff8c',value:0,liens:['g4613'],niv:2}
  	,{idG:'g4356',idText:'tspan3927',en:'vigilance',fr:'vigilance',color:'#ff7d00',value:0,liens:['g4388'],niv:0}
  	,{idG:'g4388',idText:'tspan3931',en:'anticipation',fr:'excitation',color:'#ffa854',value:0,liens:['g4393'],niv:1}
  	,{idG:'g4393',idText:'tspan3935',en:'interest',fr:'intérêt',color:'#ffc48c',value:0,liens:['g4675'],niv:2}
  	,{idG:'g4458',idText:'tspan3939',en:'boredom',fr:'ennui',color:'#ffc6ff',value:0,liens:['g4657'],niv:2}
  	,{idG:'g4463',idText:'tspan3943',en:'disgust',fr:'dégoût',color:'#ff54ff',value:0,liens:['g4458'],niv:1}
  	,{idG:'g4468',idText:'tspan3947',en:'loathing',fr:'aversion',color:'#de00de',value:0,liens:['g4463'],niv:0}
  	,{idG:'g4438',idText:'tspan3951',en:'amazement',fr:'stupéfaction',color:'#0089e0',value:0,liens:['g4433'],niv:0}
  	,{idG:'g4433',idText:'tspan3955',en:'surprise',fr:'surprise',color:'#59bdff',value:0,liens:['g4428'],niv:1}
  	,{idG:'g4428',idText:'tspan3959',en:'distraction',fr:'distraction',color:'#a5dbff',value:0,liens:['g4639'],niv:2}
  	,{idG:'g4448',idText:'tspan3828',en:'sadness',fr:'tristesse',color:'#5151ff',value:0,liens:['g4453'],niv:1}
  	,{idG:'g4443',idText:'tspan3832',en:'grief',fr:'chagrin',color:'#0000c8',value:0,liens:['g4448'],niv:0}
  	,{idG:'g4453',idText:'tspan3007',en:'pensiveness',fr:'songerie',color:'#8c8cff',value:0,liens:['g4648'],niv:2}  	
  	,{idG:'g4563',idText:'tspan4022',en:'disapproval',fr:'désapprobation',color:'url("#linearGradient5706")',value:0,liens:[],niv:4}
  	,{idG:'g4556',idText:'tspan4026',en:'remorse',fr:'remord',color:'url("#linearGradient5714")',value:0,liens:[],niv:4}
  	,{idG:'g4547',idText:'tspan4030',en:'contempt',fr:'mépris',color:'url("#linearGradient5722")',value:0,liens:[],niv:4}
  	,{idG:'g4542',idText:'tspan4034',en:'awe',fr:'crainte',color:'url("#linearGradient5698")',value:0,liens:[],niv:4}
  	,{idG:'g4535',idText:'tspan4038',en:'submission',fr:'soumission',color:'url("#linearGradient5690")',value:0,liens:[],niv:4}
  	,{idG:'g4568',idText:'tspan4042',en:'love',fr:'amour',color:'url("#linearGradient5682")',value:0,liens:[],niv:4}
  	,{idG:'g4506',idText:'tspan4046',en:'optimism',fr:'optimisme',color:'url("#linearGradient5674")',value:0,liens:[],niv:4}
  	,{idG:'g4523',idText:'tspan4050',en:'aggressiveness',fr:'aggressivité',color:'url("#linearGradient5730")',value:0,liens:[],niv:4}
  	,{idG:'g4666',color:'#ffc5c5',value:0,liens:['g4547','g4523'],niv:3}
  	,{idG:'g4675',color:'#ffe1c5',value:0,liens:['g4506','g4523'],niv:3}
  	,{idG:'g4600',color:'#feffdd',value:0,liens:['g4506','g4568'],niv:3}
  	,{idG:'g4613',color:'#c5ffc5',value:0,liens:['g4535','g4568'],niv:3}
  	,{idG:'g4630',color:'#c5e2c5',value:0,liens:['g4535','g4542'],niv:3}
  	,{idG:'g4639',color:'#d5eeff',value:0,liens:['g4563','g4542'],niv:3}
  	,{idG:'g4648',color:'#c5c5ff',value:0,liens:['g4563','g4556'],niv:3}
  	,{idG:'g4657',color:'#c5c5ff',value:0,liens:['g4547','g4556'],niv:3}
  	];	
    var wCurseur = hCurseur = height < width ? height/2 : width/2, idSvg="svg3360",w="715.41962", h="724.66992",rdmCur = d3.randomUniform(curseurData.length-1);
    var onFlux=true, onSelect=false, onChoix=false, noCurseur, curSelect, mousedownID, svgTof, tofEval=[], rChoix = 10, cChoix, l, t;
    
	//création du lien vers le parent
	curseurData.forEach(function(p){
		p.liens.forEach(function(e){
			var ee = curseurData.filter(function(f){
				return f.idG == e;
			})[0];
			ee.parent = p;
		}) 
	});
	
	
	d3.xml("images/Plutchik-wheel.svg",function(node) { 
		//return true;
  		//importe le curseur
  		var importedNode = document.importNode(node.documentElement, true);
  		d3.select("#curseurPalette").node().appendChild(importedNode);	  
  		//redimensionne  		
		var svg = d3.select("#"+idSvg).transition().duration(0)
        	    .attr("width", wCurseur)
        	    .attr("height", hCurseur)
        		.attr("viewBox","0 0 "+w+" "+h);	
		//création du svg pour les cercles émotionnels
	    svgTof = d3.select("#curseurChoix").append("svg").attr("width", width).attr("height", height);		
        //supprime le text
	    d3.selectAll('text').remove();

	    //ajoute la class aux éléments du curseur
		//cache les éléments qui ne sont pas de niveau 0
        curseurData.forEach(function(c){
	        d3.select("#"+c.idG)
	        		.attr('class','gCurseur')
	        		//.style('display',c.niv > 0 ? 'none' : 'inline')
	        		.selectAll('path')
	        			//.style('stroke','none')        		
	        			//.style('fill','none');	        		
	        			.style('fill-opacity',0)
	        			.style('stroke-opacity',1)
					.style('stroke','white');
        })	
        
		//ajoute les événements
		var curseurs = d3.selectAll('.gCurseur')
  			.data(curseurData)
  			.attr("oId",function(d,i){
		  		var e = d3.select(this);
		  		//ATENTION l'ordre de cuseurData n'est pas celui de la selection
		  		//il faut donc filtrer les datas pour les réattribuer
  	  			//console.log(i+" = "+d.idG+" : "+e.attr('id'));
  	  			var dt = curseurData.filter(function(c){
  	  	  			return c.idG == e.attr('id');
  	  			})[0];
  	  			d.o = dt;
  	  			return dt.idG;
  			})
			.on('mousemove',function(e){
	  			if(!onSelect)return;
		        onChoix = true;
			})  			
	  		.on('mouseenter',function(d, i){

	  			if(!onSelect)return;

	  			var p = "NO";
				if(d.o.parent) p = d.o.parent.idG;
				console.log("ENTER = "+curSelect.o.idG+' = '+d.o.idG+' : '+ p);       	    
		  		
                	showCurseurText(d);
                    		  		
				/*Masque les élements inutiles
				if(!d.o.parent || curSelect.idG != d.o.parent.idG){
					curSelect.o.liens.forEach(function(l){
        			        if(l != d.o.idG)	d3.select("#"+l).style('display','none');
            			});
				}	  			
				//affiche les élements enfants et parent
	  			d.o.liens.forEach(function(l){
        		        	d3.select("#"+l)
            	        		.style('display','inline');		  			
	  			});
	  			if(d.o.parent)d3.select("#"+d.o.parent.idG).style('display','inline');		  			
				*/
        	    
  			})
	  		.on('mouseout',function(d, i){		  		
	  			if(!onSelect)return;	  			
	  			if(mousedownID!=-1) {  //Only stop if exists
	  			     clearInterval(mousedownID);
	  			     mousedownID=-1;
	 	  			stockeChoix(d);    	  			  				  			     
	  			}
	    	  	//supprime le texte 
	  			d3.select("#curseurSelect")
		        	    .text("");
	  			curSelect = d;	    
				console.log("OUT = "+curSelect.o.idG+' = '+d.o.idG);       	    
  			})
	  		.on('mousedown',function(d, i){
	  			if(!onChoix)return;
	  			//merci à  https://stackoverflow.com/questions/15505272/javascript-while-mousedown
	  			if(mousedownID==-1){  //Prevent multimple loops!		  			
	  				curSelect = d;
        	  			//ajoute un cercle de la couleur
        	  			cChoix = svgTof.append('circle')
        	  				.attr("class",'choix')
        	  				.attr("cx",0)
        	  				.attr("cy",rChoix)
        	  				.attr("r",rChoix)
        	  				.style('fill-opacity',0.3)       	  				
        	  				.style("fill",d.o.color)
        	  				.attr('transform', 'translate(' + l + ',' + t + ')')
        	  				;
	  			    mousedownID = setInterval(augmenteChoix, 100 /*execute every 100ms*/); 			     	  			    	  				
	  			}
	  		})
	  		.on('mouseup',function(d,i){
	  			if(!onChoix)return;
	  			if(mousedownID!=-1) {  //Only stop if exists
	  			     clearInterval(mousedownID);
	  			     mousedownID=-1;
	 	  			stockeChoix(d);    	  			  			
	  			}
  			});
		
		//lance l'animation de couleur
        setInterval(showCurseurFragment, 1000);
	  	
	});	 	
	
	function moveCurseur(x, y){
		//affiche la palette
		d3.select("#curseur")
    	    .style("overflow","unset");
		//positionne la palette
		d3.select("#curseurPalette")
	        .style("left",  x + "px")
	        .style("top", y + "px");
		//positionne la légende
		d3.select("#curseurSelect")
            .style("width", wCurseur+"px")
            .style("left", x+"px")
            .style("top", function(){
            	return (y-this.clientHeight)+"px";
            });		
		//position du cercle
        l = x;
        t = y;
	}
	
    function showCurseurFragment(){
		if(onSelect)return;
        //cache les fonds des fragments
        d3.selectAll(".gCurseur").selectAll('path').style('fill-opacity',0);
 		//affiche un fragment aléatoire
        curSelect = curseurData[parseInt(rdmCur())];
        d3.select("#"+curSelect.o.idG).selectAll('path').style('fill-opacity',1);
        showCurseurText(curSelect);        	        
    }

    function showCurseurText(d){
		//récupère la position du curseur
		var cP = d3.select("#curseurPalette");
        
  		//affiche le texte du curseur
		d3.select("#curseurSelect")
			.style('color',d.o.color)
        	    .text(d.o.fr);        
    }

    function stockeChoix(d){
		console.log('stockeChoix');	
		if(!cChoix)return;
				
		//calcul la position du choix par rapport à l'image
		//var x = l+(wCurseur/2)-rChoix-tofSelect.x0+tofSelect.data.x
		//	, y = t+(hCurseur/2)-rChoix-tofSelect.y0+tofSelect.data.y;
		var x = l-tofSelect.x0+tofSelect.data.x
		, y = t-tofSelect.y0+tofSelect.data.y;

		//récupère l'évaluation pour la photo omk
		var to = tofEval.filter(function(d){
			return d.id == tofSelect.id;
			});
		//enregistre les références de l'émotion dans la photo
		var ev = {'img':tofSelect.data.img
			,'x':tofSelect.data.x,'y':tofSelect.data.y,'w':tofSelect.data.w,'h':tofSelect.data.h
			,'cx':x,'cy':y,'r':cChoix.attr("r"),'d':d.o};
			
		//enregistre l'évaluation dans la base		
		sauveEmo(tofSelect, ev);

		
	    //stocke l'évaluation	
		if(to.length > 0){
			 to[0].evals.push(ev);
		}else{
			//création de la référence de la photo
			tofEval.push({'idOmkMedia':tofSelect.data.idOmkMedia,'idOmkItem':tofSelect.data.idOmkItem,'label':tofSelect.data.label
				,'original':tofSelect.data.original
				,'h':tofSelect.data.height,'w':tofSelect.data.width
				,'scaleX':d3.scaleLinear().domain([0, tofSelect.data.w])
				,'scaleY':d3.scaleLinear().domain([0, tofSelect.data.h])
				,'evals':[ev]
				});

		}			
		
		
		//augmente le Z-index du curseur pour que les événements soient pris en compte
		//d3.selectAll('.curseur').style('z-index',parseInt(cChoix.style("z-index"))+1);	
		//déselectionne toutes les photos
		d3.selectAll('.node').style('border-style','none');		
		tofSelect = false;
		//relache le curseur
		onSelect = false;	  			
		onChoix = false;
		onFlux = true;
	}

    function augmenteChoix(){
		console.log('augmenteChoix '+cChoix.attr("r"));			
		//cache les fragment saufs celui slectionné
        d3.selectAll(".gCurseur").selectAll('path').style('fill-opacity',0);
        d3.select("#"+curSelect.o.idG).selectAll('path').style('fill-opacity',1);		
		cChoix.attr("r",parseInt(cChoix.attr("r"))+10);
	}
