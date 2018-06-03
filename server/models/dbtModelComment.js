import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CommentSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    // postId is the foreign key to the Post schema
    postId: {
        type: Number,
        required: [true, 'Enter the postId for the post to which this comment applies']
    },
    userId: {
        type: Number,
        required: [true, 'Enter the userId of the comment author']
    },
    commmentDate: {
        type: Date,
        default: Date.now
    },
    commentContent: {
        type: String,
        required: [true, 'Enter the contents of the comment itself']
    },
    keywords: {
        type: String,
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});