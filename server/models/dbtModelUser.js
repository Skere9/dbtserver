import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    firstName: {
        type: String,
        required: [true, 'Enter a first name'],
        maxlength: 40
    },
    lastName: {
        type: String,
        required: [true, 'Enter a last name'],
        maxlength: 60
    },
    email: {
        type: String,
        unique: true,
        required: false,
        maxlength: 60
    },
    userName: {
        type: String,
        unique: true,
        required: [true, 'Enter a user name'],
        maxlength: 60
    },
    passWord: {
        type: String,
        required: [true, 'Enter a password'],
        maxlength: 60
    },
    bio: {
        type: String,
        required: false
    },
    keywords: {
        type: String,
        required: false
    },
    emailValidated: {
        type: Boolean,
        default: false,
        required: false
    },
    displayLoggedInMessage: {
        type: Boolean,
        default: true,
        required: false
    },
    role: {
        type: String,
        default: 'VISITOR',
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});