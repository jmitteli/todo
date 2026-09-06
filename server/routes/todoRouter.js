import { auth } from '../helper/auth.js'
import { pool } from '../helper/db.js'
import { Router } from 'express'
import { getTasks,createTask, deleteTask } from '../controllers/TaskController.js'

const router = Router()

router.get('/tasks',getTasks)
router.post('/tasks', auth, createTask)
router.delete('/tasks/:id', auth, deleteTask)

export default router