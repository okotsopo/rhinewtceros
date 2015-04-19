function Tick() {
    var Today= new Date();
    var Selected = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate(), military($('#hour').val(), $('#AMPM').val()), $('#minute').val(), 0);
    updateLabel(Today);

    var SelectedMinus8Hours = new Date(Selected);
    SelectedMinus8Hours.setHours(SelectedMinus8Hours.getHours() - 8);

    var SelectedMinus9Hours = new Date(Selected);
    SelectedMinus9Hours.setHours(SelectedMinus9Hours.getHours() - 9);

    var SelectedMinus7Hours = new Date(Selected);
    SelectedMinus7Hours.setHours(SelectedMinus7Hours.getHours() - 7);

    if (Today.getSeconds() == 0 && Today.getMinutes() == Selected.getMinutes() && Today.getHours() == Selected.getHours()) {
	jAlert("Sleep no more!","Time to wake up!")
    }
    if (Today.getSeconds() == 0 && Today.getMinutes() == SelectedMinus8Hours.getMinutes() && Today.getHours() == SelectedMinus8Hours.getHours()) {
      jAlert("Time to go to sleep!", "Sleeeeepp");
      window.open('http://i.imgur.com/aRunCsS.png');
    }
    if (Today.getSeconds() == 0 && Today.getMinutes() == SelectedMinus9Hours.getMinutes() && Today.getHours() == SelectedMinus9Hours.getHours()) {
      jAlert("You have to go to sleep in an hour", "Get excited!!")
      window.open('http://i.imgur.com/OfDUyyJ.png');
    }
    if (Today.getSeconds() == 0 && Today.getMinutes() == SelectedMinus7Hours.getMinutes() && Today.getHours() == SelectedMinus7Hours.getHours()) {
      jAlert("Go to sleep, dammit.", "Not amused")
      window.open('http://i.imgur.com/IBBhbPb.jpg');
    }
}

function compareTimes () {
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 55, 0)
  var now = new Date();
}

function addZero(i) {
if (i<10) {i = "0" + i}; // add zero in front of numbers < 10
return i;
}

function military(hour, AMPM) {
    if (AMPM == "AM") {
	return hour;
    } else {
	return parseInt(hour) + 12;
    }

}

function getSelectedDate(Today) {

    var year = Today.getFullYear();
    var month = Today.getFullMonth();
    var date = Today.getDate();
    var hour = military($('#hour').val(), $('#AMPM').val());
    var minute = $('#minute').val();

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
