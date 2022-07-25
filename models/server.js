import express from 'express';

const port = process.env.PORT;

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
        this.app.get( '/api', ( req, res ) => {
            res.send( 'Hola Mundo' );
        });
    }

    middlewares() {
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