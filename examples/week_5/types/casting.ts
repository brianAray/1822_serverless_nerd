// Casting
// Since we have access to types in Typescript, for the most part the behavior is as expected with the types
// However, sometimes the tsc compiler may not recognize or misunderstand something and you as a developer need to override its type
// We use casting for that reason

// Angle bracket Syntax
let x: any = "Hello";
let lengths: number = (<string>x).length;


// as-Syntax

let lengths2: number = (x as string).length;