let stringRoot = "Hello world, I'm Peter"
function test(str) {
    let newString = stringRoot.slice(0, -11)+"...";
    console.log(newString);
}
test(stringRoot);

