// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...


// Multiplication tables

const multiplier = 9;
for (let i = 0; i <= 10; i++) {
  let result = multiplier * i;
  console.log(multiplier + " x " + i + " = " + result);
}

// Bonus
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
      let result = multiplier * i;
      console.log(multiplier + " x " + i + " = " + result);
    }
  }
