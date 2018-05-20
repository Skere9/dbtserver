import { 
    getUsers,
    addNewUser,
    getUserWithId,
    updateUser,
    deleteUser,
    getExams,
    addNewExam,
    getExamWithId,
    updateExam,
    deleteExam,
    getPlans,
    addNewPlan,
    getPlanWithId,
    updatePlan,
    deletePlan
} from '../controllers/dbtController';
import { getCiphers } from 'tls';

const routes = (app) => {

    app.route('/users')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `); 
            next();
        }, getUsers)
        // POST endpoint 
        .post(addNewUser);

    app.route('/user/:userId')
        // get specific user
        .get(getUserWithId)
        .put(updateUser)
        .delete(deleteUser);

    app.route('/exams')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `); 
            next();
        }, getExams)
        // POST endpoint 
        .post(addNewExam);

    app.route('/exam/:examId')
        // get specific exam
        .get(getExamWithId)
        .put(updateExam)
        .delete(deleteExam);

    app.route('/plans')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl} `);
            console.log(`Request type: ${req.method} `); 
            next();
        }, getPlans)
        // POST endpoint 
        .post(addNewPlan);

    app.route('/plan/:planId')
        // get specific plan
        .get(getPlanWithId)
        .put(updatePlan)
        .delete(deletePlan);
}

export default routes;
