import { response, request } from 'express';

const usuariosGet = ( req = request, res = response ) => {

    const { nombre, apellido, sobrenombre = 'no name' } = req.query;

    res.status(200).json( {
        msg: 'get API - controlador',
        nombre, 
        apellido,
        sobrenombre
    } );
}

const usuariosPost = ( req, res = response ) => {
    const { nombre, edad } = req.body;      // Desestructuración de los campos requeridos
    res.status(200).json( {
        msg: 'post API - controlador',
        nombre,
        edad
    } );
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