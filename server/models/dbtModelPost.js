import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    userId: {
        type: Number,
        required: 'Enter the userId of the post author'
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Enter a title',
        maxlength: 60
    },
    postContent: {
        type: String,
        required: 'Enter the contents of the post itself'
    },
    keywords: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});