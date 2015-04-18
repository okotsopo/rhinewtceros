function Tick() {
  var Today= new Date()
  var Hours= Today.getHours()
  var Seconds= Today.getSeconds()
  var Minutes= Today.getMinutes()
  $('#button').html(Hours + ":" + Minutes + ":" + Seconds)
}
function checkTime(i) {
if (i<10) {i = "0" + i}; // add zero in front of numbers < 10
return i;
}
