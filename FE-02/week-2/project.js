const fs = require('fs')

const employees = JSON.parse(fs.readFileSync('./employees.json', 'utf-8'))

const sortedBySalary = [...employees].sort((a, b) => {
    b.salary - a.salary
})

