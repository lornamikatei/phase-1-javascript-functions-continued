// code your solution here
function saturdayFun(activity= 'roller-skate'){
  console.log(`This Saturday, I want to ${activity}!`)  
  return `This Saturday, I want to ${activity}!`
}
// SaturdayFun

function mondayWork(doWhat = 'go to the office'){

    console.log(`This Monday, I will  ${doWhat}.`);
    return `This Monday, I will ${doWhat}.`
}

function wrapAdjective(part1='*'){
    // const encouragingPromptFunction =wrapAdjective("!!!")
    return function(emphatic="special"){
        return `You are ${part1}${emphatic}${part1}!`
    }
}

