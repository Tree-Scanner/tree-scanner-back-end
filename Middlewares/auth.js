const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({error: 'token nao foi informado'});

    //

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
    return res.status(401).send({error: 'token error'});

    const [ scheme, token] = parts;

    if(!/^Bearer$^/i.test(scheme))
        return res.status(401).send({error: 'token mal informado'});

    jwt.verify(token, authConfig.secret, (err, decoded) =>{

    })
};