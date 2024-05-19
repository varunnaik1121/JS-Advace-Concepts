async function test() {
  return 'hello 1';
}
//console.log(test()) will print the promise with value 'hello'

test().then((val) => console.log(val)); //this will print value 'hello'

function test1() {
  setTimeout(() => {
    console.log('hello 2');
  }, 0);
}

test1();
async function sayhello() {
  return 'hello 3';
}

sayhello().then((val) => console.log(val));

console.log('hello');
