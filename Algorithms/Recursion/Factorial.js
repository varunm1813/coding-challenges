// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number === 1 || number === 0) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while (number > 1) {
    answer = number * answer;
    number--;
  }
  return answer;
}

findFactorialIterative(0);
