const os = require('os')
const cluster = require('cluster');
const app = require('express')();

if(cluster.isMaster){
	const cpunumber = os.cpus().length
	for(let i = 0; i < cpunumber; i++){
		cluster.fork()
		console.log('forked cluster')
	}
}else {
	app.get('/',(req,res)=>{
		res.send('hello world')
	})
	
	app.listen(3000, ()=>{
		console.log('server running on port 3000')
	})
}
