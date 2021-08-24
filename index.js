const express = require('express')
const app = express()
const cors = require('cors')
const sharp = require('sharp')
const fs = require("fs")
const Color = require('color')
const axios = require('axios')
const fetch = require('node-fetch')


const port = 3000

var server = app.listen(process.env.PORT || port, function(){
	console.log(`listening on port: ${port}`)
})

app.use(express.static('public'))


















// async function getBuffer(username) {
// 	try {
// 		let id_response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
// 		let id = await id_response.json()['id']
// 		console.log(id)
// 		return id
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

// async function get(url) {
// 	try {
// 		return await axios.get(url)
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

// async function generateAvatar(username,size,hex) {

// 	console.log(username)
// 	console.log(size)
// 	console.log(hex)

// 	// if (username.match('^[a-zA-Z0-9_]{1,16}$',username)) {
// 	// 	// let id = 
// 	// } else {
// 	// 	id = username
// 	// }

// 	fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data)

// 		fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${data['id']}`)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data)
// 			let texture_url = JSON.parse(Buffer.from(data['properties'][0]['value'], 'base64').toString())['textures']['SKIN']['url']
// 			fetch(texture_url)
// 			.then(response => response.arrayBuffer())
// 			.then(async data => {
// 				let buffer = await Buffer.from(data, 'base64')
// 				let unit = 64

// 				let edit_image = await sharp(buffer)
// 					.resize({
// 						width:8*unit,
// 						height:8*unit,
// 						channels:4,
// 						kernel: sharp.kernel.nearest})
// 					.toBuffer();
				
// 				var head = await sharp(edit_image)
// 					.extract({
// 						left: unit,
// 						top: unit,
// 						width: unit,
// 						height: unit
// 					})
// 					.toBuffer()
// 				var head_layer = await sharp(edit_image)
// 					.extract({
// 						left: unit*5,
// 						top: unit,
// 						width: unit,
// 						height: unit
// 					})
// 					.toBuffer()
// 				var hair = await sharp(edit_image)
// 					.extract({
// 						left: unit*5,
// 						top: 6/8*unit,
// 						width: unit,
// 						height: 2/8*unit
// 					})
// 					.toBuffer()
// 				var head_side = await sharp(edit_image)
// 					.extract({
// 						left: 4/8*unit,
// 						top: unit,
// 						width: 4/8*unit,
// 						height: unit
// 					})
// 					.toBuffer()
// 				var head_side_layer = await sharp(edit_image)
// 					.extract({
// 						left: (4+1/4)*unit,
// 						top: unit,
// 						width: 4/8*unit,
// 						height: unit
// 					})
// 					.toBuffer()
// 				var neck = await sharp(edit_image)
// 					.extract({
// 						left: unit*2.5+(1/8*unit),
// 						top: unit*2+(1/8*unit),
// 						width: 6/8*unit,
// 						height: 1/8*unit
// 					})
// 					.toBuffer()
// 				var body = await sharp(edit_image)
// 					.extract({
// 						left: unit*2.5,
// 						top: unit*2.5,
// 						width: unit,
// 						height: unit*1.5
// 					})
// 					.toBuffer()
// 				var arm1 = await sharp(edit_image)
// 					.extract({
// 						left: unit*2,
// 						top: unit*2.5,
// 						width: 3/8*unit,
// 						height: unit*1.5
// 					})
// 					.toBuffer()
// 				var arm2 = await sharp(edit_image)
// 					.extract({
// 						left: unit*3.5,
// 						top: unit*2.5,
// 						width: 3/8*unit,
// 						height: unit*1.5
// 					})
// 					.toBuffer()
// 				var leg1 = await sharp(edit_image)
// 					.extract({
// 						left: 0,
// 						top: unit*2.5,
// 						width: 3/8*unit,
// 						height: unit*1.5
// 					})
// 					.toBuffer()
// 				var pants = await sharp(edit_image)
// 					.extract({
// 						left: 5/8*unit,
// 						top: unit*2.5,
// 						width: 6/8*unit,
// 						height: 1/2*unit
// 					})
// 					.toBuffer()
// 				var leg2 = await sharp(edit_image)
// 					.extract({
// 						left: unit*1.5,
// 						top: unit*2.5,
// 						width: 3/8*unit,
// 						height: unit*1.5
// 					})
// 					.toBuffer()

// 				var composition = sharp({
// 					create: {
// 						width: 2*unit,
// 						height: 4*unit,
// 						channels: 4,
// 						background: Color('#'+hex)
// 					}
// 					})

// 					.composite([
// 						{input: head, left: 4/8*unit, top: 1/16*unit},
// 						{input: head_layer, left: 8/16*unit, top: 2/16*unit},
// 						{input: hair, left: 8/16*unit, top: 0/16*unit},
// 						{input: head_side, left: 0/8*unit, top: 1/8*unit},
// 						{input: head_side_layer, left: 0/8*unit, top: 1/8*unit},
// 						{input: neck, left: 3/8*unit, top: 9/8*unit},
// 						{input: body, left: 2/8*unit, top: 10/8*unit},
// 						{input: arm1, left: 0/8*unit, top: 11/8*unit},
// 						{input: arm2, left: 9/8*unit, top: 11/8*unit},
// 						{input: leg1, left: 2/8*unit, top: 22/8*unit},
// 						{input: leg2, left: 6/8*unit, top: 22/8*unit},
// 						{input: pants, left: 2/8*unit, top: 22/8*unit},
						
// 					])		
// 					.png()
// 					.toBuffer()
// 				console.log(composition)
// 				return await composition
// 		})})});

			// let texture_url = JSON.parse(Buffer.from(profile['properties'][0]['value'], 'base64').toString())['textures']['SKIN']['url']
			// let response = await fetch(texture_url)
			// let arrayBuffer = await response.arrayBuffer()

			// console.log(arrayBuffer)
			


// }


app.get('/avatar/', cors(), async function(req,res) {
	// res.send('test')
	// res.send(req.params)
	console.log(req.query)
	size = parseInt(req.query.size)
	color = req.query.color
	name = req.query.uuid

	console.log(name)
	console.log(size)
	console.log(color)

	// if (username.match('^[a-zA-Z0-9_]{1,16}$',username)) {
	// 	// let id = 
	// } else {
	// 	id = username
	// }

	buffer_fetch = fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
	.then(response => response.json())
	.then(async function (data) {
		console.log(data)

		// return 'testa'

		return fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${data['id']}`)
		.then(response => response.json())
		.then(async function (data) {
			console.log(data)
			let texture_url = JSON.parse(Buffer.from(data['properties'][0]['value'], 'base64').toString())['textures']['SKIN']['url']
			console.log(texture_url)
			// return 'teaststtatat'
			return fetch(texture_url)
			.then(response => response.arrayBuffer())
			.then(async function (data) {
				console.log(data)
				// return 'teataaaa'
				return data
	})})});


	buffer = Buffer.from(await buffer_fetch, 'base64')

	const unit = 64

	const edit_image = await sharp(buffer)
		.resize({
			width:8*unit,
			height:8*unit,
			channels:4,
			kernel: sharp.kernel.nearest})
		// .raw()
		.toBuffer()

	let head = await sharp(edit_image)
		.extract({
			left: unit,
			top: unit,
			width: unit,
			height: unit
		})
		.toBuffer()
	let head_layer = await sharp(edit_image)
		.extract({
			left: unit*5,
			top: unit,
			width: unit,
			height: unit
		})
		.toBuffer()
	let hair = await sharp(edit_image)
		.extract({
			left: unit*5,
			top: 6/8*unit,
			width: unit,
			height: 2/8*unit
		})
		.toBuffer()
	let head_side = await sharp(edit_image)
		.extract({
			left: 4/8*unit,
			top: unit,
			width: 4/8*unit,
			height: unit
		})
		.toBuffer()
	let head_side_layer = await sharp(edit_image)
		.extract({
			left: (4+1/4)*unit,
			top: unit,
			width: 4/8*unit,
			height: unit
		})
		.toBuffer()
	let neck = await sharp(edit_image)
		.extract({
			left: unit*2.5+(1/8*unit),
			top: unit*2+(1/8*unit),
			width: 6/8*unit,
			height: 1/8*unit
		})
		.toBuffer()
	let body = await sharp(edit_image)
		.extract({
			left: unit*2.5,
			top: unit*2.5,
			width: unit,
			height: unit*1.5
		})
		.toBuffer()
	let arm1 = await sharp(edit_image)
		.extract({
			left: unit*2,
			top: unit*2.5,
			width: 3/8*unit,
			height: unit*1.5
		})
		.toBuffer()
	let arm2 = await sharp(edit_image)
		.extract({
			left: unit*3.5,
			top: unit*2.5,
			width: 3/8*unit,
			height: unit*1.5
		})
		.toBuffer()
	let leg1 = await sharp(edit_image)
		.extract({
			left: 0,
			top: unit*2.5,
			width: 3/8*unit,
			height: unit*1.5
		})
		.toBuffer()
	let pants = await sharp(edit_image)
		.extract({
			left: 5/8*unit,
			top: unit*2.5,
			width: 6/8*unit,
			height: 1/2*unit
		})
		.toBuffer()
	let leg2 = await sharp(edit_image)
		.extract({
			left: unit*1.5,
			top: unit*2.5,
			width: 3/8*unit,
			height: unit*1.5
		})
		.toBuffer()










	var composition = await sharp({
		create: {
			width: size,
			height: size,
			channels: 4,
			background: Color('#'+color)
		}
		})

		.composite([
			{input: head, left: 4/8*unit, top: 2/16*unit},
			{input: head_layer, left: 8/16*unit, top: 3/16*unit},
			{input: hair, left: 8/16*unit, top: 1/16*unit},
			{input: head_side, left: 0/8*unit, top: 3/16*unit},
			{input: head_side_layer, left: 0/8*unit, top: 3/16*unit},
			{input: neck, left: 3/8*unit, top: 9/8*unit},
			{input: body, left: 2/8*unit, top: 10/8*unit},
			{input: arm1, left: 0/8*unit, top: 11/8*unit},
			{input: arm2, left: 9/8*unit, top: 11/8*unit},
			{input: leg1, left: 2/8*unit, top: 22/8*unit},
			{input: leg2, left: 6/8*unit, top: 22/8*unit},
			{input: pants, left: 2/8*unit, top: 22/8*unit}
		])		
		.png()
		.toBuffer()

	res.write(composition, 'binary')
	res.end(null,'binary')		
})