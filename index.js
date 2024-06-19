const  express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');
const pty = require('node-pty');
const chokidar = require('chokidar');
const {Server:SocketServer} = require('socket.io')
const fs = require('fs/promises')
const http = require('http');
 
//import all the routes  declared in the routes directory.

const healthroute = require('./routes/test.js')

const apiroute =  require('./routes/app.js')


const app = express();


const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//entry point


var ptyProcess = pty.spawn('bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.INIT_CWD + '/user',
   
    env: process.env
  });

  const io = new SocketServer({
   
        cors: '*'
    })

    
    io.attach(server);

   

io.on('connection', (socket)=>{
   
    console.log('socket connected' , socket.id);

    socket.on('terminal:write',(data)=>{
      
        ptyProcess.write(data);
    })

    socket.on('file:changed',async ({path, content})=>{
        console.log("path", path)
        console.log("content", content)
      await fs.writeFile(`./user${path}`, content)
       
    })
})

ptyProcess.onData( data =>{
    console.log(data)
    io.emit('terminal:data',data)
  })


app.get('/', (req,res)=>{
    try {
        
        res.json({message: "Welcome To ServoBase , Server is running !"})
    } catch (error) {
        res.json(error)
    }
})

//use the routes that are imported above

app.use('/test', healthroute);
app.use('/api', apiroute);



server.listen(8080, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})


