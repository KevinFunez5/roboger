function inputNumber(number){
  if (!number){
    return [];
    
  }
  const result = [];
  number = parseInt(number);
  for(let i = 0; i <= number; i++){
    let answer = i.toString();
    if (i.toString().includes('1')) {
      answer = "Beep!";
    }
    result.push(answer);
  } 
  return result;
}