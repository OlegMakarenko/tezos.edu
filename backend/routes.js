module.exports = function(app, db) {

    app.get('/get_students', (req, res) => {
        res.send(students)
    });

    app.get('/get_table', (req, res) => {
        res.send(table)
    });

    app.get('/get_student', (req, res) => {
        console.log(req.query)
        const student = students.find(student => student.id === req.query.id)
        res.send(student)
    });

    app.post('/add_record', (req, res) => {
        console.log(req.body)
    });

}



const students = [
    {
        name: "Taras",
        score: 85,
        id: "0xcxcjhjfhsjdhfsjdfsdfsdf1"
    },
    {
        name: "Petro",
        score: 70,
        id: "0xcxcjhjfhsjdhfsjdfsdfsdf2"
    },
    {
        name: "Akhmed",
        score: 93,
        id: "0xcxcjhjfhsjdhfsjdfsdfsdf3"
    }
];

const table = [
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    },
    {
        date: "14-12-16",
        value: 10
    }
]