const https = require('https')

const start = Date.now()
/* THE OS
	Any processes that involves the network doesn't involve the libuv's threadpool.
	So these requests are actually handled by the OS.
	On the threads.js file, I mentioned that the libuv has by default 4 threads so processes get executed in groups of 4.
	here, since the os handles the process and not the libuv threadpool, the processes will no longer exceute in groups of 4 
	but instead would depend on the OS and how many it can process.
*/
function doRequest(){
	https
		.request('https://www.google.com/', res=>{
			res.on('data', ()=>{});
			res.on('end', ()=>{
				console.log(Date.now()-start)
			})
		})
		.end();
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()