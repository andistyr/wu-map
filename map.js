var change_map, clear_home, close_infowin, copyToClipboard, calculateDaysAgo, deed_tags, distance, filter, find_nearby_locations, hide_add_form, hide_search, infowin, init, marker, projection, search, set_home, share_coords, share_deed, show_add_form, show_coords_info, show_coords_on_map, show_deed_info, show_deed_on_map, showToast, toggle_markers, toggle_serverinfo_size, toggle_sidebar, update_markers, update_stats, vote_reminder_close, vote_reminder_open,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] == item) return i; } return -1; };

copyToClipboard = async function(buttonElement) { // Mark as async
  const parentDiv = buttonElement.parentNode;
  const inputElement = parentDiv.querySelector('.glass-input'); // Use .glass-input now

  if (inputElement) {
    const textToCopy = inputElement.value;

    try {
      await navigator.clipboard.writeText(textToCopy); // Use Clipboard API
      const originalIcon = buttonElement.innerHTML;
      const originalTitle = buttonElement.title;
      buttonElement.innerHTML = '<i class="bi bi-check-lg"></i>';
      buttonElement.title = 'Copied!';

      showToast("Copied to clipboard!"); // Call the new toast function

      setTimeout(() => {
        buttonElement.innerHTML = originalIcon;
        buttonElement.title = originalTitle;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Optional: show an error toast
      showToast("Failed to copy!", true);
    }
  }
};

showToast = function(message, isError = false) { // Added isError parameter
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  if (isError) {
    toast.classList.add('toast-error');
    toast.innerHTML = `<i class="bi bi-x-circle-fill"></i> ${message}`;
  } else {
    toast.classList.add('toast-success');
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${message}`; // Added checkmark icon
  }
  document.body.appendChild(toast);

  // Trigger reflow to ensure CSS transition works
  void toast.offsetWidth;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000); // Hide after 3 seconds
};

calculateDaysAgo = function(dateStringOrTimestamp) {
  const now = new Date();
  const pastDate = new Date(dateStringOrTimestamp);
  const diffTime = Math.abs(now - pastDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(pastDate.getTime())) {
    return 'Unknown';
  } else if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else {
    return `${diffDays} days ago`;
  }
};

    var TILE_URL = 'https://web.game.sklotopolis.com/unlimited/2/tiles-flat/tile_{z}_{x}_{y}.png';

    var map;
    var mapEl;
    var layer;
    var layerID = 'tiled';

marker = '';

infowin = '';

deed_tags = {};

projection = {
  size: 4096,
  mid: 2048,
  coord_multiplier: 1,
  max_lat: 85,
  max_long: 180,
  fromLatLngToPoint: function(latLng) {
   
	if(latLng.lng()!=0)
	{
		var x = (latLng.lng() + 180) / 360 * projection.size;
	}
	else
	{	
		var x = projection.mid;
	}
	
	if(latLng.lat() != 0)
	{
		var y = ((1 - Math.log(Math.tan(latLng.lat() * Math.PI / 180) + 1 / Math.cos(latLng.lat() * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, 0)) * projection.size;
    }
	else
	{
		var y = projection.mid;
	}
	return new google.maps.Point(x, y);
  },
  fromPointToLatLng: function(point, noWrap) {
    var lat, long;
    if (point.x > projection.size) {
      point.x = projection.size;
    }
    if (point.y > projection.size) {
      point.y = projection.size;
    }
    if (point.x < 0) {
      point.x = 0;
    }
    if (point.y < 0) {
      point.y = 0;
    }
	
	var lng = point.x / projection.size * 360 - 180;
    var n = Math.PI - 2 * Math.PI * point.y / projection.size;
    var lat = (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
    return new google.maps.LatLng(lat, lng);
  },
  toCoords: function(point) {
    return {
      x: point.x * projection.coord_multiplier,
      y: point.y * projection.coord_multiplier
    };
  },
  fromCoords: function(point) {
    return {
      x: point.x / projection.coord_multiplier,
      y: point.y / projection.coord_multiplier
    };
  }
};

init = function() {
  var Sklotopolis, Tiled, coords, coordsDiv, d, hash, home_deed, i, init_moved, j, k, last_reminder, len, len1, len2, len3, len4, m, p, q, r, serverinfo_size, timestr;
  init_moved = false;

  var swBound = projection.fromPointToLatLng(projection.fromCoords({ x: 0, y: 4096 }));
  var neBound = projection.fromPointToLatLng(projection.fromCoords({ x: 4096, y: 0 }));
  var new_north_lat = 89.65; // User specified northern limit

  map = new google.maps.Map(document.getElementById('map'), {
	center: new google.maps.LatLng(0.0, 0.0),
    zoom: 3,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    restriction: {
      latLngBounds: new google.maps.LatLngBounds(
        swBound, // SW Corner (minX, maxY)
        new google.maps.LatLng(new_north_lat, neBound.lng())  // NE Corner (maxX, minY)
      ),
      strictBounds: true,
    },
    maxBounds: new google.maps.LatLngBounds(
        swBound, // SW Corner (minX, maxY)
        new google.maps.LatLng(new_north_lat, neBound.lng())  // NE Corner (maxX, minY)
    )
  });
  Sklotopolis = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      if (coord.x == 0 && coord.y == 0) {
        return 'https://web.game.sklotopolis.com/unlimited/2/mapdump-flat.png';
      }
    },
    tileSize: new google.maps.Size(4096, 4096),
    maxZoom: 2,
    minZoom: 2,
    name: 'Official map dump'
  });
  Sklotopolis.projection = projection;
  map.mapTypes.set('sklotopolis', Sklotopolis);
  coordsDiv = document.getElementById('coords');
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(coordsDiv);
  map.addListener('mousemove', function(e) {
    var coords;
    coords = projection.toCoords(projection.fromLatLngToPoint(e.latLng));
    return document.getElementById('coordsc').textContent = 'Mouse cursor at X' + Math.floor(coords.x) + ', Y' + Math.floor(coords.y);
  });
  map.addListener('click', function(e) {
    if (typeof console !== "undefined" && console !== null) {
      console.log('Lat: ' + e.latLng.lat() + ', Long: ' + e.latLng.lng());
    }
    return show_coords_info(projection.toCoords(projection.fromLatLngToPoint(e.latLng)));
  });
  
  
		// Create a tile layer, configured to fetch tiles from TILE_URL.
      layer = new google.maps.ImageMapType({
        name: layerID,
        getTileUrl: function(coord, zoom) {
		  zoom = (function() {
        switch (zoom) {
          case 2:
            return 1024;
          case 3:
            return 2048;
          case 4:
            return 4096;
          default:
            return 8192;
        }
      })();
	  
          var url = TILE_URL
            .replace('{x}', coord.x)
            .replace('{y}', coord.y)
            .replace('{z}', zoom);
          return url;
        },
        tileSize: new google.maps.Size(256, 256),
        minZoom: 2,
        maxZoom: 5
      });
      
      // Apply the new tile layer to the map.
      map.mapTypes.set(layerID, layer);
      map.setMapTypeId(layerID);

  deeds.sort(function(a, b) {
    var a_name, b_name;
    a_name = a.name.toLowerCase();
    b_name = b.name.toLowerCase();
    if (a_name.substr(0, 3) == 'the') {
      a_name = a_name.substr(4);
    }
    if (b_name.substr(0, 3) == 'the') {
      b_name = b_name.substr(4);
    }
    switch (false) {
      case !(a.top && !b.top):
        return -1;
      case !(b.top && !a.top):
        return 1;
      case !(a_name < b_name):
        return -1;
      case !(a_name > b_name):
        return 1;
      default:
        return 0;
    }
  });
  
  var deedToShow = null;
  for (j = k = 0, len = deeds.length; k < len; j = ++k) {
    i = deeds[j];
    deed_tags[i.tag] = j;
    i.marker = new google.maps.Marker({
      position: projection.fromPointToLatLng(projection.fromCoords({
        x: i.x,
        y: i.y
      })),
      map: map,
      icon: {
        url: 'images/deed_' + (i.type || 'solo') + '.png',
        size: new google.maps.Size(32, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 37)
      }
    });
	
	var tmpPosNorthEast = projection.fromPointToLatLng(projection.fromCoords({
        x: i.x - (-i.tilesEast), //deedtiles east
        y: i.y-i.tilesNorth //deedtiles north
      }));
	  
	var tmpPosSouthWest = projection.fromPointToLatLng(projection.fromCoords({
        x: i.x-i.tilesWest, //deedtiles west
        y: i.y - (-i.tilesSouth) //deedtiles south
      }));
	  
	var tmpPosNorthEastPerimeter = projection.fromPointToLatLng(projection.fromCoords({
        x: i.x - (-i.tilesEast) - (-i.tilesPerimeter), //deedtiles east
        y: i.y-i.tilesNorth-i.tilesPerimeter //deedtiles north
      }));
	  
	var tmpPosSouthWestPerimeter = projection.fromPointToLatLng(projection.fromCoords({
        x: i.x-i.tilesWest-i.tilesPerimeter, //deedtiles west
        y: i.y - (-i.tilesSouth)- (-i.tilesPerimeter) //deedtiles south
      }));
	
	if(i.isSpawnPoint)
	{
		var color = '#FFD700';
		var strokeWeight = 5;
	}
	else {
		var color = '#00FF00';
		var strokeWeight = 3;
	}
	
	i.border = new google.maps.Rectangle({
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: strokeWeight,
          fillColor: '#FFFFFF',
          fillOpacity: 0.2,
          map: map,
          bounds: {
            north: tmpPosNorthEast.lat(),
            south: tmpPosSouthWest.lat(),
            east: tmpPosNorthEast.lng(),
            west: tmpPosSouthWest.lng()
          }
        });
		
	i.borderPerimeter = new google.maps.Rectangle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.4,
          strokeWeight: 2,
		  fillColor: '#FFFFFF',
          fillOpacity: 0,
          map: map,
          bounds: {
            north: tmpPosNorthEastPerimeter.lat(),
            south: tmpPosSouthWestPerimeter.lat(),
            east: tmpPosNorthEastPerimeter.lng(),
            west: tmpPosSouthWestPerimeter.lng()
          }
        });
		
    i.marker.addListener('click', show_deed_info.bind(null, i.tag));
    i.borderPerimeter.addListener('click', show_deed_info.bind(null, i.tag));
    i.border.addListener('click', show_deed_info.bind(null, i.tag));
	
    if (window.location.hash.substr(1) == i.tag) {
	  deedToShow = i;
      init_moved = true;
    }
  }
  
  for (highwayCount = 0, lenHighways = highways.length; highwayCount < lenHighways; highwayCount++) {
	  i = highways[highwayCount];
	  
	  var startCoordinates = projection.fromPointToLatLng(projection.fromCoords({
        x: i.startX, 
        y: i.startY
      }));
	  var endCoordinates = projection.fromPointToLatLng(projection.fromCoords({
        x: i.endX,
        y: i.endY 
      }));
	  
	 var highwayCoordinates = [
          {lat: startCoordinates.lat(), lng: startCoordinates.lng()},
          {lat: endCoordinates.lat(), lng: endCoordinates.lng()}
        ];
		
	if(i.type != null)
	{	
		if(i.type == 1)
		{
			//cave
			var color = '#EE0000';
		}
		else if(i.type == 0)
		{
			//Bridge
			var color = '#222222';
		}
		else if(i.type == 3)
		{
			//Canal
			var color = '#3888ff';
		}
		else {
			//normal road
			var color = '#CCCCCC';
		}
	}
	else {
		//unknown type = normal road
		var color = '#CCCCCC';
	}
	
	var highwayPath = new google.maps.Polyline({
	  path: highwayCoordinates,
	  geodesic: false,
	  strokeColor: color,
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});

	highwayPath.setMap(map);
  }
  
  for (m = 0, len1 = guard_towers.length; m < len1; m++) {
    i = guard_towers[m];
    i.marker = new google.maps.Marker({
      position: projection.fromPointToLatLng(projection.fromCoords({
        x: i.x,
        y: i.y
      })),
      map: map,
      icon: {
        url: 'images/guard_tower.png',
        size: new google.maps.Size(32, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 37)
      }
    });
    i.marker.addListener('click', show_coords_info.bind(null, {
      x: i.x,
      y: i.y
    }));
  }
  toggle_markers('guard_towers');
  for (p = 0, len2 = resources.length; p < len2; p++) {
    i = resources[p];
    i.marker = new google.maps.Marker({
      position: projection.fromPointToLatLng(projection.fromCoords({
        x: i.x,
        y: i.y
      })),
      map: map,
      icon: {
        url: i.type == 'mine' ? 'images/mine.png' : 'images/resource.png',
        size: new google.maps.Size(32, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 37)
      }
    });
    i.marker.addListener('click', show_coords_info.bind(null, {
      x: i.x,
      y: i.y
    }));
  }
  for (q = 0, len3 = poi.length; q < len3; q++) {
    i = poi[q];
    i.marker = new google.maps.Marker({
      position: projection.fromPointToLatLng(projection.fromCoords({
        x: i.x,
        y: i.y
      })),
      map: map,
      icon: {
        url: 'images/' + ((i.type == null || i.type == 'star') ? 'poi' : 'poi_' + i.type) + '.png',
        size: new google.maps.Size(32, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 37)
      }
    });
    i.marker.addListener('click', show_coords_info.bind(null, {
      x: i.x,
      y: i.y
    }));
  }
  for (r = 0, len4 = trees.length; r < len4; r++) {
    i = trees[r];
    i.marker = new google.maps.Marker({
      position: projection.fromPointToLatLng(projection.fromCoords({
        x: i.x,
        y: i.y
      })),
      map: map,
      icon: {
        url: 'images/tree.png',
        size: new google.maps.Size(32, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 37)
      }
    });
    i.marker.addListener('click', show_coords_info.bind(null, {
      x: i.x,
      y: i.y
    }));
  }
  
  if(deedToShow != null) {
	show_deed_on_map(deedToShow.tag);
  }
  
  hash = window.location.hash.substr(1);
  if (hash.indexOf('_') !== -1) {
    hash = hash.split('_');
    if (hash.length == 2) {
      coords = {
        x: parseInt(hash[0]),
        y: parseInt(hash[1])
      };
      map.panTo(projection.fromPointToLatLng(projection.fromCoords(coords)));
      show_coords_info(coords);
      init_moved = true;
    }
  } else if (!init_moved) {
    home_deed = localStorage.getItem('wu_map_home_deed_14816');
    if (home_deed != null) {
      if (home_deed !== '') {
        show_deed_on_map(home_deed, false);
      }
    }
  }
  map.addListener('zoom_changed', close_infowin);
  if (window.innerWidth > 1024) {
    document.body.className = 'sidebar';
  } else {
    document.body.className = 'no_sidebar';
  }
  statsRequest.then(update_stats, function(err, xhr) {
    if (typeof console !== "undefined" && console !== null) {
      return console.log(err);
    }
  });
  last_reminder = localStorage.getItem('wu_map_vote_reminder');
  if (last_reminder != null) {
    d = new Date();
    timestr = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
    if (last_reminder !== timestr) {
      vote_reminder_open();
    }
  } else {
    vote_reminder_open();
  }
  serverinfo_size = localStorage.getItem('wu_map_serverinfo_size');
  if (serverinfo_size != null) {
    document.getElementById('serverinfo').className = serverinfo_size;
    localStorage.setItem('wu_map_serverinfo_size', serverinfo_size);
  }
  return setInterval(function() {
    if (typeof console !== "undefined" && console !== null) {
      console.log('Updating stats.json');
    }
    return pegasus('https://web.game.sklotopolis.com/unlimited/1/stats.json').then(update_stats, function(err, xhr) {
      if (typeof console !== "undefined" && console !== null) {
        return console.log(err);
      }
    });
  }, 61000);
};

vote_reminder_open = function() {
  return document.getElementById('vote_reminder').style.display = 'block';
};

vote_reminder_close = function() {
  var d, timestr;
  document.getElementById('vote_reminder').style.display = 'none';
  d = new Date();
  timestr = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
  return localStorage.setItem('wu_map_vote_reminder', timestr);
};

update_stats = function(data, xhr) {
  var check, harvest, i, k, len, len1, m, plants, ref, starfallNames;
  document.getElementById('serverinfo_status').className = data.online ? 'online' : 'offline';
  if (document.getElementById('serverinfo_players').textContent != null) {
    document.getElementById('serverinfo_players').textContent = data.players;
  }
  document.getElementById('serverinfo').style.display = 'block';
  harvest = [];
  starfallNames = ['Diamond', 'Saw', 'Digging', 'Leaf', 'Bear\'s', 'Snake', 'White Shark', 'Fire', 'Raven', 'Dancer', 'Omen', 'Silence'];
  check = function(starfall, week, plant, type) {
    var nextStarfall, ref, starfallNum;
    if (week == 1) {
      if (data.starfall !== starfall) {
        return;
      }
    } else {
      starfallNum = starfallNames.indexOf(starfall);
      nextStarfall = starfallNames[starfallNum + 1 == starfallNames.length ? 0 : starfallNum + 1];
      if ((ref = data.starfall) !== starfall && ref !== nextStarfall) {
        return;
      }
      if (data.starfall == starfall && data.week < week) {
        return;
      }
      if (data.starfall == nextStarfall && data.week >= week) {
        return;
      }
    }
    return harvest.push({
      plant: plant,
      type: ' ' + type
    });
  };
  check('Leaf', 1, 'Olive', 'trees');
  check('Leaf', 2, 'Oleander', 'bushes');
  check('Bear\'s', 1, 'Camellia', 'bushes');
  check('Bear\'s', 2, 'Lavender', 'bushes');
  check('Bear\'s', 3, 'Rose', 'bushes');
  check('Bear\'s', 4, 'Maple', 'trees');
  check('Fire', 1, 'Olive', 'trees');
  check('Raven', 1, 'Grape', 'bushes');
  check('Raven', 3, 'Apple', 'trees');
  check('Dancers', 1, 'Walnut', 'trees');
  check('Omen', 1, 'Lemon', 'trees');
  check('Silence', 3, 'Chestnut', 'trees');
  check('White Shark', 1, 'Cherry', 'trees');
  for (k = 0, len = trees.length; k < len; k++) {
    i = trees[k];
    i.harvest = false;
    i.marker.setIcon('images/tree.png');
  }
  if (harvest.length > 0) {
    plants = (function() {
      var len1, m, results1;
      results1 = [];
      for (m = 0, len1 = harvest.length; m < len1; m++) {
        i = harvest[m];
        results1.push(i.plant.toLowerCase());
      }
      return results1;
    })();
    for (m = 0, len1 = trees.length; m < len1; m++) {
      i = trees[m];
      if (ref = i.type.toLowerCase(), indexOf.call(plants, ref) >= 0) {
        i.harvest = true;
        i.marker.setIcon('images/tree_harvest.png');
      }
    }
    Transparency.render(document.getElementById('serverinfo_harvest_items'), harvest);
    return document.getElementById('serverinfo_harvest').style.display = 'block';
  }
};

close_infowin = function() {
  if (infowin !== '') {
    infowin.close();
    return infowin = '';
  }
};

toggle_sidebar = function() {
  if (document.body.className == 'no_sidebar') {
    document.body.className = 'sidebar';
  } else {
    document.body.className = 'no_sidebar';
  }
  return setTimeout(function() {
    return google.maps.event.trigger(map, 'resize');
  }, 100);
};

toggle_serverinfo_size = function() {
  var el, size;
  el = document.getElementById('serverinfo');
  size = el.className.includes('small') ? '' : 'small'; // Check for 'small' class
  el.className = "glass-effect " + size; // Add glass-effect class
  return localStorage.setItem('wu_map_serverinfo_size', size);
};

set_home = function(tag, img) {
  localStorage.setItem('wu_map_home_deed_14816', tag);
  return show_deed_info(tag);
};

clear_home = function(tag) {
  localStorage.setItem('wu_map_home_deed_14816', '');
  return show_deed_info(tag);
};

show_deed_on_map = function(tag, showInfo) {
  var deed;
  if (showInfo == null) {
    showInfo = true;
  }
  deed = deeds[deed_tags[tag]];
  map.panTo(projection.fromPointToLatLng(projection.fromCoords({
    x: deed.x,
    y: deed.y
  })));
  if (showInfo) {
    show_deed_info(tag);
  }
  return false;
};

show_deed_info = function(tag) {
  var deed, home_img, html, latLng, nearby, props;
  deed = deeds[deed_tags[tag]];
  if (!filter.deeds) {
    filter.deeds = true;
    update_markers('deeds');
  }
  if (!filter['deeds_' + deed.type]) {
    filter['deeds_' + deed.type] = true;
    update_markers('deeds_' + deed.type);
  }
  if (typeof console !== "undefined" && console !== null) {
    latLng = projection.fromPointToLatLng(projection.fromCoords({
      x: deed.x,
      y: deed.y
    }));
    console.log('Lat: ' + latLng.lat() + ', Long: ' + latLng.lng());
  }
  if (infowin !== '') {
    infowin.close();
    infowin = '';
  }
  props = [];

  // Home deed button
  home_img = `<button class="modern-button small" onclick="set_home('${deed.tag}', this)" title="Set as home"><i class="bi bi-house-door-fill"></i> Set Home</button>`;
  if (localStorage.getItem('wu_map_home_deed_14816') == deed.tag) {
    home_img = `<button class="modern-button small" onclick="clear_home('${deed.tag}')" title="Clear home location"><i class="bi bi-house-fill"></i> Clear Home</button>`;
  }

  html = `<div class="info-window-content">
            <button class="custom-close-button" onclick="close_infowin(); return false;"><i class="bi bi-x-lg"></i></button>
            <h2 style="margin-bottom: 5px;">${deed.name}</h2>
            <div style="margin-bottom: 10px;">${home_img}</div>`;

  if (deed.type != null) {
    let deedType = '';
    switch (deed.type) {
      case 'solo':
        deedType = 'Solo player';
        break;
      case 'small':
        deedType = 'Small settlement';
        break;
      case 'large':
        deedType = 'Large town';
        break;
    }
    html += `<p style="font-style:italic;">${deedType}${deed.features && indexOf.call(deed.features, 'recruiting') >= 0 ? ' (recruiting)' : ''}</p>`;
  } else if (deed.features && indexOf.call(deed.features, 'recruiting') >= 0) {
    html += '<p style="font-style:italic;">Recruiting</p>';
  }

  if (deed.features != null) {
    html += '<p>';
    if (indexOf.call(deed.features, 'market') >= 0) {
      html += '<i class="bi bi-shop" title="Marketplace on deed"></i> ';
    }
    if (indexOf.call(deed.features, 'trader') >= 0) {
      html += '<i class="bi bi-person-badge" title="Trader on deed"></i> ';
    }
    if (indexOf.call(deed.features, 'merchant') >= 0) {
      html += '<i class="bi bi-cash-coin" title="Personal Merchant on deed"></i> ';
    }
    if (indexOf.call(deed.features, 'harbour') >= 0) {
      html += '<i class="bi bi-flag" title="Harbour area on deed"></i> ';
    }
    if (indexOf.call(deed.features, 'inn') >= 0) {
      html += '<i class="bi bi-cup-hot" title="Inn on deed"></i> ';
    }
    if (indexOf.call(deed.features, 'mailbox') >= 0) {
      html += '<i class="bi bi-envelope" title="Mailbox on deed"></i> ';
    }
    html += '</p>';
  }
  
  if (deed.mayor != null) {
    html += `<p><i class="bi bi-person-circle"></i> <strong>Mayor:&nbsp;</strong> ${deed.mayor}${deed.supporter ? ' <i class="bi bi-star-fill" title="Supporter"></i>' : ''}</p>`;
  }
  html += `<p><i class="bi bi-geo-alt-fill"></i> <strong>Coordinates:&nbsp;</strong> X${deed.x}, Y${deed.y}</p>`;

  if(deed.allianceName != null && deed.allianceName != "") {
    html += `<p><i class="bi bi-people-fill"></i> <strong>Alliance:&nbsp;</strong> ${deed.allianceName}</p>`;
  }
  
  html += `<p><i class="bi bi-shield-fill"></i> <strong>Guards:&nbsp;</strong> ${deed.guards}</p>`;
  html += `<p><i class="bi bi-person-fill"></i> <strong>Citizens:&nbsp;</strong> ${deed.amountOfCitizens}</p>`;
  html += `<p><i class="bi bi-person-vcard"></i> <strong>Founder:&nbsp;</strong> ${deed.founderName}</p>`;
  html += `<p><i class="bi bi-calendar"></i> <strong>Founded:&nbsp;</strong> ${new Date(deed.creationDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>`;
  if (deed.lastActive != null && typeof deed.lastActive === 'string') {
    const lastActiveText = deed.lastActive.replace('Last active: ', '').trim();
    if (lastActiveText !== '') { // Only display if there's actual text after trimming
      html += `<p><i class="bi bi-clock-history"></i> <strong>Active:&nbsp;</strong> ${lastActiveText}</p>`;
    }
  }
  
  if (deed.motto != null && deed.motto.trim() !== "") {
    html += `<p style="font-style:italic;"><i class="bi bi-chat-quote"></i> "${deed.motto}"</p>`;
  }
  nearby = find_nearby_locations({
    x: deed.x,
    y: deed.y
  });
  if (nearby) {
    html += nearby; // This part is commented out in map.js currently
  }
  
  html += `<p style="padding-top:10px;"><button class="modern-button" onclick="share_deed('${deed.tag}', this)"><i class="bi bi-share-fill"></i> Share this location</button></p>`;
  html += `</div>`; // Close info-window-content
  
  infowin = new google.maps.InfoWindow({
    content: html
  });
  deed.marker.setMap(map);
  infowin.open(map, deed.marker);
  window.location.hash = deed.tag;
  return false;
};

share_deed = function(tag, el) {
  const url = `https://andistyr.github.io/wu-map/14816/#${tag}`;
  const inputId = `share-deed-input-${tag}`;
  el.outerHTML = `
    <div class="input-group" style="margin-top: 10px;">
      <input type="text" class="form-control glass-input" id="${inputId}" value="${url}" readonly onclick="this.select()">
      <button class="btn btn-glass" type="button" id="copy-url-btn-${tag}" title="Copy URL" onclick="copyToClipboard(this)">
        <i class="bi bi-clipboard"></i>
      </button>
    </div>
  `;
  const newEl = document.getElementById(inputId);
  if (newEl) {
    newEl.select();
  }
  return false;
};

show_coords_info = function(coords) {
  var coords_marker, found, html, i, k, len, len1, len2, len3, len4, len5, m, n, nearby, o, p, props, q, r, ref, ref1, s, title;
  if (marker !== '') {
    marker.setMap(null);
    marker = '';
  }
  if (infowin !== '') {
    infowin.close();
    infowin = '';
  }
  coords.x = Math.floor(coords.x);
  coords.y = Math.floor(coords.y);
  title = 'X' + coords.x + ', Y' + coords.y;
  props = [];
  found = false;
  coords_marker = '';

  let infoHtml = `<div class="info-window-content">
                    <button class="custom-close-button" onclick="close_infowin(); return false;"><i class="bi bi-x-lg"></i></button>
                    <h2>${title}</h2>`;

  if (coords.x == 2625 && coords.y == 1748) {
    infoHtml += '<p style="margin-top:10px;"><i class="bi bi-exclamation-triangle-fill"></i> Not the coords you are looking for.</p>';
    found = true;
  } else {
    for (k = 0, len = poi.length; k < len; k++) {
      i = poi[k];
      if (i.x == coords.x && i.y == coords.y) {
        found = true;
        if (!filter.poi) {
          filter.poi = true;
          update_markers('poi');
        }
        coords_marker = i.marker;
        infoHtml = `<div class="info-window-content">
                      <h2><i class="bi bi-geo-alt-fill"></i> ${i.name}</h2>`; // Override title if it's a POI
        infoHtml += `<p><i class="bi bi-pin-map"></i> <strong>Coordinates:</strong> X${i.x}, Y${i.y}</p>`;
        if (i.description != null) {
          infoHtml += `<p style="font-style:italic;"><i class="bi bi-info-circle"></i> ${i.description}</p>`;
        }
        break;
      }
    }
    if (!found) {
      for (m = 0, len1 = guard_towers.length; m < len1; m++) {
        i = guard_towers[m];
        if (i.x == coords.x && i.y == coords.y) {
          found = true;
          if (!filter.guard_towers) {
            filter.guard_towers = true;
            update_markers('guard_towers');
          }
          coords_marker = i.marker;
          infoHtml = `<div class="info-window-content">
                        <h2><i class="bi bi-patch-check-fill"></i> Guard Tower</h2>
                        <p><i class="bi bi-person-fill"></i> <strong>Name:&nbsp;</strong> ${i.towerName}</p>
                        <p><i class="bi bi-person"></i> <strong>Creator:&nbsp;</strong> ${i.creatorName != null ? i.creatorName : 'Unknown'}</p>
                        <p><i class="bi bi-shield-fill"></i> <strong>Guards:&nbsp;</strong> ${i.maxGuards}</p>
                        <p><i class="bi bi-geo-alt"></i> <strong>Coordinates:&nbsp;</strong> X${i.x}, Y${i.y}</p>`;
          break;
        }
      }
    }
    if (!found) {
      for (p = 0, len2 = resources.length; p < len2; p++) {
        i = resources[p];
        if (i.x == coords.x && i.y == coords.y) {
          found = true;
          if (!filter.resources) {
            filter.resources = true;
            update_markers('resources');
          }
          coords_marker = i.marker;
          infoHtml = `<div class="info-window-content">
                        <h2><i class="bi bi-gem"></i> ${i.type === 'mine' ? 'Mine' : 'Resource Deposit'}</h2>
                        <p><i class="bi bi-geo-alt"></i> <strong>Coordinates:</strong> X${i.x}, Y${i.y}</p>`;
          if (i.type == 'mine') {
            infoHtml += '<p><i class="bi bi-tools"></i> It contains ';
            if (i.ores == null || i.ores.length === 0) {
              infoHtml += 'no ores.</p>';
            } else {
              infoHtml += `<strong>${i.ores.join(', ')}</strong> ${i.ores.length === 1 ? 'vein' : 'veins'}.</p>`;
            }
            if (i.features != null && i.features.length > 0) {
              infoHtml += `<p><i class="bi bi-gear"></i> Equipped with: <strong>${i.features.join(', ')}</strong></p>`;
            }
          } else {
            infoHtml += `<p><i class="bi bi-box"></i> There is a <strong>${i.size} ${i.type} deposit</strong> here.</p>`;
          }
          break;
        }
      }
    }
    if (!found) {
      for (s = 0, len5 = trees.length; s < len5; s++) {
        i = trees[s];
        if (i.x == coords.x && i.y == coords.y) {
          found = true;
          coords_marker = i.marker;
          infoHtml = `<div class="info-window-content">
                        <h2><i class="bi bi-tree-fill"></i> Forest Area</h2>
                        <p><i class="bi bi-geo-alt"></i> <strong>Coordinates:</strong> X${i.x}, Y${i.y}</p>`;
          if (i.bushes) {
            infoHtml += `<p><i class="bi bi-flower1"></i> Contains mostly <strong>${i.type} bushes</strong>.</p>`;
            if (i.harvest) {
              infoHtml += '<p><i class="bi bi-basket"></i> These bushes can be harvested right now.</p>';
            }
          } else {
            infoHtml += `<p><i class="bi bi-tree"></i> Mostly <strong>${i.type} trees</strong> in this area.</p>`;
            if (i.harvest) {
              infoHtml += '<p><i class="bi bi-basket"></i> These trees can be harvested right now.</p>';
            }
          }
          break;
        }
      }
    }
  }

  if (!found) {
    infoHtml += '<p><i class="bi bi-info-circle"></i> There seems to be nothing special here.</p>';
  }
  
  nearby = find_nearby_locations(coords);
  if (nearby) {
    infoHtml += nearby;
  }
  
  infoHtml += `<p style="padding-top:10px;"><button class="modern-button" onclick="share_coords('${coords.x}', '${coords.y}', this)"><i class="bi bi-share-fill"></i> Share this location</button></p>`;
  infoHtml += `</div>`; // Close info-window-content

  infowin = new google.maps.InfoWindow({
    content: infoHtml,
    position: projection.fromPointToLatLng(projection.fromCoords(coords))
  });
  if (coords_marker !== '') {
    infowin.open(map, coords_marker);
  } else {
    infowin.open(map);
  }
  window.location.hash = coords.x + '_' + coords.y;
  return false;
};

share_coords = function(x, y, el) {
  const url = `https://andistyr.github.io/wu-map/14816/#${x}_${y}`;
  const inputId = `share-coords-input-${x}-${y}`;
  el.outerHTML = `
    <div class="input-group" style="margin-top: 10px;">
      <input type="text" class="form-control glass-input" id="${inputId}" value="${url}" readonly onclick="this.select()">
      <button class="btn btn-glass" type="button" id="copy-url-btn-${x}-${y}" title="Copy URL" onclick="copyToClipboard(this)">
        <i class="bi bi-clipboard"></i>
      </button>
    </div>
  `;
  const newEl = document.getElementById(inputId);
  if (newEl) {
    newEl.select();
  }
  return false;
};

show_coords_on_map = function(x, y) {
  map.panTo(projection.fromPointToLatLng(projection.fromCoords({
    x: x,
    y: y
  })));
  show_coords_info({
    x: x,
    y: y
  });
  return false;
};

find_nearby_locations = function(coords) {
	/*
  var check, dist, found, k, m, max_dist, nearby, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, x, y;
  check = function(x, y) {
    var i, k, len, len1, len2, len3, len4, m, p, q, r;
    for (k = 0, len = deeds.length; k < len; k++) {
      i = deeds[k];
      if (i.x == x && i.y == y) {
        return '<p style="margin-bottom:2px;color:#777;font-size:12px;"> The settlement of <a style="color:#2196F3" href="#' + i.tag + '" onclick="show_deed_on_map(\'' + i.tag + '\')">' + i.name + '</a> is nearby</p>';
      }
    }
    for (m = 0, len1 = guard_towers.length; m < len1; m++) {
      i = guard_towers[m];
      if (i.x == x && i.y == y) {
        return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">guard tower</a> nearby</p>';
      }
    }
    for (p = 0, len2 = resources.length; p < len2; p++) {
      i = resources[p];
      if (i.x == x && i.y == y) {
        if (i.type == 'mine') {
          return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">mine</a> nearby</p>';
        } else {
          return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.size + ' ' + i.type + ' deposit</a> nearby';
        }
      }
      for (q = 0, len3 = poi.length; q < len3; q++) {
        i = poi[q];
        if (i.x == x && i.y == y) {
          if (i.unique == null) {
            i.unique = true;
          }
          if (i.unique) {
            return '<p style="margin-bottom:2px;color:#777;font-size:12px;"><a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.name + '</a> is nearby</p>';
          } else {
            return '<p style="margin-bottom:2px;color:#777;font-size:12px;">A <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.name.toLowerCase() + '</a> is nearby</p>';
          }
        }
      }
    }
    if (filter.trees) {
      for (r = 0, len4 = trees.length; r < len4; r++) {
        i = trees[r];
        if (i.x == x && i.y == y) {
          return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There are a lot of <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.type + ' trees</a> in the area</p>';
        }
      }
    }
    return false;
  };
  nearby = [];
  max_dist = 60;
  for (dist = k = 1, ref = max_dist; 1 <= ref ? k <= ref : k >= ref; dist = 1 <= ref ? ++k : --k) {
    for (x = m = ref1 = -dist, ref2 = dist - 1; ref1 <= ref2 ? m <= ref2 : m >= ref2; x = ref1 <= ref2 ? ++m : --m) {
      y = -dist;
      found = check(coords.x + x, coords.y + y);
      if (found) {
        nearby.push(found);
      }
    }
    for (x = p = ref3 = -dist + 1, ref4 = dist; ref3 <= ref4 ? p <= ref4 : p >= ref4; x = ref3 <= ref4 ? ++p : --p) {
      y = dist;
      found = check(coords.x + x, coords.y + y);
      if (found) {
        nearby.push(found);
      }
    }
    for (y = q = ref5 = -dist, ref6 = dist - 1; ref5 <= ref6 ? q <= ref6 : q >= ref6; y = ref5 <= ref6 ? ++q : --q) {
      x = dist;
      found = check(coords.x + x, coords.y + y);
      if (found) {
        nearby.push(found);
      }
    }
    for (y = r = ref7 = -dist + 1, ref8 = dist; ref7 <= ref8 ? r <= ref8 : r >= ref8; y = ref7 <= ref8 ? ++r : --r) {
      x = -dist;
      found = check(coords.x + x, coords.y + y);
      if (found) {
        nearby.push(found);
      }
    }
  }
  if (nearby.length == 0) {
    return false;
  }
  return '<br>' + nearby.join(''); */
  return false;
};

show_add_form = function(which) {
  var url;
  url = (function() {
    switch (which) {
      case 'deed':
        return 'https://docs.google.com/forms/d/1BUPkv4FUhWZHimbeqE0VUN0QBcQe32q7Pnq_lcylxdE/viewform?embedded=true&hl=en';
      case 'tower':
        return 'https://docs.google.com/forms/d/18mhPg_DjJS8Y3tNMIyXWs8_Sm4EddwR_p8ZJLljoLok/viewform?embedded=true&hl=en';
      case 'mine':
        return 'https://docs.google.com/forms/d/1mh7lizsiy_9s-tKurk_CZu6PJ50CMLmNC1kDUJwDdUk/viewform?embedded=true&hl=en';
      case 'resource':
        return 'https://docs.google.com/forms/d/1EJo-c0ri8n9vWWgMtuo5CBONNMkmWP58gHtsN24pX7c/viewform?embedded=true&hl=en';
      case 'poi':
        return 'https://docs.google.com/forms/d/1K-gqwZMxosMNPzNMG88FT-QbJn_1TDspcL2SWyaKXZA/viewform?embedded=true&hl=en';
      case 'trees':
        return 'https://docs.google.com/forms/d/1muzztjgU9lX-TYNo3nW4S7mhUhUWp9YZhhj-sXo2sDM/viewform?embedded=true&hl=en';
      case 'report':
        return 'https://docs.google.com/forms/d/1szcZKf9NY1lrLQC2iTzPp-LmMexYwH5sR1pUEQqI_WQ/viewform?embedded=true&hl=en';
    }
  })();
  document.getElementById('addform').style.display = 'block';
  return document.getElementById('addform').childNodes[0].src = url;
};

hide_add_form = function() {
  document.getElementById('addform').style.display = 'none';
  return document.getElementById('addform').childNodes[0].src = 'about:blank';
};

hide_search = function() {
  return setTimeout(function() {
    return document.getElementById('searchbox').className = '';
  }, 200);
};

search = function() {
  var c, closest, coords, deed, dist, home_deed, i, k, len, len1, len2, len3, len4, len5, len6, len7, len8, location, m, max_length, p, q, r, results, s, searchtext, t, u, v, val;
  searchtext = document.getElementById('search').value.toLowerCase();
  results = [];
  if (searchtext !== '') {
    if (searchtext.indexOf(' near ') > -1 || searchtext.indexOf('nearby ') > -1) {
      deed = null;
      if (searchtext.indexOf(' near ') > -1) {
        location = searchtext.split(' near ');
        searchtext = location[0];
        location = location[1];
        if (location !== '') {
          home_deed = localStorage.getItem('wu_map_home_deed_14816');
          if ((location == 'm' || location == 'me') && (home_deed != null)) {
            deed = deeds[deed_tags[home_deed]];
          } else if (location == 'n' || location == 'nt') {
            deed = deeds[deed_tags['new-town']];
          } else {
            for (k = 0, len = deeds.length; k < len; k++) {
              i = deeds[k];
              if (i.name.toLowerCase().indexOf(location) !== -1) {
                deed = i;
                break;
              }
            }
          }
        }
      } else {
        searchtext = searchtext.replace('nearby ', '');
        if (searchtext !== '') {
          home_deed = localStorage.getItem('wu_map_home_deed_14816');
          if (home_deed != null) {
            deed = deeds[deed_tags[home_deed]];
          }
        }
      }
      if (deed !== null) {
        closest = {
          resource: {
            found: false,
            dist: 4096
          },
          forest: {
            found: false,
            dist: 4096
          }
        };
        for (m = 0, len1 = resources.length; m < len1; m++) {
          i = resources[m];
          if (i.type == 'mine') {

          } else {
            if ((i.size + ' ' + i.type).toLowerCase().indexOf(searchtext) !== -1) {
              dist = distance(deed.x, deed.y, i.x, i.y);
              if (dist < closest.resource.dist) {
                closest.resource = {
                  dist: dist,
                  found: true,
                  name: i.size.charAt(0).toUpperCase() + i.size.slice(1) + ' ' + i.type + ' deposit',
                  tag: i.x + '_' + i.y,
                  "class": 'resource',
                  sub: 'Closest one to ' + deed.name,
                  onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
                };
              }
            }
          }
        }
        for (p = 0, len2 = trees.length; p < len2; p++) {
          i = trees[p];
          if ((i.type + ' forest').toLowerCase().indexOf(searchtext) !== -1) {
            dist = distance(deed.x, deed.y, i.x, i.y);
            if (dist < closest.forest.dist) {
              closest.forest = {
                dist: dist,
                found: true,
                name: i.type.charAt(0).toUpperCase() + i.type.slice(1) + ' forest',
                tag: i.x + '_' + i.y,
                "class": 'forest',
                sub: 'Closest one to ' + deed.name,
                onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
              };
            }
          }
        }
        if (closest.resource.found) {
          results.push(closest.resource);
        }
        if (closest.forest.found) {
          results.push(closest.forest);
        }
      }
    } else {
      if (searchtext.indexOf(',') !== -1) {
        coords = searchtext.split(',');
        for (i = q = 0, len3 = coords.length; q < len3; i = ++q) {
          val = coords[i];
          coords[i] = val.replace(/([XxYy]|\s)/g, '');
        }
        if (!isNaN(coords[0]) && !isNaN(coords[1])) {
          if (coords[0] > 0 && coords[1] > 0) {
            results.push({
              name: 'X' + coords[0] + ', Y' + coords[1],
              sub: 'Go to coordinates',
              tag: coords[0] + '_' + coords[1],
              "class": 'coords',
              onclick: 'show_coords_on_map(' + Math.round(coords[0]) + ',' + Math.round(coords[1]) + ')'
            });
          }
        }
      }
      for (r = 0, len4 = poi.length; r < len4; r++) {
        i = poi[r];
        if (results.length > 8) {
          break;
        }
		if (typeof i.name === 'undefined') {
			continue;
		}
		
        if (i.name.toLowerCase().indexOf(searchtext) !== -1) {
          results.push({
            name: i.name,
            x: i.x,
            y: i.y,
            "class": (i.type == null || i.type == 'star') ? 'poi' : 'poi_' + i.type,
            tag: i.x + '_' + i.y,
            onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
          });
        }
      }
      for (s = 0, len5 = deeds.length; s < len5; s++) {
        i = deeds[s];
        if (results.length > 8) {
          break;
        }
        if (i.name.toLowerCase().indexOf(searchtext) !== -1) {
          results.push(i);
        } else if (i.mayor != null && i.mayor.toLowerCase().indexOf(searchtext) !== -1) {
            results.push(i);
        } else if (i.allianceName != null && i.allianceName.toLowerCase().indexOf(searchtext) !== -1) {
			results.push(i);
        } else if (i.founderName != null && i.founderName.toLowerCase().indexOf(searchtext) !== -1) {
            results.push(i);
        }
      }
      for (t = 0, len6 = guard_towers.length; t < len6; t++) {
        i = guard_towers[t];
        if (results.length > 8) {
          break;
        }
        if (i.creator == null) {
          continue;
        }
        if (i.creator.toLowerCase().indexOf(searchtext) !== -1) {
          c = i.creator.toLowerCase().indexOf(searchtext);
          results.push({
            name: 'Guard tower at ' + i.x + ', ' + i.y,
            sub: 'Built by ' + i.creator.slice(0, c) + '<strong>' + i.creator.slice(c, c + searchtext.length) + '</strong>' + i.creator.slice(c + searchtext.length),
            tag: i.x + '_' + i.y,
            "class": 'guard_tower',
            onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
          });
        }
      }
      for (u = 0, len7 = trees.length; u < len7; u++) {
        i = trees[u];
        if (results.length > 8) {
          break;
        }
        if ((i.type + ' forest').toLowerCase().indexOf(searchtext) !== -1) {
          results.push({
            name: i.type.charAt(0).toUpperCase() + i.type.slice(1) + ' forest',
            tag: i.x + '_' + i.y,
            "class": 'forest',
            sub: 'X' + i.x + ', Y' + i.y,
            onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
          });
        }
      }
      for (v = 0, len8 = resources.length; v < len8; v++) {
        i = resources[v];
        if (results.length > 8) {
          break;
        }
        if (i.type == 'mine') {
          continue;
        }
        if ((i.size + ' ' + i.type).toLowerCase().indexOf(searchtext) !== -1) {
          results.push({
            name: i.size.charAt(0).toUpperCase() + i.size.slice(1) + ' ' + i.type + ' deposit',
            tag: i.x + '_' + i.y,
            "class": 'resource',
            sub: 'X' + i.x + ', Y' + i.y,
            onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'
          });
        }
      }
    }
    max_length = (function() {
      switch (false) {
        case !(window.innerHeight < 380):
          return 4;
        case !(window.innerHeight < 420):
          return 5;
        case !(window.innerHeight < 460):
          return 6;
        case !(window.innerHeight < 500):
          return 7;
        default:
          return 8;
      }
    })();
    if (results.length > max_length) {
      results = results.slice(0, max_length);
    }
  }
  Transparency.render(document.getElementById('searchresults'), results, {
    location: {
      "class": function() {
        return 'location' + (function() {
          switch (false) {
            case !this.type:
              return ' deed_' + this.type;
            case !this.add_deed:
              return ' single';
            case !this["class"]:
              return ' ' + this["class"];
            default:
              return '';
          }
        }).call(this);
      },
      href: function() {
        return '#' + this.tag;
      },
      onclick: function() {
        switch (false) {
          case !this.add_deed:
            return 'show_add_form(\'deed\')';
          case !this.onclick:
            return this.onclick;
          default:
            return 'show_deed_on_map(\'' + this.tag + '\')';
        }
      }
    },
    name: {
      html: function() {
        i = this.name.toLowerCase().indexOf(searchtext);
        if (i == -1) {
          return this.name;
        } else {
          return this.name.slice(0, i) + '<strong>' + this.name.slice(i, i + searchtext.length) + '</strong>' + this.name.slice(i + searchtext.length);
        }
      }
    },
    mayor: {
      html: function() {
        switch (false) {
          case !this.add_deed:
            return '';
          case !this.sub:
            return this.sub;
          case this["class"] !== 'poi':
            return this.x + ', ' + this.y;
          case !(this.mayor == null):
            return '';
          default:
			var ally = '';
			if(this.allianceName !== null && this.allianceName !== '') {
				ally = " - "+this.allianceName;
			}
			var subtext = this.mayor+ally;
			if(this.mayor !== this.founderName)
			{
				subtext = this.mayor+"/"+this.founderName+ally;
			}
            i = subtext.toLowerCase().indexOf(searchtext);
            if (i == -1) {
              return subtext;
            } else {
              return subtext.slice(0, i) + '<strong>' + subtext.slice(i, i + searchtext.length) + '</strong>' + subtext.slice(i + searchtext.length);
            }
        }
      }
    }
  });
  if (results.length > 0) {
    return document.getElementById('searchbox').className = 'open';
  } else {
    return document.getElementById('searchbox').className = '';
  }
};

filter = {
  deeds: true,
  deeds_solo: true,
  deeds_small: true,
  deeds_large: true,
  guard_towers: true,
  poi: true
};

toggle_markers = function(which) {
  if (filter[which] != null) {
    filter[which] = !filter[which];
    return update_markers(which);
  }
};

update_markers = function(which) {
  var i, j, k, len, len1, len2, len3, len4, len5, len6, len7, m, p, q, r, s, t, u;
  close_infowin();
  switch (which) {
    case 'deeds':
      for (k = 0, len = deeds.length; k < len; k++) {
        i = deeds[k];
        switch (i.type) {
          case 'large':
            i.marker.setMap(filter.deeds && filter.deeds_large ? map : null);
			i.border.setMap(filter.deeds && filter.deeds_large ? map : null);
			i.borderPerimeter.setMap(filter.deeds && filter.deeds_large ? map : null);
            break;
          case 'small':
            i.marker.setMap(filter.deeds && filter.deeds_small ? map : null);
			i.border.setMap(filter.deeds && filter.deeds_small ? map : null);
			i.borderPerimeter.setMap(filter.deeds && filter.deeds_small ? map : null);
            break;
          default:
            i.marker.setMap(filter.deeds && filter.deeds_solo ? map : null);
			i.border.setMap(filter.deeds && filter.deeds_solo ? map : null);
			i.borderPerimeter.setMap(filter.deeds && filter.deeds_solo ? map : null);
        }
      }
      break;
    case 'deeds_solo':
      for (m = 0, len1 = deeds.length; m < len1; m++) {
        i = deeds[m];
        if (i.type == 'solo' || (i.type == null)) {
          i.marker.setMap(filter.deeds && filter.deeds_solo ? map : null);
		  i.border.setMap(filter.deeds && filter.deeds_solo ? map : null);
			i.borderPerimeter.setMap(filter.deeds && filter.deeds_solo ? map : null);
        }
      }
      break;
    case 'deeds_small':
      for (p = 0, len2 = deeds.length; p < len2; p++) {
        i = deeds[p];
        if (i.type == 'small') {
          i.marker.setMap(filter.deeds && filter.deeds_small ? map : null);
		  i.border.setMap(filter.deeds && filter.deeds_small ? map : null);
			i.borderPerimeter.setMap(filter.deeds && filter.deeds_small ? map : null);
        }
      }
      break;
    case 'deeds_large':
      for (q = 0, len3 = deeds.length; q < len3; q++) {
        i = deeds[q];
        if (i.type == 'large') {
          i.marker.setMap(filter.deeds && filter.deeds_large ? map : null);
		  i.border.setMap(filter.deeds && filter.deeds_large ? map : null);
		  i.borderPerimeter.setMap(filter.deeds && filter.deeds_large ? map : null);
        }
      }
      break;
    case 'guard_towers':
      for (r = 0, len4 = guard_towers.length; r < len4; r++) {
        i = guard_towers[r];
        i.marker.setMap(filter.guard_towers ? map : null);
      }
      break;
    case 'resources':
      for (s = 0, len5 = resources.length; s < len5; s++) {
        i = resources[s];
        i.marker.setMap(filter.resources ? map : null);
      }
      break;
    case 'poi':
      for (t = 0, len6 = poi.length; t < len6; t++) {
        i = poi[t];
        i.marker.setMap(filter.poi ? map : null);
      }
      break;
    case 'trees':
      for (u = 0, len7 = trees.length; u < len7; u++) {
        i = trees[u];
        i.marker.setMap(filter.trees ? map : null);
      }
  }
  for (i in filter) {
    j = filter[i];
    document.getElementById('marker_' + i).className = j ? 'selected' : '';
  }
  return false;
};

change_map = function(type) {
  switch (type) {
    case 'mapdump':
      map.setMapTypeId('mapdump');
      document.getElementById('maptype_tiled').className = '';
      document.getElementById('maptype_mapdump').className = 'selected';
      break;
    case 'tiled':
      map.setMapTypeId('tiled');
      document.getElementById('maptype_tiled').className = 'selected';
      document.getElementById('maptype_mapdump').className = '';
  }
  return false;
};

distance = function(coord_a, coord_b) {
  var x, y;
  if (arguments.length == 4) {
    coord_a = {
      x: arguments[0],
      y: arguments[1]
    };
    coord_b = {
      x: arguments[2],
      y: arguments[3]
    };
  }
  x = coord_b.x - coord_a.x;
  x = x * x;
  y = coord_b.y - coord_a.y;
  y = y * y;
  return Math.sqrt(x + y);
};