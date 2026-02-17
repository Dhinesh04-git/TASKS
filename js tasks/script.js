
let num="45.678";

console.log(Number(num).toFixed(2))

let a=10;
let b=3;

console.log(Math.pow(a,b))
console.log(Math.min(a,b))
console.log(Math.max(a,b))

let study= "jAVAsCrIPt";

console.log(study.toLowerCase());

let msg = "I love JavaScript";

console.log(msg.hasOwnProperty("JavaScript"));

let color = ["red", "green", "blue"];
color.push("yellow")
color.shift("red")
console.log(color)



let nums = [10, 20, 30, 40];

nums.reverse();
console.log(nums.join("-"))

let frontend = ["html", "css", "js"];
let backend = ["nodejs", "mysql"];

let fullstack=[frontend[0],frontend[1],frontend[2],backend[0],backend[1]]
console.log(fullstack)


let student={
    name:"dhinesh",
    age:22,
    skills:["wakeup","practie","sleep"],
    intro:function(name) {

        return "HI,MY NAME IS" +name;
        
    }
}

console.log(Object.keys(student), Object.values(student));
console.log(student.intro("dhinesh"))
console.log(student.skills[0]);
console.log(student.skills[1]);
console.log(student.skills[2]);


const car = {
  brand: "BMW",
  year: 2022,
};

car.model="X5";
delete car.year;

console.log(car.model);
console.log(car.hasOwnProperty("year"));


let word="dHINESH"

console.log(word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())


for(i=1;i<=10;i++)
{
    
    console.log(i + "x 157493038557575648" + "=" + i * 157493038557575648);
}

let randomNum = Math.floor(Math.random() * 1000000) + 1;
console.log(randomNum);  