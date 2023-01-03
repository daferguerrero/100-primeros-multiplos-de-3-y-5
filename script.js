function esDivisible(num, divisor){
  if(num % divisor == 0){
    return true;
  }
  else{
  } false;
}

for (var i = 1; i <= 100; i = i + 1) {
  if (esDivisible(i, 3) && esDivisible(i, 5))
    document.write("FIZZ BUZZ <br>");
  else if (esDivisible(i, 3) && !esDivisible(i, 5))
    document.write("FIZZ <br>");
  else if (!esDivisible(i, 3) && esDivisible(i, 5))
    document.write("BUZZ <br>");
  else document.write(i + "<br>");
}