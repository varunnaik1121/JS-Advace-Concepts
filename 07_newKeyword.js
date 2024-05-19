function createUser(name, age) {
  this.name = name;
  this.age = age;
}

createUser.prototype.increment = function () {
  console.log(this);
};
let user1 = new createUser('varun', 21); //whenever the new keyword is used the object is created {with the properties as name,age,increemnet function}
let user2 = new createUser('kiran', 22);
user1.increment();

//when the new keyword is inititalted
