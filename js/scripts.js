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
    } else if (i.toString().includes("2")) {
      answer = "Boop!";
    } else if (i.toString().includes("3")) {
      answer = "Won't you be my neighbor?";
    }
    result.push(answer);
  } 
  return result;
}
$( document ).ready(function() {
  $('#process').click(function(){
    const numberFromTxt = $('#inputAge').val();
    const results = inputNumber(numberFromTxt);
    $('#numbers').html('');
    if (results.length === 0){
      $('#numbers').html('No Numbers to Display');
      return;
    }
    for(let i=0; i < results.length; i++){
      $('#numbers').append('<div>' + results[i] + '</div>');
    }
  })
});