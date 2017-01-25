//Implementation of calculator
//In hind sight, having one massive function handle all button presses probably wasn't the best strategy. Would have been better to keep a variable x and y and update them when numbers are pressed, and have operators call a different function.  
// Bugs:
// 56++-9=47

var comp = 0;//stores numberss after pressing an opperator
var cleared = 1; //Bool: 1 = opp just pressed
var opp; //Stores pressed opps
var dec = 0; //Bool: 1 if there is a decimal on screen
var prevPress = 0;
// var prevPress;
function buttonHandle(button){
  currScreen = document.getElementById('screenVal').innerHTML;
  opp = document.getElementById('opp').innerHTML;
  if (button == 'C'){
    document.getElementById("screenVal").innerHTML = 0;
    comp = 0;
    dec = 0;
    opp = '';
    cleared = 1;
  }
  else if (button == '.'){
    if (dec == 0){
      dec = 1;
      document.getElementById("screenVal").innerHTML = currScreen + button;
    }
  }
  else if (button == '±'){
    document.getElementById("screenVal").innerHTML = (parseFloat(currScreen)*(-1));
  }
  else if (button == '÷'){
    if ((prevPress != '+')&&(prevPress != '-')&&(prevPress != '*')||(prevPress == '÷')){
      compute();
      comp = document.getElementById('screenVal').innerHTML;
    }
    opp = '÷';
    cleared = 1;
  }
  else if (button == '+'){
    if ((prevPress != '+')&&(prevPress != '-')&&(prevPress != '*')||(prevPress == '÷')){
      compute();
      comp = document.getElementById('screenVal').innerHTML;
    }
    opp = '+'
    cleared = 1;
  } 

  else if (button == '*'){
    if ((prevPress != '+')&&(prevPress != '-')&&(prevPress != '*')||(prevPress == '÷')){
      compute();
      comp = document.getElementById('screenVal').innerHTML;
    }
    opp = '×';
    cleared = 1;
  }
  else if (button == '-'){
    if ((prevPress != '+')&&(prevPress != '-')&&(prevPress != '*')||(prevPress == '÷')){
      compute();
      comp = document.getElementById('screenVal').innerHTML;
    }
    opp = '-';
    cleared = 1;
  }
  else if (button == '='){
    compute();
    opp = '';
    comp = 0;
    dec = 0;
    cleared = 1;
  }
  else if ((currScreen != 0)&&(!cleared)){
   document.getElementById("screenVal").innerHTML = currScreen + button;
 }
  else if(dec){
    document.getElementById("screenVal").innerHTML = currScreen + button;
  }else{//Replace screen with value
   document.getElementById("screenVal").innerHTML = button;
   cleared = 0;
 }
  prevPress = button;
  document.getElementById('opp').innerHTML = opp;
}
function compute(){
  //delete everything after comp?
  if (comp){
  // if ((comp)&&(button == '=')||(comp != currScreen)){
    if (opp == '+'){
      document.getElementById('screenVal').innerHTML = parseFloat(comp) + parseFloat(currScreen);
    }
    else if (opp == '-'){
      document.getElementById('screenVal').innerHTML = parseFloat(comp) - parseFloat(currScreen);
    }
    else if (opp == '×'){
      document.getElementById('screenVal').innerHTML = parseFloat(comp) * parseFloat(currScreen);
    }
    else if (opp == '÷'){
      if (currScreen != 0){
          document.getElementById('screenVal').innerHTML = (parseFloat(comp)/parseFloat(currScreen));
    }
      else{//Dividing by zero
        document.getElementById('screenVal').innerHTML = 'Not a number'
      }
    }
  }
}