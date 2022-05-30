const person = {
  name: "Matt",
  age: 26,
  hobbies: ["Sports", "Cooking"],
};

function combine(input1: string | number, input2: string | number, resultConversion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}
