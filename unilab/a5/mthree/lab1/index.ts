var my_array: Array<number> = [1, 2, 3, 4, 5];

var other_array: Array<any> = ["array", 3, 5, 6, [1, 2, 3, 4]];

var tasks: Array<number> = [1, 3, 4, 5];

function greeter(person: Array<string>) {
    return person;
}

var user: Array<string> = ["1", "32"];

var yopo: Array<any> = ["yopp", "treo"];

let literla = 'yopo';

literla = 'trepe';

console.log(greeter(user));

var list = ["s", "s", "d"];

for (let i of list) {
    console.log(i);
}

class Generic<T> {
    add: (X: T, Y: T) => T;
}

let my_gen = new Generic<number>();

console.log(my_gen.add = function (x, y) { return x + y });
console.log(my_gen.add(3, 4));




