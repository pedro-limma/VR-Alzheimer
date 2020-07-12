const express = require('express');

const routes = express.Router();

const StudentController = require('./controllers/StudentController');
const SessionController = require('./controllers/SessionController');
const PatientController = require('./controllers/PatientController');

routes.post('/session', SessionController.create);
routes.post('/students', StudentController.create);
routes.post('/patients/create', PatientController.create);
routes.get('/patients/index', PatientController.index);



module.exports = routes;