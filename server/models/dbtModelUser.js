import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    userName: {
        type: String,
        required: 'Enter a user name'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});