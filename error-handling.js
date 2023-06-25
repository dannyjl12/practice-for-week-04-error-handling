// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
      throw new TypeError("Invalid array")
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.log(error.name + ": " + error.message);
}


try {
  sayName(1);
} catch (error) {
  console.log(error.name + ": " + error.message)
}
sayName("Alex");
// Your code here

function sayName(name) {
  if (typeof name !== "string") {
    throw new TypeError("Invalid name! Must be a string!")
  } else {
    console.log(name)
  }
}

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log(error.name + ": " + error.message)
} finally {
  console.log("Hello World!")
}
