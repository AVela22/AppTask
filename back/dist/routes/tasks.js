"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get All tasks
 */
router.get('/tasks', _tasks.getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get How many tastk we have
 */
router.get('/tasks/count', _tasks.getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get a specific task by ID
 */
router.get('/tasks/:id', _tasks.getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Add ew task
 */
router.post('/tasks', _tasks.saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task
 */
router["delete"]('/tasks/:id', _tasks.deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Update a Taks
 */
router.put('/tasks/:id', _tasks.updateTask);
var _default = exports["default"] = router;