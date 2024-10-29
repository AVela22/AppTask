import {Router} from 'express'
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get All tasks
 */
router.get('/tasks',getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get How many tastk we have
 */
router.get('/tasks/count',getTaskCount)

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get a specific task by ID
 */
router.get('/tasks/:id',getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Add ew task
 */
router.post('/tasks',saveTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task
 */
router.delete('/tasks/:id',deleteTask)

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Update a Taks
 */
router.put('/tasks/:id',updateTask)


export default router 