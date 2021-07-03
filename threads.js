const OS = require('os')
process.env.UV_THREADPOOL_SIZE = OS.cpus().length

console.log(OS.cpus().length)
const crypto = require('crypto')
/* THE THREADPOOL
	The threadpool of the libuv has by default only 4 threads, so if you run this script
	the functions will run in groups of 4
*/
const start = Date.now()
/* FIRST FOUR */
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('1:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('2:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('3:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('4:', Date.now()-start);
})

/* SECOND FOUR */
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('5:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('6:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('7:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('8:', Date.now()-start);
})

/* THIRD FOUR */
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('9:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('10:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('11:', Date.now()-start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
	console.log('12:', Date.now()-start);
})
