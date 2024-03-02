const { model } = require('mongoose');
const Student = require('../models/student.model.js');

// GET ALL Students
const getStudents = async (req, resp) => {
    try {
        const students = await Student.find({});
        resp.status(200).json(students);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
}

// GET A Student
const getStudent = async (req, resp) => {
    try {
        const student = await Student.findById(req.params.id);
        resp.status(200).json(student);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
}

// CREATE A NEW Student
const createStudent = async (req, resp) => {
    try {
        const student = await Student.create(req.body);
        resp.status(201).json(student);
    } catch (error) {
        console.log(req);
        resp.status(500).json({ message: error.message });
    }
};

// Update A Student
const updateStudent = async (req, resp) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body);
        resp.status(200).json(updateStudent);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

// DELETE A Student
const deleteStudent = async (req, resp) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            resp.status(404).json({ message: `student with id: ${id} does not exist!` })
        } else {
            resp.status(200).json({ message: `Student's ${id} deleted successfully!` });
        }
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
};