interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {value: 34};
const stringBox: Box<string> = {value: "hello"};

