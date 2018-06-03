import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlanSchema = new Schema({

    // MongoDB will automatically
    // add a primary key column of "_id"

    id: {
        type: Number,
        required: [ true, 'Enter an id']
    },
    title: {
        type: String,
        required: [ true, 'Enter a title'],
        maxlength: [ 60, 'Must be 60 characters or less in length.']
    },
    exams: {
        type: String,
        required: [ true, 'Enter the number of exams under this plan']
    },
    duration: {
        type: String,
        required: [true, 'Enter a description of the duration of the plan, in months'],
        maxlength: [ 20, 'Must be 20 characters or less in length.']
    },
    price: {
        type: Number,
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});