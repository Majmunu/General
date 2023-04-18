let str = 'hello';

// for (let it = str[Symbol.iterator](), v, result; (result = it.next()) && !result.done && (v = result.value || true); ) {
//     console.log(v);
// }
let it1 = str[Symbol.iterator]();
for (let v of it1) {
    console.log(v);
}
