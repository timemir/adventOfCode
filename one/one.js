// Description: Find the elf with the most calories

// import the input
const input = require("./input.js");
// input is defined as follows:
// 1. Each group of numbers represents a single elf
// 2. Each line(Number) represents the amount of calories of a single food item
// 3. Each group is separated by a new line

function findElfWithMaxCalories(input) {
    // split the input into an array of elves (arrays of food items)
    const elves = input.split("\n\n").map((group) => group.split("\n"));

    // sum the calories of each elf
    const elvesAsSums = elves.map((elf) => {
        return elf.reduce((prev, curr) => +prev + +curr, 0);
    });

    // find the index of the max value
    const maxIndex = elvesAsSums.findIndex(
        (sum) => sum === Math.max(...elvesAsSums)
    );

    // return the max value, the index of the max value, and a message
    return [
        elvesAsSums[maxIndex],
        maxIndex + 1,
        `Elf ${maxIndex + 1} has the most calories with ${
            elvesAsSums[maxIndex]
        }.`,
    ];
}

console.log(findElfWithMaxCalories(input));
