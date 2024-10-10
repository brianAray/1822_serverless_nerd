// simple types
var age = 29;
var price = 34.33;
var personName = "Greg";
var isActive = false;
var names = ["Mike", "Jane", "Sherry"];
// Tuple
// A typed array with pre-defined length and types for each index
var person = ["Alice", 30];
// Enums
// Useful for creating a group of constants
// Two main types - String and Number enums
// Numeric Enum
// You can initialize enums with a different starting number
// By default, it starts from 0 and increments by 1
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 1] = "North";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
    CardinalDirection[CardinalDirection["West"] = 4] = "West";
})(CardinalDirection || (CardinalDirection = {}));
var currentDirection = CardinalDirection.North;
console.log(currentDirection);
var Statuscodes;
(function (Statuscodes) {
    Statuscodes[Statuscodes["NotFound"] = 404] = "NotFound";
    Statuscodes[Statuscodes["Success"] = 200] = "Success";
    Statuscodes[Statuscodes["Accepted"] = 202] = "Accepted";
    Statuscodes[Statuscodes["BadRequest"] = 400] = "BadRequest";
})(Statuscodes || (Statuscodes = {}));
;
console.log(Statuscodes.NotFound);
// String Enums
var StringEnumDirection;
(function (StringEnumDirection) {
    StringEnumDirection["UP"] = "Up";
    StringEnumDirection["RIGHT"] = "Right";
    StringEnumDirection["DOWN"] = "Down";
    StringEnumDirection["LEFT"] = "Left";
})(StringEnumDirection || (StringEnumDirection = {}));
console.log(StringEnumDirection.RIGHT);
