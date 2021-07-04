const app = require('express')();

/* This is where nodejs shouldn't be used.
	Processes that are cpu intensive will block the server and delay other requests since the event loop is single threaded.

*/
function doWork(duration){
	const start = Date.now()
	while(Date.now()-start < duration){	}
}

app.get('/', (req,res)=>{
	doWork(10000)
	res.send('hello world')
})
app.listen(3000,()=>{
	console.log('running on port 3000')
})