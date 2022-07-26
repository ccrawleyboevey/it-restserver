
import Router from 'express';
export const router = Router();

import { usuariosGet,
         usuariosPost, 
         usuariosPut, 
         usuariosDelete
       } from '../controllers/usuarios.js';

router.get( '/', usuariosGet );

router.put( '/:id', usuariosPut );

router.post( '/', usuariosPost );

router.delete( '/', usuariosDelete );
