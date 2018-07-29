import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TopicSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    topicId: {
        // The primary identifier for a topic
        type: Number,
        required: [true, 'The primary key']
    },
    examId: {
        type: Number,
        required: [true, '']
    },
    topicTitle: {
        type: string,
        required: [true, 'The title for this topic.']
    },
    forMoreInfoSee: {
        type: string,
        required: [false, 'A reference to study materials on ths topic.']
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