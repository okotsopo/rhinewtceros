function Tick() {
  var Today= new Date()
  updateLabel(Today)
}

function compareTimes () {
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 55, 0)
  var now = new Date();
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

function getAMPM(hour) {
  if (hour>=12) {
    return "PM"
  }
  else {
    return "AM"
  }
}

function startUp() {
  Tick()
  setInterval(Tick,1000)
  getMinutes()
}

function getMinutes() {
  for (minutes= 0; minutes<60; minutes++) {
  $('#minute').append("<option value =" + minutes +">"+ addZero(minutes) + "</option>")
  }
}

function updateLabel(Today) {
  var Hours= Today.getHours()
  var AMPM = getAMPM(Hours)
  Hours = unmilitary(Hours)
  var Seconds= Today.getSeconds()
  Seconds = addZero(Seconds)
  var Minutes= Today.getMinutes()
  Minutes = addZero(Minutes)
  $('#button').html(Hours + ":" + Minutes + ":" + Seconds + " " + AMPM)
}
