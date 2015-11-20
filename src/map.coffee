map = ''
marker = ''
infowin = ''
deed_tags = {}

projection = 
	size: 4096
	mid: 2048
	coord_multiplier: 4
	max_lat: 90
	max_long: 180
	fromLatLngToPoint: (latLng) ->
		l = latLng.lat()
		x = switch
			when l isnt 0 then projection.mid + (l / projection.max_lat * projection.mid)
			else projection.mid
		l = latLng.lng()
		y = switch
			when l isnt 0 then projection.mid + (l / projection.max_long * projection.mid)
			else projection.mid
		new google.maps.Point x, y
	fromPointToLatLng: (point, noWrap) ->
		point.x = projection.size if point.x > projection.size
		point.y = projection.size if point.y > projection.size
		point.x = 0 if point.x < 0
		point.y = 0 if point.y < 0
		lat = switch
			when point.x < projection.mid then 0 - (projection.max_lat - (point.x / projection.mid * projection.max_lat))
			when point.x > projection.mid then ((point.x - projection.mid) / projection.mid * projection.max_lat)
			else 0
		long = switch
			when point.y < projection.mid then 0 - (projection.max_long - (point.y / projection.mid * projection.max_long))
			when point.y > projection.mid then ((point.y - projection.mid) / projection.mid * projection.max_long)
			else 0
		new google.maps.LatLng lat, long
	toCoords: (point) ->
		x: point.x * projection.coord_multiplier
		y: point.y * projection.coord_multiplier
	fromCoords: (point) ->
		x: point.x / projection.coord_multiplier
		y: point.y / projection.coord_multiplier

init = ->

	# Create map object
	map = new google.maps.Map document.getElementById('map'),
		center:
			lat: -80.035400390625
			lng: -163.30078125
		zoom: 2
		zoomControl: true
		streetViewControl: false
		mapTypeControl: false

	# Image map type
	# Single image, using mapdump as source
	Sklotopolis = new google.maps.ImageMapType
		getTileUrl: (coord, zoom) ->
			if coord.x is 0 and coord.y is 0
				return 'http://5.45.109.131/unlimited/mapdump.png'
		tileSize: new google.maps.Size(4096, 4096)
		maxZoom: 2
		minZoom: 2
		name: 'Official map dump' 
	Sklotopolis.projection = projection
	map.mapTypes.set 'sklotopolis', Sklotopolis

	# Show coordinates
	coordsDiv = document.getElementById('coords')
	map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push coordsDiv
	map.addListener 'mousemove', (e) ->
		coords = projection.toCoords projection.fromLatLngToPoint(e.latLng)
		document.getElementById('coordsc').textContent = 'Mouse cursor at X' + Math.floor(coords.x) + ', Y' + Math.floor(coords.y)

	# Show location on click
	map.addListener 'click', (e) ->
		if console?
			console.log 'Lat: ' + e.latLng.lat() + ', Long: ' + e.latLng.lng()

		show_coords_info projection.toCoords(projection.fromLatLngToPoint(e.latLng))


	# Tiled map from my own server
	Tiled = new google.maps.ImageMapType
		getTileUrl: (coord, zoom) ->
			zoom = switch zoom
				when 0 then 1024
				when 1 then 2048
				when 2 then 4096
				when 3 then 8192
				when 4 then 16384
			return 'http://188.226.191.32:8000/tile_' + zoom + '_' + coord.x + '_' + coord.y + '.png'
		tileSize: new google.maps.Size(256, 256)
		maxZoom: 3
		minZoom: 0
		name: 'Tiled map (updates approx. every 4 hrs)'
	Tiled.projection = projection
	map.mapTypes.set 'tiled', Tiled
	map.setMapTypeId 'tiled'

	# Sort the deeds alphabetically
	deeds.sort (a, b) -> 
		a_name = a.name.toLowerCase()
		b_name = b.name.toLowerCase()
		a_name = a_name.substr(4) if a_name.substr(0, 3) is 'the'
		b_name = b_name.substr(4) if b_name.substr(0, 3) is 'the'
		switch
			when a.top and not b.top then -1
			when b.top and not a.top then 1
			when a_name < b_name then -1
			when a_name > b_name then 1
			else 0

	# Deeds
	for i, j in deeds
		# Build tag index for lookup
		deed_tags[i.tag] = j

		# Create marker
		i.marker = new google.maps.Marker
			position: projection.fromPointToLatLng(projection.fromCoords(x: i.x, y: i.y))
			map: map
			icon:
				url: 'images/deed_' + (i.type or 'solo') + '.png'
				size: new google.maps.Size(32, 37)
				origin: new google.maps.Point(0, 0)
				anchor: new google.maps.Point(16, 37)

		i.marker.addListener 'click', show_deed_info.bind(null, i.tag)

		if window.location.hash.substr(1) is i.tag
			show_deed_on_map i.tag


	# Guard towers
	for i in guard_towers
		i.marker = new google.maps.Marker
			position: projection.fromPointToLatLng(projection.fromCoords(x: i.x, y: i.y))
			map: map
			icon:
				url: 'images/guard_tower.png'
				size: new google.maps.Size(32, 37)
				origin: new google.maps.Point(0, 0)
				anchor: new google.maps.Point(16, 37)

		i.marker.addListener 'click', show_coords_info.bind(null, x: i.x, y: i.y)


	# Resources
	for i in resources
		i.marker = new google.maps.Marker
			position: projection.fromPointToLatLng(projection.fromCoords(x: i.x, y: i.y))
			map: map
			icon:
				url: if i.type is 'mine' then 'images/mine.png' else 'images/resource.png'
				size: new google.maps.Size(32, 37)
				origin: new google.maps.Point(0, 0)
				anchor: new google.maps.Point(16, 37)

		i.marker.addListener 'click', show_coords_info.bind(null, x: i.x, y: i.y)

	# Points of interest
	for i in poi
		i.marker = new google.maps.Marker
			position: projection.fromPointToLatLng(projection.fromCoords(x: i.x, y: i.y))
			map: map
			icon:
				url: 'images/poi.png'
				size: new google.maps.Size(32, 37)
				origin: new google.maps.Point(0, 0)
				anchor: new google.maps.Point(16, 37)

		i.marker.addListener 'click', show_coords_info.bind(null, x: i.x, y: i.y)


	hash = window.location.hash.substr(1)
	if hash.indexOf(',') isnt -1 # Old URLs
		hash = hash.split(',')
		if hash.length is 2
			coords =
				x: parseInt(hash[0])
				y: parseInt(hash[1])
			map.panTo projection.fromPointToLatLng(projection.fromCoords(coords))
			show_coords_info coords

	else if hash.indexOf('_') isnt -1 # New URLs
		hash = hash.split('_')
		if hash.length is 2
			coords =
				x: parseInt(hash[0])
				y: parseInt(hash[1])
			map.panTo projection.fromPointToLatLng(projection.fromCoords(coords))
			show_coords_info coords

	map.addListener 'zoom_changed', close_infowin


close_infowin = ->
	if infowin isnt ''
		do infowin.close
		infowin = ''


# Deed functions
show_deed_on_map = (tag) ->
	deed = deeds[deed_tags[tag]]
	map.panTo projection.fromPointToLatLng(projection.fromCoords(x: deed.x, y: deed.y))
	show_deed_info(tag)

	return false

show_deed_info = (tag) ->
	deed = deeds[deed_tags[tag]]

	if console?
		latLng = projection.fromPointToLatLng(projection.fromCoords(x: deed.x, y: deed.y))
		console.log 'Lat: ' + latLng.lat() + ', Long: ' + latLng.lng()

	if infowin isnt ''
		do infowin.close
		infowin = ''

	props = []
	if deed.type?
		html = '<p style="font-style:italic;' + (if not deed.features? then 'margin-bottom:6px;' else '') + '">'
		html += switch deed.type
			when 'solo' then 'Solo player'
			when 'small' then 'Small settlement'
			when 'large' then 'Large town'
		if deed.features?
			html += ' (recruiting)' if 'recruiting' in deed.features
		html += '</p>'
		props.push html
	else if deed.features?
		props.push '<p style="font-style:italic">Recruiting</p>'

	if deed.features?
		html = '<p style="margin-bottom: 6px">'

		if 'market' in deed.features
			html += '<img src="images/feature_market.png" title="Marketplace on deed" /> '

		if 'trader' in deed.features
			html += '<img src="images/feature_trader.png" title="Trader on deed" /> '

		if 'harbour' in deed.features
			html += '<img src="images/feature_harbour.png" title="Harbour area on deed" /> '

		if 'mailbox' in deed.features
			html += '<img src="images/feature_mailbox.png" title="Mailbox on deed" /> '

		html += '</p>'
		props.push html

	if deed.mayor?
		props.push '<p style="margin-bottom:6px">Mayor: ' + deed.mayor + (if deed.supporter then ' <img src="images/star.png">' else '') + '</p>'

	props.push '<p>Coordinates: X' + deed.x + ', Y' + deed.y + '</p>'

	if deed.note?
		props.push '<p style="font-style:italic">' + deed.note + '</p>'


	nearby = find_nearby_locations(x: deed.x, y: deed.y)
	props.push nearby if nearby

	infowin = new google.maps.InfoWindow
		content: '<div id="content">
			<h2>' + deed.name + '</h2>
			<div id="bodyContent">
				' + props.join('') + '
				<p style="padding-top:10px"><a href="#' + deed.tag + '" style="display:inline-block;color:white;padding:3px 6px;border-radius:3px;font-size:13px;background:#2196F3;cursor:pointer;" onclick="share_deed(\'' + deed.tag + '\', this)">Share this location</a></p>
			</div>
		</div>'
	infowin.open map, deed.marker
	infowin.open map, deed.marker

	window.location.hash = deed.tag

	return false

share_deed = (tag, el) ->
	el.style.backgroundColor = 'white'
	el.style.padding = 0
	el.innerHTML = '<input type="text" value="http://woubuc.github.io/wu-map/#' + tag + '" style="width:280px;padding:2px;border-radius:3px;border:1px solid #dedede;font-size:12px" onclick="this.select()" />'
	el.childNodes[0].select()
	return false


# Coordinate functions
show_coords_info = (coords) ->
	if marker isnt ''
		marker.setMap(null)
		marker = ''
	if infowin isnt ''
		do infowin.close
		infowin = ''

	coords.x = Math.floor(coords.x)
	coords.y = Math.floor(coords.y)

	title = 'X' + coords.x + ', Y' + coords.y

	props = []
	found = no
	coords_marker = ''

	for i in poi
		if i.x is coords.x and i.y is coords.y
			console.log 'found'
			found = yes
			coords_marker = i.marker
			title = i.name
			props.push '<p>Coordinates: X' + i.x + ', Y' + i.y + '</p>'
			if i.description?
				props.push '<p style="margin:10px 0;max-width:400px;padding:8px;background:#eee;font-style:italic">' + i.description + '</p>'

	if not found
		for i in guard_towers
			if i.x is coords.x and i.y is coords.y
				found = yes
				coords_marker = i.marker
				props.push '<p>There is a <strong style="font-weight:500">guard tower</strong> here' + (if i.creator? then ', built by ' + i.creator else '') + '</p>'

	if not found
		for i in resources
			if i.x is coords.x and i.y is coords.y
				found = yes
				coords_marker = i.marker
				if i.type is 'mine'
					props.push '<p>There is a <strong style="font-weight:500">mine</strong> here</p>'
					html = '<p>It contains '
					if not i.ores?
						html += 'no'
					else
						for o, n in i.ores
							html += switch n
								when 0 then ''
								when i.ores.length - 1 then ' and '
								else ', '
							html += o
						html += (if i.ores.length is 1 then ' vein' else ' veins') + '</p>'

					if i.features?
						html += '<p>It is equipped with '
						for o, n in i.features
							html += switch n
								when 0 then ''
								when i.features.length - 1 then ' and '
								else ', '
							html += 'a ' + o
						html += '</p>'
					props.push html
				else
					props.push '<p>There is a <strong style="font-weight:500">' + i.size + ' ' + i.type + ' deposit</strong> here</p>'


	props.push '<p>There seems to be nothing special here</p>' if not found

	nearby = find_nearby_locations(coords)
	props.push nearby if nearby

	infowin = new google.maps.InfoWindow
		content: '<div id="content">
			<h3>' + title + '</h3>
			<div id="bodyContent">
				' + props.join('') + '
				<p style="padding-top:10px"><a href="#' + coords.x + '_' + coords.y + '" style="display:inline-block;color:white;padding:3px 6px;border-radius:3px;font-size:13px;background:#2196F3;cursor:pointer;" onclick="share_coords(\'' + coords.x + '\', \'' + coords.y + '\', this)">Share this location</a></p>
			</div>
		</div>'
		position: projection.fromPointToLatLng(projection.fromCoords(coords))

	if coords_marker isnt ''
		infowin.open map, coords_marker
		infowin.open map, coords_marker
	else
		infowin.open map
		infowin.open map

	window.location.hash = coords.x + '_' + coords.y

	return false

share_coords = (x, y, el) ->
	el.style.backgroundColor = 'white'
	el.style.padding = 0
	el.innerHTML = '<input type="text" value="http://woubuc.github.io/wu-map/#' + x + '_' + y + '" style="width:255px;padding:2px;border-radius:3px;border:1px solid #dedede;font-size:12px" onclick="this.select()" />'
	el.childNodes[0].select()
	return false

show_coords_on_map = (x, y) ->
	map.panTo projection.fromPointToLatLng(projection.fromCoords(x: x, y: y))
	show_coords_info(x: x, y: y)
	return false


find_nearby_locations = (coords) ->

	check = (x, y) ->
		for i in deeds
			if i.x is x and i.y is y
				return '<p style="margin-bottom:2px;color:#777;font-size:12px;"> The settlement of <a style="color:#2196F3" href="#' + i.tag + '" onclick="show_deed_on_map(\'' + i.tag + '\')">' + i.name + '</a> is nearby</p>'
		for i in guard_towers
			if i.x is x and i.y is y
				return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">guard tower</a> nearby</p>'
		for i in resources
			if i.x is x and i.y is y
				if i.type is 'mine'
					return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">mine</a> nearby</p>'
				else
					return '<p style="margin-bottom:2px;color:#777;font-size:12px;">There is a <a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.size + ' ' + i.type + ' deposit</a> nearby'
		for i in poi
			if i.x is x and i.y is y
				return '<p style="margin-bottom:2px;color:#777;font-size:12px;"><a style="color:#2196F3" href="#' + i.x + '_' + i.y + '" onclick="show_coords_on_map(' + i.x + ',' + i.y + ')">' + i.name + '</a> is nearby</p>'

		return false

	nearby = []

	max_dist = 60
	for dist in [1..max_dist]
		for x in [-dist..dist - 1]
			y = -dist
			found = check coords.x + x, coords.y + y
			nearby.push found if found
		for x in [-dist + 1..dist]
			y = dist
			found = check coords.x + x, coords.y + y
			nearby.push found if found
		for y in [-dist..dist - 1]
			x = dist
			found = check coords.x + x, coords.y + y
			nearby.push found if found
		for y in [-dist + 1..dist]
			x = -dist
			found = check coords.x + x, coords.y + y
			nearby.push found if found

	return false if nearby.length is 0
	return '<br>' + nearby.join('')

# Add menu
show_add_menu = ->
	el = document.getElementById('addmenu')
	if el.className is 'open'
		el.className = ''
	else
		el.className = 'open'

show_add_form = (which) ->
	url = switch which
		when 'deed' then 'https://docs.google.com/forms/d/1-GW1P_ImiqjYxCFSQGw_kFRbmDRbbpkCFpRbO82jb8Q/viewform?embedded=true&hl=en'
		when 'tower' then 'https://docs.google.com/forms/d/19Aa-F-2PwTmMEYZTKfbpnjDRvKvBw5ZVwhQSIDPDlQQ/viewform?embedded=true&hl=en'
		when 'mine' then 'https://docs.google.com/forms/d/10tIQppH5tsWCvMBqsg22dGVS1ids36vcr3BlhnX6aI8/viewform?embedded=true&hl=en'
		when 'resource' then 'https://docs.google.com/forms/d/1NVS_LMy0aTv8OCRnEbhnrS06QRzd40ShioUGi7jo6DU/viewform?embedded=true&hl=en'
		when 'poi' then 'https://docs.google.com/forms/d/1vUyH4gGvPyy1GfMRcPZ3ynX7IRh083sIoLyHo8eaeyA/viewform?embedded=true&hl=en'
	document.getElementById('addform').style.display = 'block'
	document.getElementById('addform').childNodes[0].src = url
	document.getElementById('addmenu').className = ''

hide_add_form = ->
	document.getElementById('addform').style.display = 'none'
	document.getElementById('addform').childNodes[0].src = 'about:blank'

hide_search = ->
	setTimeout ->
		document.getElementById('searchbox').className = ''
	, 200

search = ->
	searchtext = document.getElementById('search').value.toLowerCase()

	results = []

	if searchtext isnt ''

		# Coordinates
		if searchtext.indexOf(',') isnt -1
			coords = searchtext.split(',')
			if not isNaN(coords[0]) and not isNaN(coords[1])
				if coords[0] > 0 and coords[1] > 0
					results.push
						name: coords[0] + ', ' + coords[1]
						sub: 'Go to coordinates'
						tag: coords[0] + '_' + coords[1]
						class: 'coords'
						onclick: 'show_coords_on_map(' + Math.round(coords[0]) + ',' + Math.round(coords[1]) + ')'

		# POI
		for i in poi
			if i.name.toLowerCase().indexOf(searchtext) isnt -1
				results.push
					name: i.name
					x: i.x
					y: i.y
					class: 'poi'
					tag: i.x + '_' + i.y
					onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'

		# Deeds
		for i in deeds
			if i.name.toLowerCase().indexOf(searchtext) isnt -1
				results.push i
			else if i.mayor?
				if i.mayor.toLowerCase().indexOf(searchtext) isnt -1
					results.push i

		for i in guard_towers
			continue if not i.creator?
			if i.creator.toLowerCase().indexOf(searchtext) isnt -1
				c = i.creator.toLowerCase().indexOf(searchtext)
				results.push
					name: 'Guard tower at ' + i.x + ', ' + i.y
					sub: 'Built by ' + i.creator.slice(0, c) + '<strong>' + i.creator.slice(c, c + searchtext.length) + '</strong>' + i.creator.slice(c + searchtext.length)
					tag: i.x + '_' + i.y
					class: 'guard_tower'
					onclick: 'show_coords_on_map(' + i.x + ',' + i.y + ')'

		if results.length > 5
			results = results.slice 0, 5

		results.push
			tag: ''
			add_deed: yes
			name: 'Can\'t find your deed?'

	Transparency.render document.getElementById('searchresults'), results,
		location:
			class: -> 'location' + switch
				when @type then ' deed_' + @type
				when @add_deed then ' single'
				when @class then ' ' + @class
				else ''
			href: -> '#' + @tag
			onclick: -> switch
				when @add_deed then 'show_add_form(\'deed\')'
				when @onclick then @onclick
				else 'show_deed_on_map(\'' + @tag + '\')'
		name: html: ->
			i = @name.toLowerCase().indexOf(searchtext)
			if i is -1
				return @name
			else
				return @name.slice(0, i) + '<strong>' + @name.slice(i, i + searchtext.length) + '</strong>' + @name.slice(i + searchtext.length)
		mayor: html: -> switch
			when @add_deed then ''
			when @sub then @sub
			when @class is 'poi' then @x + ', ' + @y
			when not @mayor? then 'No mayor on record'
			else
				i = @mayor.toLowerCase().indexOf(searchtext)
				console.log @mayor + ': ' + i + ', ' + searchtext.length
				if i is -1
					return @mayor
				else
					return @mayor.slice(0, i) + '<strong>' + @mayor.slice(i, i + searchtext.length) + '</strong>' + @mayor.slice(i + searchtext.length)

	if results.length > 0
		document.getElementById('searchbox').className = 'open'
	else
		document.getElementById('searchbox').className = ''


# Marker filters
filter =
	deeds: on
	deeds_solo: on
	deeds_small: on
	deeds_large: on
	guard_towers: on
	resources: on
	poi: on

toggle_markers = (which) ->
	# Set filter
	if filter[which]?
		filter[which] = not filter[which]
		update_markers which

# Toggle marker filters
update_markers = (which) ->
	# Close tooltip (in case we hide a marker with an open tooltip)
	do close_infowin

	# Update the markers
	switch which
		when 'deeds'
			for i in deeds
				switch i.type
					when 'large'
						i.marker.setMap(if filter.deeds and filter.deeds_large then map else null)
					when 'small'
						i.marker.setMap(if filter.deeds and filter.deeds_small then map else null)
					else
						i.marker.setMap(if filter.deeds and filter.deeds_solo then map else null)

		when 'deeds_solo'
			for i in deeds
				if i.type is 'solo' or not i.type?
					i.marker.setMap(if filter.deeds and filter.deeds_solo then map else null)
		when 'deeds_small'
			for i in deeds
				if i.type is 'small'
					i.marker.setMap(if filter.deeds and filter.deeds_small then map else null)
		when 'deeds_large'
			for i in deeds
				if i.type is 'large'
					i.marker.setMap(if filter.deeds and filter.deeds_large then map else null)

		when 'guard_towers'
			for i in guard_towers
					i.marker.setMap(if filter.guard_towers then map else null)
		when 'resources'
			for i in resources
				i.marker.setMap(if filter.resources then map else null)
		when 'poi'
			for i in poi
				i.marker.setMap(if filter.poi then map else null)

	# Update toggle switches
	for i, j of filter
		document.getElementById('marker_' + i).className = if j then 'selected' else ''

	return false

# Change map type and update options in sidebar
change_map = (type) ->
	switch type
		when 'mapdump'
			map.setMapTypeId('mapdump')
			document.getElementById('maptype_tiled').className = ''
			document.getElementById('maptype_mapdump').className = 'selected'
		when 'tiled'
			map.setMapTypeId('tiled')
			document.getElementById('maptype_tiled').className = 'selected'
			document.getElementById('maptype_mapdump').className = ''

	return false


# Find distance between two coordinates
distance = (coord_a, coord_b) ->
  x = coord_b.x - coord_a.x
  x = x * x
  y = coord_b.y - coord_a.y
  y = y * y
  return Math.sqrt(x + y)