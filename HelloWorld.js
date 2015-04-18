function Tick() {
  var Today= new Date()
  var Hours= Today.getHours()
  Hours = unmilitary(Hours)
  var Seconds= Today.getSeconds()
  Seconds = addZero(Seconds)
  var Minutes= Today.getMinutes()
  Minutes = addZero(Minutes)
  $('#button').html(Hours + ":" + Minutes + ":" + Seconds)
}

function addZero(i) {
if (i<10) {i = "0" + i}; // add zero in front of numbers < 10
return i;
}

function unmilitary(hour) {
  if (hour>12) {
    return hour-12;
  }
  else {
    return hour
  }
}
