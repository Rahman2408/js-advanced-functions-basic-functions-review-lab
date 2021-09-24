// Your code here
function saturdayFun(target = 'roller-skate') {
  return `This Saturday, I want to ${target}!`
}

const mondayWork = function(target = 'go to the office') {
  return `This Monday, I will ${target}.`
}

function wrapAdjective(flair = '*') {
  return function(adj = 'special'){
    return `You are ${flair + adj + flair}!`
  }
}

const Calculator = {
 'add': function(num1, num2) {return num1 + num2}, 
 'subtract': function(num1, num2) {return num1 - num2}, 
 'multiply': function(num1, num2) {return num1 * num2},
 'divide': function(num1, num2) {return num1 / num2}
}

function actionApplyer(stNum, arryOfOperations) {
  for (let i = 0; i < arryOfOperations.length; i++){stNum = arryOfOperations[i](stNum)}
  return stNum
}