//creating a prototype for the particular datatype

let names = [];
Array.prototype.getLast = function () {
  if (this.length == 0) return null;
  return this[this.length - 1];
};

console.log(names.getLast());

//custom map function

//original map function
let ages = [10, 22, 23, 19, 40, 11];
// let newAges = ages.map((age) => age * 10);
// console.log(newAges);

Array.prototype.customMap = function (callback) {
  let len = this.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};
console.log(ages.customMap((age) => age * 20));

Array.prototype.customFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log(ages.customFilter((age) => age > 18));

//cuustom find method

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return null;
};

console.log(ages.customFind((age) => age >= 20));
