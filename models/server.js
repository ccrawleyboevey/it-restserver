import express          from 'express';
import cors             from 'cors';
import { router }       from '../routes/usuarios.js';
import { dbConnection } from '../database/config.js';

class Server {

    constructor() {
        this.app          = express();
        this.port         = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        //  Lecturay parseo del body
        this.app.use( express.json() );

        //  Directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.usuariosPath, router );
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