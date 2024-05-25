const mongoose = require('mongoose');
const { Assignment, QuestionPaper, StudyMaterial } = require('../models/first_year');
const { connection } = mongoose;
const { GridFSBucket } = require('mongodb');
mongoose.connect('mongodb://localhost:27017/first_year', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost:27017/first_year',{
    
});

const db = mongoose.connection;
let gfs;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
    gfs = new GridFSBucket(db);
});

const seedDB = async () => {
    await Assignment.deleteMany({});
    await QuestionPaper.deleteMany({});
    await StudyMaterial.deleteMany({});

    // Create a buffer from a sample file data
    

    // Seed data for assignment
    const assignment = new Assignment({
        subject: 'DBMS',
        topic: 'SQL Queries',
        contentType: 'assignment',
        description: 'Description for assignment',
        file: {
            filename: 'assignment.pdf',
            contentType: 'application/pdf',
            size: 12345, // Provide actual size
            uploadDate: new Date() // Provide actual upload date
        }
    });
    await assignment.save();

    // Seed data for question paper
    const questionPaper = new QuestionPaper({
        subject: 'DBMS',
        topic: 'SQL Queries',
        contentType: 'questionPaper',
        description: 'Description for question paper',
        file: {
            filename: 'question_paper.pdf',
            contentType: 'application/pdf',
            size: 23456, // Provide actual size
            uploadDate: new Date() // Provide actual upload date
        }
    });
    await questionPaper.save();

    // Seed data for study material
    const studyMaterial = new StudyMaterial({
        subject: 'DBMS',
        topic: 'SQL Queries',
        contentType: 'studyMaterial',
        description: 'Description for study material',
        file: {
            filename: 'study_material.pdf',
            contentType: 'application/pdf',
            size: 34567, // Provide actual size
            uploadDate: new Date() // Provide actual upload date
        }
    });
    await studyMaterial.save();
};

seedDB();
