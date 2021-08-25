import Student from '../models/Student';
import mongoose from 'mongoose';

export const getStudents = async (req, res) => {

    try {
        const students = await Student.find({}, {})
        console.log('Ver estudiantes');
        res.json(students);
    } catch (error) {
        console.error(error);
    }
}

export const getStudent = async (req, res) => {

    console.log('Detalle de estudiante', req.params.id);
    try {
        const student = await Student.findOne({ _id: req.params.id });
        res.json(student);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const newStudent = async (req, res) => {
    console.log(req.file)

    try {
        const { firstName, lastName, birthdate, email, address, genre } = req.body;

        const newStudent = new Student({
            firstName,
            lastName,
            birthdate,
            email,
            address,
            genre
        })

        const savedStudent = await newStudent.save();
        console.log('Nuevo estudiante guardado: ');
        console.log(savedStudent); 

        res.json(savedStudent);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editStudent = async (req, res) => {

    try {
        const studentEdit = await Student.findOne({ _id: req.params.id });

        // Se asigna el nuevo valor solo si No es indefinido, de lo contrario permanece el mismo valor
        studentEdit.firstName = req.body.firstName!==undefined ? req.body.firstName : studentEdit.firstName;
        studentEdit.lastName = req.body.lastName!==undefined ? req.body.lastName : studentEdit.lastName;
        studentEdit.birthdate = req.body.birthdate!==undefined ? req.body.birthdate : studentEdit.birthdate;
        studentEdit.email = req.body.email!==undefined ? req.body.email : studentEdit.email;
        studentEdit.address = req.body.address!==undefined ? req.body.address : studentEdit.address;
        studentEdit.genre = req.body.genre!==undefined ? req.body.genre : studentEdit.genre;

        const studentUpdated = await studentEdit.save();
        console.log('Estudiante editado', studentUpdated);

        res.json(studentUpdated);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar', err: error })
        console.error('Error en actualizar', error);
    }

}

export const deleteStudent = async (req, res) => {

    try {
        const studentDelete = await Student.findOne({ _id: req.params.id });
        const deleted = await Student.deleteOne({ _id: studentDelete._id });
        res.json(deleted);
    } catch (error) {
        res.status(403).json({ message: 'Error en eliminar', err: error });
        console.error('Error en eliminar', error);
    }

}