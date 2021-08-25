import * as studentsController from '../controllers/students.controller';
import { Router } from 'express';
const router = Router();

router.get('/', studentsController.getStudents)

router.get('/:id', studentsController.getStudent)

router.post('/', studentsController.newStudent)

router.put('/:id', studentsController.editStudent)

router.delete('/:id', studentsController.deleteStudent)

export default router;