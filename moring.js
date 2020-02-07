const cluster = require('cluster')
const process = require('process')
const os = require('os')
const http = require('http')
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
  console.log('主进程');

} else {
  let server = http.createServer((req, res) => {
    console.log(process.pid);
    res.write('hhh')
    res.end()
  })

  server.listen(3000)
}