const jsonwebtoken = require('jsonwebtoken')


const generateJwt = async(id) => {

    
    return new Promise((resolve, reject) => {


        const payload = {id};

        jsonwebtoken.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '7h'
        }, (err, token) => {

            if (err) {
                reject('Token can´t be made')
                console.log(err);
            }else{
                resolve(token)
            }

        })

    })


}


module.exports = generateJwt;