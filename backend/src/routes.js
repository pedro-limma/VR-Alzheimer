const express = require('express');

const routes = express.Router();

const StudentController = require('./controllers/StudentController');
const SessionController = require('./controllers/SessionController');
const PatientController = require('./controllers/PatientController');
const FeedbackController = require('./controllers/FeedbackController');

routes.post('/session', SessionController.create);
routes.post('/students', StudentController.create);
routes.post('/patients/create', PatientController.create);
routes.get('/patients/index', PatientController.index);
routes.post('/feedback/create', FeedbackController.create);
routes.get('/feedback/index', FeedbackController.index);
routes.delete('/feedback/delete/:id', FeedbackController.delete);



module.exports = routes;