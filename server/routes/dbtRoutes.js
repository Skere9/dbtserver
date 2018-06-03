import {
    signIn,
    getUsers,
    getUsersCount,
    isUserEmailUnique,
    addNewUser,
    getUserWithId,
    updateUser,
    deleteUser,
    getExams,
    getExamsCount,
    addNewExam,
    getExamWithId,
    updateExam,
    deleteExam,
    getPlans,
    getPlansCount,
    addNewPlan,
    getPlanWithId,
    updatePlan,
    deletePlan,
    getPosts,
    getPostsCount,
    addNewPost,
    getPostWithId,
    updatePost,
    deletePost,
    getComments,
    getCommentsCount,
    addNewComment,
    getCommentWithId,
    updateComment,
    deleteComment
} from '../controllers/dbtController';
import { getCiphers } from 'tls';

const routes = (app) => {

    //
    // Sign in
    //

    app.route('/signIn/:userName/:passWord')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl} `);
        console.log(`Request type: ${req.method} `);
        next();
    }, signIn)
    ;

    // 
    // User routing
    // 

    app.route('/users')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getUsers)
        // POST endpoint 
        .post(addNewUser);

    app.route('/users/count')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getUsersCount);

    app.route('/users/unique/:email')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, isUserEmailUnique);

    app.route('/user/:userId')
        // get specific user
        .get(getUserWithId)
        .put(updateUser)
        .delete(deleteUser);

    // 
    // Exam routing
    // 

    app.route('/exams')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getExams)
        // POST endpoint 
        .post(addNewExam);

    app.route('/exams/count')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getExamsCount);

    app.route('/exam/:examId')
        // get specific exam
        .get(getExamWithId)
        .put(updateExam)
        .delete(deleteExam);

    // 
    // Plan routing
    // 
    app.route('/plans')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getPlans)
        // POST endpoint 
        .post(addNewPlan);

    app.route('/plans/count')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getPlansCount);

    app.route('/plan/:planId')
        // get specific plan
        .get(getPlanWithId)
        .put(updatePlan)
        .delete(deletePlan);

    // 
    // Post routing
    // 

    app.route('/posts')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getPosts)
        // POST endpoint 
        .post(addNewPost);

    app.route('/posts/count')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getPostsCount);

    app.route('/post/:postId')
        // get specific post
        .get(getPostWithId)
        .put(updatePost)
        .delete(deletePost);

    // 
    // Comment routing
    // 

    app.route('/comments')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getComments)
        // POST endpoint 
        .post(addNewComment);

    app.route('/comments/count')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `);
            next();
        }, getCommentsCount);

    app.route('/comment/:commentId')
        // get specific comment
        .get(getCommentWithId)
        .put(updateComment)
        .delete(deleteComment);

}

export default routes;
