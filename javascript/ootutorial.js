document.getElementById('heading').style.color ="hotpink";

let person = {
  firstName: "John",
  lastName: "smith",
  age: 50,
  eyeColor:"blue",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  get color() {
    return this.eyeColor.toUppercase();
  }
};

console.log(person);

console.log(person.firstName +" is " + person.age + " years old.");

for(x in person){
  console.log(person[x]);
}

let text = "";
for (x in person){
  text = text + " " + person[x];
}
console.log("-------nationality added-------");

person.nationality = "English";
console.log(person.nationality);

console.log("-------age has been delete-------");
delete person.age;
for(x in person){
  console.log(person[x]);
}
console.log("-------getting full name-------");
console.log(person.fullName);
