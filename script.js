"use strict";

// allows us to catch erroes. js lets things go wild wild west style
// bracket notation allows you to look at a certain element in an array
//

// 1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// addSubmission adds to array ^
// let submissions = [];

// console.log(submissions[1].name);

// key value vv "name: "
// 2
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// calling the function v
// addSubmission(submissions, "Garret", 100, "2020-01-24");

// console.log(submissions);

// Declare a function named deleteSubmissionByIndex
// Parameter(s): array , index
// Functionality: remove the object from the array at the specified index using the splice method. 4.

// 3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

// 4
const deleteSubmissionByName = (array, name) => {
  let targetedIndex = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(targetedIndex, 1);
};

// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

// 5
const editSubmission = (array, index, updatedScore) => {
  array[index].score = updatedScore;
  array[index].passed = updatedScore >= 60 ? true : false;
};

// editSubmission(submissions, 2, 75);
// console.log(submissions);

// //console.log(submissions[1].name);

// Functionality: return the object in the array that has the provided name . Use the find method.
// 6
const findSubmissionByName = (array, name) => {
  let found = array.find((name) => {
    return findName.name === name;
  });
  return found;
};

console.log(findSubmissionByName(""));

// Functionality: return the object in the array that has the lowest score. Use the forEach method to   loop through the whole array.
// 7
const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((currentObj) => {
    if (currentObj.score < currentLowest.score) {
      currentLowest = currentObj;
    }
  });
  return currentLowest;
};

// console.log(findLowestScore(score));

// Functionality: return the average quiz score. Use a for...of loop.
// 8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

// // 9
// // Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return item.passed === true;
  });
  return newArray;
};

console.log(filterPassing(submissions));

// // 10
// // Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to   90.
const filter90AndAbove = (array) => {
  let newArray = array.filter((obj) => {
    return obj.core >= 90;
  });
  return newArray;
};
