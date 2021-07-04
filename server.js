const app = require('express')();

async function doWork(duration){
	const start = Date.now()
	while(Date.now()-start < duration){	}
}

app.get('/', async (req,res)=>{
	await doWork(10000)
	res.send('hello world')
})
app.listen(3000,()=>{
	console.log('running on port 3000')
})