//coding challenge #1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return `Area of circle1 with radius ${this.radius} is ${
      Math.PI * this.radius ** 2
    }`;
  }
  enlargeCircle() {
    return `Circle1 is enlarged 3 times
    Area of circle1 with radius ${this.radius * 3} is ${
      Math.PI * (this.radius * 3) ** 2
    }`;
  }
  shringCircle() {
    return `Circle is shrunk by halve
    Area of cicle1 with radius ${this.radius / 2} is ${
      Math.PI * (this.radius / 2) ** 2
    }`;
  }
}
let circle1 = new Circle(2);
console.log(circle1.getArea());
console.log(circle1.enlargeCircle());
console.log(circle1.shringCircle());

// // 2
// // for BankAccount
// class BankAccount {
//   constructor(name, savings) {
//     this.name = String(name);
//     // parse float returns a loating point number
//     this.savings = parseFloat(savings);
//   }
//   getBalance(name, savings) {
//     return `${name} has $ ${savings}`;
//   }
// }
// // //for the first person
// let bankAccount = new BankAccount();
// let getBalance = bankAccount.getBalance("Oliver Twist", "1000.0");
// console.log(getBalance);
// //for the second
// let bankAccount1 = bankAccount.getBalance("Richie Rich", "100000.0");
// console.log(bankAccount1);

// Question3

// class Fan {
//   constructor(speed, state) {
//     this.speed = Number(speed);
//     this.state = state;
//   }
//   getState() {
//     if (this.state === true) {
//       if (this.speed == 1) {
//         return `on at slow speed `;
//       } else if (this.speed == 2) {
//         return `on at medium speed `;
//       } else {
//         return `on at Top speed `;
//       }
//     } else {
//       return `off`;
//     }
//   }
// }
// let fan1 = new Fan(1, false);
// let fan2 = new Fan(2, true);
// console.log("fan 1 is ", fan1.getState());
// console.log("fan 2 is now ", fan2.getState());
