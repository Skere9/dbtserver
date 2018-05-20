import mongoose from 'mongoose';
import { UserSchema } from '../models/dbtModelUser';
import { ExamSchema } from '../models/dbtModelExam';
import { PlanSchema } from '../models/dbtModelPlan';

const User = mongoose.model('User', UserSchema);
const Exam = mongoose.model('Exam', ExamSchema);
const Plan = mongoose.model('Plan', PlanSchema);

// 
// User functions
// 
export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
};

export const getUserWithId = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
};

export const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: 'Successfully deleted user.'} );
    })
};

// 
// Exam functions
// 

export const addNewExam = (req, res) => {
    let newExam = new Exam(req.body);

    newExam.save((err, exam) => {
        if (err) {
            res.send(err);
        }
        res.json(exam);
    });
};

export const getExams = (req, res) => {
    Exam.find({}, (err, exam) => {
        if (err) {
            res.send(err);
        }
        res.json(exam);
    })
};

export const getExamWithId = (req, res) => {
    Exam.findById(req.params.examId, (err, exam) => {
        if (err) {
            res.send(err);
        }
        res.json(exam);
    })
};

export const updateExam = (req, res) => {
    Exam.findOneAndUpdate({ _id: req.params.examId }, req.body, { new: true }, (err, exam) => {
        if (err) {
            res.send(err);
        }
        res.json(exam);
    })
};

export const deleteExam = (req, res) => {
    Exam.remove({ _id: req.params.examId }, (err, exam) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: 'Successfully deleted exam.'} );
    })
};

// 
// Plan functions
// 

export const addNewPlan = (req, res) => {
    let newPlan = new Plan(req.body);

    newPlan.save((err, plan) => {
        if (err) {
            res.send(err);
        }
        res.json(plan);
    });
};

export const getPlans = (req, res) => {
    Plan.find({}, (err, plan) => {
        if (err) {
            res.send(err);
        }
        res.json(plan);
    })
};

export const getPlanWithId = (req, res) => {
    Plan.findById(req.params.planId, (err, plan) => {
        if (err) {
            res.send(err);
        }
        res.json(plan);
    })
};

export const updatePlan = (req, res) => {
    Plan.findOneAndUpdate({ _id: req.params.planId }, req.body, { new: true }, (err, plan) => {
        if (err) {
            res.send(err);
        }
        res.json(plan);
    })
};

export const deletePlan = (req, res) => {
    Plan.remove({ _id: req.params.planId }, (err, plan) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: 'Successfully deleted plan.'} );
    })
};
