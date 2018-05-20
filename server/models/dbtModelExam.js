import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExamSchema = new Schema({

    id: {
        type: Number,
        required: 'Enter an id'
    },
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    questions: {
        type: String,
        required: 'Enter a last name'
    },
    randomizeQuestions: {
        type: Boolean
    },
    keywords: {
        type: String,
        required: 'Enter zero or more keywords'
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});