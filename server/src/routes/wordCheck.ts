import express from 'express';
const {
    processWord
} = require('../controller/wordCheck');


const {
    validateWordCheckerInput
} = require('../middleware/validation/wordCheckValidation');

const router = express.Router();

function routes() {
    router.post('/process-word', validateWordCheckerInput, processWord);
    return router;
};

module.exports = routes;


