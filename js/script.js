var today = dayjs()

$('#date-time').text(today.format('MMM D, YYYY h:mm:ss'));

var timerInterval = setInterval(function(){
    var today = dayjs()

    $('#date-time').text(today.format('MMM D, YYYY h:mm:ss'));

}, 1000);