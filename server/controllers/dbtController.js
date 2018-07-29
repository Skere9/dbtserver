import mongoose from 'mongoose';
import { UserSchema } from '../models/dbtModelUser';
import { ExamSchema } from '../models/dbtModelExam';
import { PlanSchema } from '../models/dbtModelPlan';
import { PostSchema } from '../models/dbtModelPost';
import { CommentSchema } from '../models/dbtModelComment';

const User = mongoose.model('User', UserSchema);
const Exam = mongoose.model('Exam', ExamSchema);
const Plan = mongoose.model('Plan', PlanSchema);
const Post = mongoose.model('Post', PostSchema);
const Comment = mongoose.model('Comment', CommentSchema);

//
// SignIn function
//

export const signIn = (req, res) => {
    // Look for user
    // by username
    // and password
    // TODO: IN WORK
    console.log('**************************************************************************************');
    console.log(req.params.userName);
    console.log(req.params.passWord);
    User.findOne({ 'userName': req.params.userName, 'passWord': req.params.passWord }, 'userName passWord', function (err, user) {
        let foundIt = false;
        if (err) {
            return res.send(err);
        }
        let theAnswer;
        console.log(user);
        if (user) {
            foundIt = true;
            theAnswer = user;
        } else {
            foundIt = false;
            theAnswer = { _id: 1, message: 'Failed login attempt.' };
            // theAnswer = JSON.stringify(theTemp);
        }
        console.log('++++++++++++++++++++++++');
        console.log(theAnswer);
        // res.send(theAnswer);
        if (foundIt) {
            // The signIn was successful.
            // And yes, I could have placed this 
            // logic within the IF above, but 
            // the levels of nesting seemed to be 
            // gettting a bit hard to read 
            // so I did it this way.  
            User.findById(user._id, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            })
        } else {
            res.send(theAnswer);
        }
    });
    console.log('Remember - this executes before the end.');
};

// 
// User functions
// 
export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            // Original: 11000
            console.log(err);
            console.log('----');
            console.log(JSON.stringify(err));
            console.log('-----');
            console.log(JSON.stringify(err).indexOf('userName_1 dup key'));
            console.log('--');
            console.log(JSON.stringify(err).indexOf('email_1 dup key'));
            console.log('-------');
            if (JSON.stringify(err).indexOf('email_1 dup key') != -1) {
                res.send(
                    {
                        'code': 50,
                        'message': 'This email address is already in the database.  Please enter another.'
                    }
                )
            } else if (JSON.stringify(err).indexOf('userName_1 dup key') != -1) {
                res.send(
                    {
                        'code': 51,
                        'message': 'This user name is already in the database.  Please enter another.'
                    }
                )
                // if (err.code === 11010) {
                //     res.send(
                //         {
                //             'code': 11000,
                //              'message': 'This email address is already in the database.  Please enter another.'
                //         }
                //     );
            } else {
                res.send(err);
            }
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

export const getUsersCount = (req, res) => {
    User.count({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    })
};

export const isUserEmailUnique = (req, res) => {
    // First, retrieve all users
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        // Next, check for where "req.params.email" is already prsent in the users array
        // TODO - FINISH THIS - SKERE
        //
        res.json(result);
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
        res.json({ message: 'Successfully deleted user.' });
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

export const getExamsCount = (req, res) => {
    Exam.count({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
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
        res.json({ message: 'Successfully deleted exam.' });
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

export const getPlansCount = (req, res) => {
    Plan.count({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
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
        res.json({ message: 'Successfully deleted plan.' });
    })
};

// 
// Post functions
// 

export const addNewPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};

export const getPosts = (req, res) => {
    // NOTE: This function
    // returns posts 
    // in reverse chronological
    // order, showing the most
    // recent post first
    Post.find({}, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    }).sort({ postDate: -1 })
        .exec(function (err, docs) { })
};

export const getPostsCount = (req, res) => {
    Post.count({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    })
};

export const getPostWithId = (req, res) => {
    Post.findById(req.params.postId, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    })
};

export const updatePost = (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, req.body, { new: true }, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    })
};

export const deletePost = (req, res) => {
    Post.remove({ _id: req.params.postId }, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted post.' });
    })
};

// 
// Comment functions
// 

export const addNewComment = (req, res) => {
    let newComment = new Comment(req.body);

    newComment.save((err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
};

export const getComments = (req, res) => {
    // NOTE: This function
    // returns comments 
    // in reverse chronological
    // order, showing the most
    // recent first
    Comment.find({}, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    }).sort({ commentDate: -1 })
        .exec(function (err, docs) { })

};

export const getCommentsCount = (req, res) => {
    Comment.count({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    })
};

export const getCommentWithId = (req, res) => {
    Comment.findById(req.params.commentId, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    })
};

export const updateComment = (req, res) => {
    Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true }, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    })
};

export const deleteComment = (req, res) => {
    Comment.remove({ _id: req.params.commentId }, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted comment.' });
    })
};
