import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AnswerSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    answerId: {
        // The primary identifier for an answer
        type: Number,
        required: [true, 'The primary key']
    },
    questionId: {
        // The foriegn key identifier for a question
        type: Number,
        required: [true, '']
    },
    answerText: {
        // The text of this answer
        type: string,
        required: [true, ''],
    },
    isCorrect: {
        // Is_correct is 1 if is_correct answers the question, 0 if incorrect
        type: Boolean
    },
    rationale: {
        // The explanation as to why the answer texts does or does not answer the question
        type: String,
        required: false
    },
    vid: {
        // The current answer_revision.vid version identifier.
        type: Number,
        required: [true, '']
    },
    status: {
        // Status is 1 if published, 0 if not published.
        type: Number,
        required: [true, '']
    },
    created_date: {
        // The Unix timestamp when the answer was created
        type: Date,
        default: Date.now
    }
});