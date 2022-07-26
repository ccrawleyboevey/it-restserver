
import Router from 'express';

const router = Router();

this.router.get( '/', ( req, res ) => {
    res.json( {
        ok: true,
        msg: 'get API'
    } );
});

this.router.put( '/', ( req, res ) => {
    res.status(400).json( {
        ok: true,
        msg: 'put API'
    } );
});

this.router.post( '/', ( req, res ) => {
    res.status(201).json( {
        ok: true,
        msg: 'post API'
    } );
});

this.router.delete( '/', ( req, res ) => {
    res.json( {
        ok: true,
        msg: 'delete API'
    } );
});

export {
    router
}
