import { response, request } from 'express';
import bcryptjs              from 'bcryptjs';



import Usuario from '../models/usuario.js';

const usuariosGet = ( req = request, res = response ) => {

    const { nombre, apellido, sobrenombre = 'no name' } = req.query;

    res.status(200).json( {
        msg: 'get API - controlador',
        nombre, 
        apellido,
        sobrenombre
    } );
}




const usuariosPost = async( req, res = response ) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        return res.status(400).json({
            msg: 'Este correo ya está registrado'
        })
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Grabar en base de datos
    await usuario.save();

    // Retorno
    res.status(200).json({
        msg: 'post API - controlador',
        usuario
    });
}





const usuariosPut = ( req, res = response ) => {
    const { id } = req.params;

    res.status(200).json( {
        msg: 'put API - controlador',
        id
    } );
}

const usuariosDelete = ( req, res = response ) => {
    res.status(200).json( {
        msg: 'delete API - controlador'
    } );
}

export {
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete
}