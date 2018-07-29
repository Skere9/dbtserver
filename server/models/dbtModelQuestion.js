import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuestionSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    questionId: {
        // The primary identifier for a question
        type: Number,
        required: [true, 'The primary key']
    },
    examId: {
        type: Number,
        required: [true, '']
    },
    topicId: {
        type: Number,
        required: [true, '']
    },
    questionText: {
        type: string,
        required: [false, '']
    },
    explanationIfWrong: {
        type: string,
        required: [false, '']
    },
    vid: {
        type: Number,
        required: [false, '']
    },
    status: {
        type: Number,
        required: [false, '']
    },
    created_date: {
        // The Unix timestamp when the answer was created
        type: Date,
        default: Date.now
    }
});