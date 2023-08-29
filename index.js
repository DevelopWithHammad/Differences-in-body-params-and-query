import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;

// // Student data in JSON object
// const StudentData = {
//     "name": "Hammad Ur Rehman",
//     "fatherName": "Shafiq Ur Rehman",
// }

// // req.body
// app.get("/student", (req, res) => {
//     res.send(StudentData);
// })


// // req.params
// app.get("/student/:id", (req, res) => {
//     res.send(req.params);
// })


// // // req.query
// app.get("/student/:id", (req, res) => {
//     res.send(req.query);
// })



app.listen(PORT, () => {
    console.log("I am listening!")
})
