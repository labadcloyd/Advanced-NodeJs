const cluster = require('cluster');
const app = require('express')();

app.get('/',(req,res)=>{
	console.log()
})

app.listen(3000, ()=>{
	console.log('server running on port 3000')
})