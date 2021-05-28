const express = require('express')
const cors = require('cors');
const dbConnection = require('../db/db-connection');



class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);

        this.paths = {
            login : '/login',
        }

        //Connect to db
        this.dbConnect();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes()
        
    }



    middlewares() {

        // CORS
        this.app.use( cors() );

        // Read and parse the body      
        this.app.use( express.json() );
   
        // Public folder
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use(this.paths.login, require('../routes/auth'))
    }


    async dbConnect(){
        await dbConnection();
    }

    

    listen(){
        this.server.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }


}



module.exports = Server;