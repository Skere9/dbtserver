import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlanSchema = new Schema({

    id: {
        type: Number,
        required: 'Enter an id'
    },
    title: {
        type: String,
        required: 'Enter a title'
    },
    exams: {
        type: String,
        required: 'Enter the number of exams under this plan'
    },
    duration: {
        type: String,
        required: 'Enter a description of the duration of the plan, in months'
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});