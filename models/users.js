const {model, Schema} = require('mongoose')


const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name cannot be empty']
    },
    email: {
        type: String,
        required: [true, 'The email cannot be empty'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password cannot be empty'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    }
});



UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model( 'User', UserSchema )
