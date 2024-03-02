const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Student firstname can't be empty!"],
    },
    surname: {
        type: String,
        required: [true, "Student surname can't be empty!"],
    },
    email: {
        type: String,
        required: [true, "Student email is required and must be well formed!"],
    },
    age: {
        type: Number,
        required: [true, "Student age is mandatory!"],
        default: 0
    },
    grade: {
        type: String,
        required: [true, "Student grade is required!"]
    },
    image: {
        type: String,
        required: false
    }
},
{
    timestamps: true
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;