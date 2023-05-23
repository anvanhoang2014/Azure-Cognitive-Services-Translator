let jwt = require('jsonwebtoken');
    
/**
 * @description: Middleware to check if the user is authenticated
 */

const isAuthenticated = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
console.log(token);

    if (token) {
        
        /**
         * TODO: Check if the token is valid
         */
        // jwt.verify(token, process.env.SECRET, (err, decoded) => {
        //     if (err) {
        //         let err = new Error('Unauthorized');
        //         console.log(process.env.SECRET);
        //         console.log(token);
        //         console.log(decoded);
        //         err.status = 401;
        //         next(err);
        //     } else {
        //         req.decoded = decoded;
        //         next();
        //     }

        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);

        }
        if(token === process.env.SECRET){
            next();
        } else {
            let err = new Error('Token is not valid or expired (token is not equal to p@ssw0rd))');
            err.status = 401;
            next(err);
        }
        
    } else {
        let err = new Error('Token not set in header (token is not equal to p@ssw0rd)');
        err.status = 401;
        next(err);
    }
}


module.exports = isAuthenticated;