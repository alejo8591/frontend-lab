var my_array = [1, 2, 3, 4, 5];
var other_array = ["array", 3, 5, 6, [1, 2, 3, 4]];
var tasks = [1, 3, 4, 5];
function greeter(person) {
    return person;
}
var user = ["1", "32"];
var yopo = ["yopp", "treo"];
var literla = 'yopo';
literla = 'trepe';
console.log(greeter(user));
var list = ["s", "s", "d"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
}
var Generic = (function () {
    function Generic() {
    }
    return Generic;
}());
var my_gen = new Generic();
console.log(my_gen.add = function (x, y) { return x + y; });
console.log(my_gen.add(3, 4));
