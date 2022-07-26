import express from 'express';
import cors    from 'cors';

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    routes() {
        this.app.use( '/api/usuarios', require('../routes/user.js') );
    }

    middlewares() {

        // CORS
        this.app.use( cors() );
        //  Directorio público
        this.app.use( express.static('public') );
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor web escuchando en http://localhost:${ this.port }`);
        })
    }
}

export {
    Server
}