// const commonJsImports = require("./commonjs")
// const { printName, person } = require("./commonjs")

// console.log(commonJsImports.person);
// commonJsImports.printName();

// printName();
// console.log(person);

import { person as developer} from "./module.js";

import * as module_example from "./module.js";

module_example.printRole();
console.log(developer);