class Pair<T, U> {
    constructor(public first: T, public second: U){}
}

// usage
const numberAndString = new Pair<number, string>(53, "Hello");