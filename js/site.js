function showDate() {
  var date = new Date();
  var currentDate = date.toDateString();
  document.getElementById('time').innerHTML = currentDate;
}

showDate();

$( ".selector" ).dialog({
  maxHeight: 600
});