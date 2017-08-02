module.exports = function (date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  month ++;
  if (month < 10) {
    month = '0' + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  var hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var offset = -date.getTimezoneOffset();
  var offsetHours = Math.abs(Math.floor(offset / 60));
  var offsetMinutes = Math.abs(offset) - offsetHours * 60;
  if (offsetHours < 10) {
    offsetHours = '0' + offsetHours;
  }
  if (offsetMinutes < 10) {
    offsetMinutes = '0' + offsetMinutes;
  }
  var offsetSign = '+';
  if (offset < 0) {
    offsetSign = '-';
  }
  return year + '-' + month + '-' + day +
    'T' + hours + ':' + minutes + ':' + seconds +
    offsetSign + offsetHours + ':' + offsetMinutes;
}