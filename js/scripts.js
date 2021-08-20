function inputNumber(number) {
  if (!number) {
    return [];
  }
  const result = [];
  number = parseInt(number);
  if (number === 1){
    return "Beep!"
  } else if (number === 2) {
    return "Boop!"
  } else if ( number === 3) {
    return  "Won't you be my neighbor?"
  }

  for (i = 0; i <= number; i++)
}