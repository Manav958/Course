const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: String,
    contentType: String,
    size: Number,
    uploadDate: Date
});


const assignmentSchema = new Schema({
    subject: String,
    topic: String,
    contentType:String,
    description: String,
    file: fileSchema
});

const questionPaperSchema = new Schema({
    subject: String,
    topic: String,
    contentType:String,
    description: String,
    file: fileSchema
});

const studyMaterialSchema = new Schema({
    subject: String,
    topic: String,
    contentType:String,
    description: String,
    file: fileSchema
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
const QuestionPaper = mongoose.model('QuestionPaper', questionPaperSchema);
const StudyMaterial = mongoose.model('StudyMaterial', studyMaterialSchema);


module.exports = {
    Assignment,
    QuestionPaper,
    StudyMaterial
};