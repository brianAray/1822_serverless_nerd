/*
    Adding metadata and behavior to classes, methods, properties, and parameters

    To use this feature, you have use the flag:

    tsc --experimentalDecorators

    It will show errors, but you can ignore them
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// class decorator
function classDecorator(constructor) {
    console.log("class decorator has been called");
}
// method decorator
function methodDecorator(target, key, descriptor) {
    console.log("Method decorator called for ".concat(key));
}
// Property decorator
function propertyDecorator(target, key) {
    console.log("Property decorator called for ".concat(key));
}
// Parameter Decorator
function parameterDecorator(target, key, index) {
    console.log("Parameter decorator called for paraemter ".concat(index, " of ").concat(key));
}
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.message = "Hello";
        console.log("Class Instance Created");
    }
    MyClass.prototype.greet = function (name) {
        console.log("Hello ".concat(name));
    };
    __decorate([
        propertyDecorator
    ], MyClass.prototype, "message", void 0);
    __decorate([
        methodDecorator,
        __param(0, parameterDecorator)
    ], MyClass.prototype, "greet", null);
    MyClass = __decorate([
        classDecorator
    ], MyClass);
    return MyClass;
}());
var myClass = new MyClass();
myClass.greet("Mike");
