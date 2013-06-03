function settosyd(){
	map.panTo(new L.LatLng(-33.8704,141.25977))
}
function buildmap(){
	var map = L.map('map').setView([37.02323,-98.61328], 3);
	L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade. Font Awesome by Dave Gandy',
	key: 'BC9A493B41014CAABB98F0471D759707',
	detectRetina: true
	}).addTo(map);
	
	//<!-- markers icon -->
	var markicon = L.Icon.extend({
	options:{
	iconSize:		[30, 30],
	shadowSize:		[50, 64],
	shadowAnchor:	[4, 62],
	popupAnchor:	[0, -10]										
	}
	})

	var future = new markicon({iconUrl: 'img/news/future.jpg'})
	var	nasa = new markicon({iconUrl: 'img/news/nasa.jpg'})
	var mars = new markicon({iconUrl: 'img/news/mars.png'})
	var unemployment = new markicon({iconUrl: 'img/news/unemployment.png'})

	//<!-- set link -->
	
	var futurelink = '<a href="news-future.html" class="speciallink">High-tech city planning 2025</a><br/><img class="img-map pagination-centered"src="img/news/future.jpg">'
	var nasalink = '<a href="news-nasa.html" class="speciallink">Erupts on the Sun</a><br/><img class="img-map pagination-centered"src="img/news/nasa.jpg">'
	var marslink = '<a href="news-mars.html" class="speciallink">Ready for the trip to Mars</a><br/><img class="img-map pagination-centered"src="img/news/mars.png">'
	var unemploymentlink = '<a href="news-unemployment.html" class="speciallink">Sydney unemployment rate 2024</a><br/><img class="img-map pagination-centered"src="img/news/unemployment.png">'

	//<!-- add markers-->

	L.marker([-33.87042, 151.25977],{icon: future}).addTo(map).bindPopup(futurelink)
	L.marker([-36.03133, 146.60156],{icon: unemployment}).addTo(map).bindPopup(unemploymentlink)
	L.marker([38.88304, -77.01622],{icon: nasa}).addTo(map).bindPopup(nasalink)
	L.marker([39.90974, -121.64063],{icon: mars}).addTo(map).bindPopup(marslink)
}

function addsports(){
	var map = L.map('map').setView([37.02323,-98.61328], 3);
	L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade. Font Awesome by Dave Gandy',
	key: 'BC9A493B41014CAABB98F0471D759707',
	detectRetina: true
	}).addTo(map);
	
	//<!-- markers icon -->
	var markicon = L.Icon.extend({
	options:{
	iconSize:		[50, 50],
	shadowSize:		[50, 64],
	shadowAnchor:	[4, 62],
	popupAnchor:	[0, -10]										
	}
	})
	var mjpredie = new markicon({iconUrl:'img/news/MJdunk.png'});
	var racing = new markicon({iconUrl:'img/news/racing.jpg'});
	var boxing = new markicon({iconUrl:'img/news/boxing.jpg'});
	//<!-- set link -->
	var mjpredielink = '<a href="news-mjpredie.html" class="speciallink">Micheal Jordan is about to die</a><br/><img class="img-map pagination-centered"src="img/news/mjdunk.png">';
	var racinglink = '<a href="news-racing.html" class="speciallink">New racing bike</a><br/><img class="img-map pagination-centered"src="img/news/racing.jpg">';
	var boxinglink = '<a href="news-boxing.html" class="speciallink">Epic punch is epic</a><br/><img class="img-map pagination-centered"src="img/news/boxing.jpg">';
	//<!-- add markers-->
	L.marker([41.83683,-87.71484],{icon: mjpredie}).addTo(map).bindPopup(mjpredielink);
	L.marker([38.88304, -77.01622],{icon: racing}).addTo(map).bindPopup(racinglink);
	L.marker([39.90974, -121.64063],{icon: boxing}).addTo(map).bindPopup(boxinglink);
}