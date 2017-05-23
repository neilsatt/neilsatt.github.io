var width = 960, 
    height = 480;
    
var projection = d3.geo.equirectangular()
    .scale(150)
    .translate([width / 2, height / 2])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var mapSvg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

var g = mapSvg.append("g");


// Load the main map json - full file -> oc-current-surface.json
d3.json("data/oc-current-surfaceSmall.json", function(error,cycles) {

       function isValid(element) {
           return element.sendLocation.latitude < 9999.0;
       }
       
       var cyclesFiltered = cycles.filter(isValid);
       cyclesFiltered.forEach(addCirclesForArray);
       
       d3.json("data/world-50m.json", function(error, world) {
         
          var countries = topojson.feature(world, world.objects.countries).features,
           neighbors = topojson.neighbors(world.objects.countries.geometries);
           
           g.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path)
			.attr("fill", "white");
			         
            g.selectAll(".country")
               .data(countries)
               .enter()
			   .insert("path", ".graticule")
               .attr("class", "country")
               .attr("d", path)  
               .attr("class","feature")
               .attr("fill", "#004600") // dark green
			   
            g.insert("path", ".graticule")
               .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
               .attr("class", "boundary")
               .attr("d", path)
			   .attr("fill", "#004600") 
                
       });
       
});

   
function addCirclesForArray(element,index,array) {
    var coordinates = projection([element.sendLocation.longitude,element.sendLocation.latitude]);
	g.append("circle")
	  // place circles based on long/lat
	 .attr("cx",coordinates[0])
     .attr("cy",coordinates[1])
     .attr("r",4)
     .attr("fill", "#800000")
	 
	 
	 
	 // mouse events
	g.selectAll("circle")	
	  .on("mouseover", increaseSize)
	  .on("mouseout", decreaseSize)	 
	  .on("click", function(d,i) {
		 //console.log(array[i]); 
		 
		 //$( "#tabs" ).tabs();
		$( "#dialog" ).dialog({ 
		    width: 260,
			resizable:false			
		 });	
		 
		  
		 // Re-format the date
		 //var parseDate = d3.time.format("%b %e, %Y %X %p").parse; // Apr 21, 2014 1:41:21 AM
		 var parseDate = d3.time.format("%b %e, %Y %X %p").parse; // commas and spaces need to be exact
		 var formatDate = d3.time.format("%b %e, %Y"); // Apr 21, 2014
		 
		 //populate tabs	
		 var title = "Body of Water Info";// +array[i].platformNumber;
		 $('#dialog').dialog('option', 'title', title);
		 $('#latitude').html("<b>Latitude:</b> "+d3.round(array[i].sendLocation.latitude,2));
		 $('#longitude').html("<b>Longitude:</b> "+d3.round(array[i].sendLocation.longitude,2));
		 $('#location').html("<b>Location:</b> " +array[i].bodyOfWater);		
		 //$('#date').html("<b>Date:</b> "+formatDate(parseDate(array[i].profileSendDate)));
		   /*
					$('#measurements').html("<br /><b><font size='2px'>Recent Measurements:</font></b>");
					$('#salinity').html("&nbsp;&nbsp;<b>Salinity:</b> "+d3.round(array[i].profileReadings[0].psal, 2));
					$('#temp').html("&nbsp;&nbsp;<b>Temperature:</b> "+d3.round(array[i].profileReadings[0].temp,2));
					if(array[i].profileReadings[0].ph === -1.0)
					{
					  //console.log("pH1: "+array[i].profileReadings[0].ph);
					  $('#ph').html("&nbsp;&nbsp;<b>pH:</b> Not Available");
					}
					else {
						$('#ph').html("&nbsp;&nbsp;<b>pH:</b> "+array[i].profileReadings[0].ph);
						//console.log("pH2: "+array[i].profileReadings[0].ph);
					}
			*/
	  })	
}

// mouse events 
function increaseSize(){
    d3.select(this)
      .transition()
        .duration(400)
        .attr("r", 7);
};

function decreaseSize(){
    d3.select(this)
      .transition()
        .duration(400)
        .attr("r", 3);
};
   
  	

		


