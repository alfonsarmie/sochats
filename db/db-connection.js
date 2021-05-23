const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_CNN}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

    } catch (error) {
        console.log(error);
        console.log('Error on database');   
    }

}



    
module.exports = dbConnection;







