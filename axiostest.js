// const axios = require('axios')
// const sharp = require('sharp')

// async function get(url) {
// 	try {
// 		return await axios.get(url)
// 	} catch (e) {
// 		console.error(e)
// 	}
// }
// async function testa() {
// 	json = await get('https://sessionserver.mojang.com/session/minecraft/profile/5b97b9e2d78242f3a5b1549b74330103')
// 	// console.log(json['data']['properties'][0]['value'])
// 	var texture_url = JSON.parse(Buffer.from(json['data']['properties'][0]['value'], 'base64').toString())['textures']['SKIN']['url']
// 	var response = await axios.get(texture_url, {responseType:'arraybuffer'})
// 	var buffer = await Buffer.from(response.data, 'base64')
// 	var unit = 64
// 	var edit_image = await sharp(buffer)
// 		.resize({
// 			width:8*unit,
// 			height:8*unit,
// 			channels:4,
// 			kernel: sharp.kernel.nearest})
// 		.toBuffer();


// 	// console.log(buffer2)
	
// 	var head = await sharp(edit_image)
// 		.extract({
// 			left: unit,
// 			top: unit,
// 			width: unit,
// 			height: unit
// 		})
// 		.toBuffer()
// 	var head_layer = await sharp(edit_image)
// 		.extract({
// 			left: unit*5,
// 			top: unit,
// 			width: unit,
// 			height: unit
// 		})
// 		.toBuffer()
// 	var hair = await sharp(edit_image)
// 		.extract({
// 			left: unit*5,
// 			top: 6/8*unit,
// 			width: unit,
// 			height: 2/8*unit
// 		})
// 		.toBuffer()
// 	var head_side = await sharp(edit_image)
// 		.extract({
// 			left: 4/8*unit,
// 			top: unit,
// 			width: 4/8*unit,
// 			height: unit
// 		})
// 		.toBuffer()
// 	var head_side_layer = await sharp(edit_image)
// 		.extract({
// 			left: (4+1/4)*unit,
// 			top: unit,
// 			width: 4/8*unit,
// 			height: unit
// 		})
// 		.toBuffer()
// 	var neck = await sharp(edit_image)
// 		.extract({
// 			left: unit*2.5+(1/8*unit),
// 			top: unit*2+(1/8*unit),
// 			width: 6/8*unit,
// 			height: 1/8*unit
// 		})
// 		.toBuffer()
// 	var body = await sharp(edit_image)
// 		.extract({
// 			left: unit*2.5,
// 			top: unit*2.5,
// 			width: unit,
// 			height: unit*1.5
// 		})
// 		.toBuffer()
// 	var arm1 = await sharp(edit_image)
// 		.extract({
// 			left: unit*2,
// 			top: unit*2.5,
// 			width: 3/8*unit,
// 			height: unit*1.5
// 		})
// 		.toBuffer()
// 	var arm2 = await sharp(edit_image)
// 		.extract({
// 			left: unit*3.5,
// 			top: unit*2.5,
// 			width: 3/8*unit,
// 			height: unit*1.5
// 		})
// 		.toBuffer()
// 	var leg1 = await sharp(edit_image)
// 		.extract({
// 			left: 0,
// 			top: unit*2.5,
// 			width: 3/8*unit,
// 			height: unit*1.5
// 		})
// 		.toBuffer()
// 	var pants = await sharp(edit_image)
// 		.extract({
// 			left: 5/8*unit,
// 			top: unit*2.5,
// 			width: 6/8*unit,
// 			height: 1/2*unit
// 		})
// 		.toBuffer()
// 	var leg2 = await sharp(edit_image)
// 		.extract({
// 			left: unit*1.5,
// 			top: unit*2.5,
// 			width: 3/8*unit,
// 			height: unit*1.5
// 		})
// 		.toBuffer()



// 	var composition = sharp({
// 		create: {
// 			width: 2*unit,
// 			height: 4*unit,
// 			channels: 4,
// 			background: {r:0, g:0, b:255}
// 		}
// 		})

		
// 		.composite([
// 			{input: head, left: 4/8*unit, top: 1/8*unit},
// 			{input: head_layer, left: 8/16*unit, top: 2/16*unit},
// 			{input: hair, left: 8/16*unit, top: 0/16*unit},
// 			{input: head_side, left: 0/8*unit, top: 1/8*unit},
// 			{input: head_side_layer, left: 0/8*unit, top: 1/8*unit},
// 			{input: neck, left: 3/8*unit, top: 9/8*unit},
// 			{input: body, left: 2/8*unit, top: 10/8*unit},
// 			{input: arm1, left: 0/8*unit, top: 11/8*unit},
// 			{input: arm2, left: 9/8*unit, top: 11/8*unit},
// 			{input: leg1, left: 2/8*unit, top: 22/8*unit},
// 			{input: leg2, left: 6/8*unit, top: 22/8*unit},
// 			{input: pants, left: 2/8*unit, top: 22/8*unit},
			
// 		])		
// 		.toFile('output.png');

// }


// testa()





const fetch = require('node-fetch')

fetch(`https://api.mojang.com/users/profiles/minecraft/imadoofus`)
.then(response => response.json())
.then(data => {
	console.log(data)
	
	fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${data['id']}`)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})});

// fetch(`https://api.mojang.com/users/profiles/minecraft/imadoofus`)
// .then(response => response.json())
// .then(data => {
// 	fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${data['id']}`)
// 	.then(response => response.json())
// 	.then(data => {
// 		let texture_url = JSON.parse(Buffer.from(data['properties'][0]['value'], 'base64').toString())['textures']['SKIN']['url']
// 		fetch(`https://api.mojang.com/users/profiles/minecraft/imadoofus`)
// 		.then(response => response.arrayBuffer())
// 		.then(data => {
// 			let buffer = await Buffer.from(arrayBuffer, 'base64')
// 	})})});