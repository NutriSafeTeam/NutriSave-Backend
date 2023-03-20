import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const { Authorization } = req.headers;
    
    if(!Authorization) {
        return res.status(401).json({
            errors: ['unauthorized'],
        });
    }

    const [, token ] = Authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;
        req.userId = id;
        req.userEmail = email;
        return next();
    } catch (e) {
        if(!Authorization) {
            return res.status(401).json({
                errors: ['unauthorized'],
            });
        }
    }
    
};