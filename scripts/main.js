'use strict';

var ajaxServer = "http://"+document.domain+"/jdc/public/flickemo", uti;
  
function getUtiInfos(providerData){
	var p = {'login':providerData.displayName,'flux':providerData.providerId};
	$.get(ajaxServer+"/uti", p,
	 function(data){
		if(data.error){
			console.log("ERREUR : "+data.error.message);
		}else{
			uti = data['uti'];
			updateListeObjet(data['objets']);
		}
	 }, "json")
	  .fail(function(r) {
		  console.log("Une erreur s'est produite :"+r);
	  });				
}

function setObjetUti(id,objet){
	var p = {'idUti':uti.idUti,'id':id,'objet':objet};
	$.get(ajaxServer+"/setobjuti", p,
	 function(data){
		if(data.error){
			console.log("ERREUR : "+data.error.message);
		}else{
			d3.select("#nbddSourcesListe").append("a")
				.attr('id','nbddObj'+data.doc_id)
				.attr('class','dropdown-item')
				.text(data.titre);
			getSource(data);
		}
	 }, "json")
	  .fail(function(r) {
		  console.log("Une erreur s'est produite :"+r);
	  });				
}

function updateListeObjet(objets){
	//var dd = d3.select("#nbddSourcesListe").selectAll("div").data(objets);
	var dd = d3.select("#nbddSourcesListe").selectAll(".ajout dropdown-item").data(objets);
	
	//dd.exit().remove();
    dd.enter().append("a")
        .attr('id',function(d, i){
        	return 'nbddObj'+d.doc_id
        	})
		.attr('class','ajout dropdown-item ')
		.style('cursor','pointer')
		.text(function(d, i){
        	return d.titre
    	})
    	.on("click",getSource)
    if(objets.length)getSource(objets[0]);
}

function getSource(d){
	$('#modalWait').modal();
	var p = {'id':d.doc_id};
	$.get(ajaxServer+"/getsource", p,
	 function(data){
		if(data.error){
			console.log("ERREUR : "+data.error.message);
		}else{
			d3.select('#titreListe').text(d.titre);
			d3.select('#numTof').text("1");
			d3.select('#nbTof').text(data.photos.total);
			dataPhoto = data.photos.photo;
			ajoutPhotosGallerie();
		}
  		$('#modalWait').modal('hide');
	 }, "json")
	  .fail(function(r) {
	  		$('#modalWait').modal('hide');
	  		console.log("Une erreur s'est produite :"+r);
	  });				
}

function getInfoListe(method, ps){
  	if(method=='flickr.groups.getInfo'){
	      var urlFlickr = "https://api.flickr.com/services/rest/?api_key="+apiKey
		  +"&method="+method+ps
		  +"&format=json&jsoncallback=?"; 
	      $.getJSON(urlFlickr,
		  	function(data){	
				d3.select('#titreListe').text(data.photoset.name);
				d3.select('#auteurListe').text(data.photoset.description);	    	  		
    	    	getPhotos('flickr.groups.pools.getPhotos&group_id=',ps);
	      });
  	}else{
  		getPhotos('flickr.groups.pools.getPhotos&group_id=',ps);
  	}
}

  
function getPhotos(method, ps){
  //récupération des photos du groupe flickr
  //merci beaucoup à https://etienner.fr/flickr-json
  var urlFlickr = "https://api.flickr.com/services/rest/?api_key="+apiKey
		  +"&method="+method+ps
		  +"&extras=original_format,date_taken,owner_name,geo,tags,machine_tags,url_sq,url_t,url_z,url_m,url_o,o_dims"
		  +"&format=json&jsoncallback=?"; 
  $.getJSON(urlFlickr,
      function(data){
	  	if(method=='flickr.groups.pools.getPhotos&group_id='){
	      	dataPhoto = data.photos.photo;
	  	}
	  	if(method=='flickr.photosets.getPhotos&photoset_id='){
	      	dataPhoto = data.photoset.photo;
	      	d3.select('#titreListe').text(data.photoset.title);
	      	d3.select('#auteurListe').text(data.photoset.ownername);	    	  		
	  	}
      	
      	/*
		var item = dataPhoto[0];
		var alea = d3.randomUniform(1, (dataPhoto.photoset.photo.length-1));
		item = dataPhoto.photoset.photo[parseInt(alea())];
        var src = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
        src = item.url_m;
		var pict = d3.select('#imgEval').attr('src',src);
		*/
		ajoutPhotosGallerie();
      });
}


function ajoutPhotosGallerie(){

	// Remove old elements as needed.
	d3.select('#car-ind').selectAll('li').remove();
	d3.select('#car-inn').selectAll('div').remove();
	evalPhoto = [];

	var alea = d3.randomUniform(1, (dataPhoto.length-1));
	
	/*calcul la taille aléatoire des photos à interpréter
	for (var i = 0; i < nbEval; i++) {
		var item = dataPhoto[parseInt(alea())];
		evalPhoto[i]=clone(item);
        //calcul la taille de la photo
        evalPhoto[i].w = item.width_o*scale;
        evalPhoto[i].h = item.height_o*scale;
        evalPhoto[i].x = parseInt(d3.randomUniform(0,evalPhoto[i].w-width)());
        evalPhoto[i].y = parseInt(d3.randomUniform(0, evalPhoto[i].h-height)());
        evalPhoto[i].img=item.url_o;
	}
	*/
	
	//mélange les photos 
	evalPhoto = d3.shuffle(dataPhoto);
	
	/*Ajoute les indicateurs à la gallerie
	var li = d3.select('#car-ind').selectAll('li')
		.data(dataPhoto).enter().append('li')
		.attr('data-target',"#carouselEvals")	
		.attr('data-slide-to',function(d,i){return i;})
		.attr('class',function(d,i){
			if(i==0)return 'active';
			});	
	*/
	
	//Ajoute la photo à la gallerie
	var items = d3.select('#car-inn').selectAll('div')
		.data(evalPhoto).enter().append('div')
		.attr('class',function(d,i){
			var c = 'carousel-item';
			if(i==0) c+= ' active';
			return c;
			});
	/*on ajoute un div pour redimensionner l'image
	var div = 	items.append('div')
		.attr('class','d-md-block')
		.style('overflow','hidden');
	div.append('img')
		.attr('id',function(d){
			return 'carImg_'+d.id;
		})
		.style('position','relative')
		//.style('max-height',height+"px")
		.style('width',function(d){
			return d.w+'px';
		})
		.style('height',function(d){
			return d.h+'px';
		})
		.style('margin-left',function(d){
			return -d.x+'px';
		})			
		.style('margin-top',function(d){
			return -d.y+'px';
		})			
		.attr('src',function(d){
			return d.url_m;
		});
	*/
	items.append('img')
	.attr('id',function(d){
		return 'img'+d.id;
	})
	.attr('class','d-block img-fluid')
	.style('max-height',height+"px")
	.attr('src',function(d){
		return d.url_z;
	});			
	
	//ajoute le descriptif
	var block = items.append('div').attr('class','carousel-caption d-none d-md-block');
	block.append('h3').text(function(d){
		return d.title;
	});
	block.append('h4').text(function(d){
		return d.ownername;
	});
	/*
	block.append('p').append('a')
	.attr('href',function(d){
		return d.url_m;
	})
	.attr('target','_blank').text('original');
	*/		
	initCarousel();
}	

function initCarousel(){

	//
	if(svgChoix){
		svgChoix.selectAll('rect').remove();
	}else{
		svgChoix = d3.select('#carouselEvals').append('svg')			
    		.attr('id','svgChoix')
    		.attr('class','choixCarousel')
    		.append('g').attr('id','gChoix');
	}
	//
	//ajoute les événements
	$('#carouselEvals').on('slid.bs.carousel', function (e) {
		//console.log(e);
		//showTofEvals(e);
		var t = dataPhoto[e.to];
		d3.select('#numTof').text(e.from+1);       				  
	})

	$('.carousel').carousel();
	$('.carousel').carousel('cycle');
	//$('.carousel').carousel('pause');
	$('.carousel').carousel(dataPhoto.length-1);		

}	  

function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
