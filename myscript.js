var state = true;
function toggleLight(){
  var image = document.getElementById('image');
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";

}

var setting = 0;
var timeleft = 0;

function setTiming(){
  var input = document.getElementById('input').value;
  if (input == ""){
    alert("請輸入倒數秒數");
    return;
  }else if(isNaN(input)){
    alert("請輸入數字！");
    document.getElementById('input').value = "";
    return;
  }else{
   setting = setInterval(countDownTimer,1000);
   document.getElementById('timer').innerHTML = input;
  timeleft = input;
  document.getElementById('input').value = "";
  }
}



function countDownTimer(){
  timeleft = timeleft - 1;
  if (timeleft <= 0 ){
    document.getElementById('image').src ="img/off.jpg";
    clearInterval(setting);
  }
document.getElementById('timer').innerHTML = timeleft;

}
