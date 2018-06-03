import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExamSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    id: {
        type: Number,
        required: [true, 'Enter an id']
    },
    title: {
        type: String,
        required: [true, 'Enter a title'],
        maxlength: [60, 'Must be 60 characters or less in length.']
    },
    description: {
        type: String,
        required: [true, 'Enter a description']
    },
    questions: {
        type: String,
        required: [true, 'Enter a last name']
    },
    randomizeQuestions: {
        type: Boolean,
        required: false
    },
    keywords: {
        type: String,
        required: [true, 'Enter zero or more keywords']
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});