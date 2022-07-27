
import { check } from 'express-validator'
import Router from 'express';
export const router = Router();

import { usuariosGet,
         usuariosPost, 
         usuariosPut, 
         usuariosDelete
       } from '../controllers/usuarios.js';
import { validarCampos } from '../middlewares/validar-campos.js';

router.get( '/', usuariosGet );

router.put( '/:id', usuariosPut );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y más de 6 letras').isLength({ min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
],
usuariosPost );

router.delete( '/', usuariosDelete );
