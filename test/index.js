var update = require("../src/index");

var obj = { a: 1, b: true, c: "hello world", d: { e: 1 }, f: [1, 2, 3, 4] };
var objNew = update(obj, draft => {
  draft.a = 100;
  draft.b = false;
  draft.d.e = 100;
  draft.f.push(5);
});

console.log("obj", obj);
console.log("objNew", objNew);
