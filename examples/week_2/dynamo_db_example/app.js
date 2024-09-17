const {getItem, createItem, queryEmployee, scanEmployeesByRole, queryEmployeesByRole} = require('./EmployeeDAO');
const uuid = require("uuid");

let key = {
    employee_id: "a2681203-8cab-4c25-b727-9485b608927c",
    join_date: 1726579640
};

// getItem(key)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

async function createEmployee(name, email){
    let employee_id = uuid.v4();
    let join_date = Math.floor(new Date().getTime()/ 1000);

    let data = await createItem({employee_id, join_date, name, email});
    console.log(data);
}

// createEmployee("Mike Smith", "mike@email.com");

// queryEmployee(key.employee_id).then(data => console.log(data));

// scanEmployeesByRole("Engineer").then(data => console.log(data));

// queryEmployeesByRole("Accountant").then(data => console.log(data));