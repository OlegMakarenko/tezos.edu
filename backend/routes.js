connector = require('./bchain_connector');

module.exports = function(app, db) {

    app.get('/get_students', (req, res) => {
        res.send(students)
    });

    app.get('/get_table', (req, res) => {
        const student = students.find(student => student.id === req.query.id)
        if(student){
            res.send(student.table)
        }
        
    });

    app.get('/get_student', (req, res) => {
        const student = students.find(student => student.id === req.query.id)
        res.send(student)
    });

    app.post('/add_record', (req, res) => {
        console.log(req.body)
        const student = students.find(student => student.id === req.body.id)
        if(student){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            student.table.unshift({value: req.body.score, date: today});
            countToatalScore(student);
            connector.makeTransaction(req.body.id, req.body.score);
            res.send(student)
        }
        
        
    });

}

function countToatalScore(student) {
    var total = 0;
    var count = 0;
    for(var key in student.table) 
        total += 1*student.table[key].value;
    
    student.score = total;
    return student;
}



const students = [
    {
        name: "Misha",
        score: 0,
        id: "tz1grSQDByRpnVs7sPtaprNZRp531ZKz6Jmm",
        table: [
        ]

    },
    {
        name: "Petro",
        score: 0,
        id: "tz1xcxcjhjfhsjdhfsjdfsdfsdf2",
        table: [

        ]
    },
    {
        name: "Akhmed",
        score: 0,
        id: "tz1xcxcjhjfhsjdhfsjdfsdfsdf3",
        table: [

        ]
    }
];

