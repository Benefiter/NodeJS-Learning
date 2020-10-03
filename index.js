const Joi = require('joi');

const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

const validateCourse = course => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
};

const handleRootGet = (req, res) => {
    res.send('Hello World!');
    res.end();
};

app.get('/', handleRootGet);

const handleGetApiCourses = (req, res) => {
    res.send(courses);
    res.end();
}
app.get('/api/courses', handleGetApiCourses)

const handleGetCourseWithId = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');

    res.send(course);
    res.end();
}
app.get('/api/courses/:id', handleGetCourseWithId);

const handlePostCourses = (req, res) => {
    const {error, value} = validateCourse(req.body);

    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: value.name
    }

    courses.push(course);
    res.send(course);
    res.end();

};

app.post('/api/courses', handlePostCourses);


const handleCoursePut = (req, res) => {
    // Look up the course
    // If not existing, retur 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');

    const {error} = validateCourse(req.body);
    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }

    //Update course
    // Return updated course
    course.name = req.body.name;
    res.send(course);
};

app.put('/api/courses/:id',handleCoursePut);
// const handleGetCourseWithYearMonth = (req, res) => {
//     // res.send(req.params);
//     req.query && res.send(req.query);
//     res.end();
// }
// app.get('/api/courses/:year/:month', handleGetCourseWithYearMonth);


const handleCourseDelete = (req, res) => {
    // Look up the course
    // Note existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
};

app.delete('/api/courses/:id', handleCourseDelete);

const port = process.env.PORT || 3000;
handleListen = (p) => console.log(`Listening on port ${p}...`);
app.listen(port, handleListen(port));