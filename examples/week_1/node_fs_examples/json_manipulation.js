const fs = require('fs');

// Reading data from a json file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// console.log(data);

// Updating data from a json file

let newItem = {
    name: "Apple",
    price: 3.00,
    purchased: false
};

data.grocery_list.push(newItem);

fs.writeFileSync("data.json", JSON.stringify(data), 'utf8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Data updated");
})